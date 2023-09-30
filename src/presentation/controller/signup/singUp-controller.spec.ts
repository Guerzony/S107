/* eslint-disable no-undef */
import { SignUpController } from './singUp-controller'
import { MissingParamError, ServerError } from '../../errors'
import {
  AddUserModel,
  AddUser,
  UserModel,
  CompanyModel,
  Validation,
  AddCompany,
  AddCompanyModel,
  MailService,
  sendEmail,
  LoadUserByCorporateName,
  LoadUserByEmail
} from './signup-controller-protocols'
import {
  ok,
  serverError,
  badRequest
} from '../../helpers/http-helper'
import { connection } from '../../../main/config/app'
import mysql from 'mysql'
import env from '../../../main/config/env'
import {
  AddConfigs,
  AddConfigsModel
} from '../../../domain/usecases/add-configs'
import { ConfigsModel } from '../../../domain/models/configs'
import { mockInsertEquip } from '../../../domain/mocks/equipment'
import { makeFakeRequestUserAdm, mockCompanyModel, mockReturnCompany, mockReturnUser, mockReturnUserConfigs, mockUserConfigsModel } from '../../../domain/mocks/user'
import { CreateUserError } from '../../errors/creat-user-error'
import { Options } from 'nodemailer/lib/mailer'

const makeAddUser = (): AddUser => {
  class AddUserStub implements AddUser {
    async add(user: AddUserModel): Promise<UserModel> {
      return new Promise((resolve) => resolve(mockReturnUser()))
    }
  }
  return new AddUserStub()
}

const makeAddCompany = (): AddCompany => {
  class AddCompanyStub implements AddCompany {
    async add(user: AddCompanyModel): Promise<CompanyModel> {
      return new Promise((resolve) => resolve(mockReturnCompany()))
    }
  }
  return new AddCompanyStub()
}

const makeAddConfigs = (): AddConfigs => {
  class AddConfigsStub implements AddConfigs {
    async add(configs: AddConfigsModel): Promise<ConfigsModel> {
      return new Promise((resolve) => resolve(mockReturnUserConfigs()))
    }
  }

  return new AddConfigsStub()
}

const makeValidation = (): Validation => {
  class ValidationStub implements Validation {
    validate(input: any): Error | null {
      return null
    }
  }
  return new ValidationStub()
}

const makeLoadUserByCompany = (): LoadUserByCorporateName => {
  class LoadUserByCorporateNameStub implements LoadUserByCorporateName {
    async loadUser(corporateName: string): Promise<UserModel | null> {
      return new Promise((resolve) => resolve(null))
    }
  }
  return new LoadUserByCorporateNameStub()
}

const makeLoadUserByEmail = (): LoadUserByEmail => {
  class LoadUserByEmailStub implements LoadUserByEmail {
    async loadUser(email: string): Promise<UserModel | null> {
      return new Promise((resolve) => resolve(null))
    }
  }
  return new LoadUserByEmailStub()
}

const makeSendEmail = (): sendEmail => {
  class SendEmailStub implements sendEmail {
    sendMail(mailOptions: Options): void {

    }
  }
  return new SendEmailStub()
}

interface SutTypes {
  sut: SignUpController;
  addUserStub: AddUser;
  addCompanyStub: AddCompany;
  userValidationStub: Validation;
  companyValidationStub: Validation;
  mailService: sendEmail;
  addConfigsStub: AddConfigs;
  loadUserByCorporateNameStub: LoadUserByCorporateName,
  loadUserByEmailStub: LoadUserByEmail
}

const makeSut = (): SutTypes => {
  const addUserStub = makeAddUser()
  const userValidationStub = makeValidation()
  const addCompanyStub = makeAddCompany()
  const companyValidationStub = makeValidation()
  const mailService = makeSendEmail()
  const addConfigsStub = makeAddConfigs()
  const loadUserByCorporateNameStub = makeLoadUserByCompany()
  const loadUserByEmailStub = makeLoadUserByEmail()

  const sut = new SignUpController(
    addUserStub,
    addCompanyStub,
    addConfigsStub,
    userValidationStub,
    companyValidationStub,
    mailService,
    loadUserByCorporateNameStub,
    loadUserByEmailStub
  )
  return {
    sut,
    addUserStub,
    addCompanyStub,
    userValidationStub,
    companyValidationStub,
    mailService,
    addConfigsStub,
    loadUserByCorporateNameStub,
    loadUserByEmailStub
  }
}

describe('SingUp Controller', () => {
  beforeAll(() => jest.setTimeout(30 * 1000))

  afterAll(async () => {
    connection.end()
    testConnection.end()
    jest.setTimeout(5 * 1000)
  })

  const testConnection = mysql.createPool(env.dbTest)

  test('Should return 500 if AddAccount throws', async () => {
    const { sut, addUserStub } = makeSut()
    jest.spyOn(addUserStub, 'add').mockImplementationOnce(async () => {
      return new Promise((resolve, reject) => reject(new Error()))
    })
    const httpResponse = await sut.handle(await makeFakeRequestUserAdm())
    expect(httpResponse).toEqual(serverError(new ServerError(null)))
  })

  test('Should call UserValidation with correct values', async () => {
    const { sut, userValidationStub } = makeSut()
    const userValidateSpy = jest.spyOn(userValidationStub, 'validate')
    const httpRequest = await makeFakeRequestUserAdm()
    await sut.handle(httpRequest)
    expect(userValidateSpy).toHaveBeenCalledWith(httpRequest.body.user)
  })

  test('Should return 400 if UserValidation returns an error', async () => {
    const { sut, userValidationStub } = makeSut()
    jest
      .spyOn(userValidationStub, 'validate')
      .mockReturnValueOnce(new MissingParamError('any_field'))
    const httpResponse = await sut.handle(await makeFakeRequestUserAdm())
    expect(httpResponse).toEqual(
      badRequest(new MissingParamError('any_field'))
    )
  })

  test('Should return 403 if AddAccount returns null', async () => {
    const { sut, addUserStub } = makeSut()
    jest
      .spyOn(addUserStub, 'add')
      .mockReturnValueOnce(new Promise((resolve) => resolve(null)))
    const httpResponse = await sut.handle(await makeFakeRequestUserAdm())
    expect(httpResponse).toEqual(badRequest(new CreateUserError()))
  })

  test('Should call AddCompany with correct values', async () => {
    const { sut, addCompanyStub } = makeSut()
    const addSpy = jest.spyOn(addCompanyStub, 'add')
    const httpRequest = await makeFakeRequestUserAdm()
    await sut.handle(httpRequest)
    expect(addSpy).toHaveBeenCalledWith(mockCompanyModel())
  })

  test('Should return 500 if AddCompany throws', async () => {
    const { sut, addCompanyStub } = makeSut()
    jest.spyOn(addCompanyStub, 'add').mockImplementationOnce(async () => {
      return new Promise((resolve, reject) => reject(new Error()))
    })
    const httpResponse = await sut.handle(await makeFakeRequestUserAdm())
    expect(httpResponse).toEqual(serverError(new ServerError(null)))
  })

  test('Should call CompanyValidation with correct values', async () => {
    const { sut, companyValidationStub } = makeSut()
    const userValidateSpy = jest.spyOn(companyValidationStub, 'validate')
    const httpRequest = await makeFakeRequestUserAdm()
    await sut.handle(httpRequest)
    expect(userValidateSpy).toHaveBeenCalledWith(httpRequest.body.company)
  })

  test('Should return 400 if CompanyValidation returns an error', async () => {
    const { sut, userValidationStub } = makeSut()
    jest
      .spyOn(userValidationStub, 'validate')
      .mockReturnValueOnce(new MissingParamError('any_field'))
    const httpResponse = await sut.handle(await makeFakeRequestUserAdm())
    expect(httpResponse).toEqual(
      badRequest(new MissingParamError('any_field'))
    )
  })

  test('Should return 403 if AddCompany returns null', async () => {
    const { sut, addCompanyStub } = makeSut()
    jest
      .spyOn(addCompanyStub, 'add')
      .mockReturnValueOnce(new Promise((resolve) => resolve(null)))
    const httpResponse = await sut.handle(await makeFakeRequestUserAdm())
    expect(httpResponse).toEqual(badRequest(new CreateUserError()))
  })

  test('Should call AddConfigs with correct values', async () => {
    const { sut, addConfigsStub } = makeSut()
    const addSpy = jest.spyOn(addConfigsStub, 'add')
    const response = await sut.handle(await makeFakeRequestUserAdm())
    console.log(response.body)
    expect(addSpy).toHaveBeenCalledWith(mockUserConfigsModel(response.body.user.id))
  })

  test('Should return 500 if AddConfigs throws', async () => {
    const { sut, addConfigsStub } = makeSut()
    jest.spyOn(addConfigsStub, 'add').mockImplementationOnce(async () => {
      return new Promise((resolve, reject) => reject(new Error()))
    })
    const httpResponse = await sut.handle(await makeFakeRequestUserAdm())
    expect(httpResponse).toEqual(serverError(new ServerError(null)))
  })


})
