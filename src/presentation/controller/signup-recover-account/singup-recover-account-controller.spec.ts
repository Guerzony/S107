/* eslint-disable no-undef */
import { SignupRecoverAccountController } from './singup-recover-account-controller'
import { EmailInUseError, MissingParamError, ServerError } from '../../errors'
import {
  AddUserModel,
  AddUser,
  UserModel,
  CompanyModel,
  Validation,
  AddCompany,
  AddCompanyModel,
  MailService,
  sendEmail
} from './signup-recover-account-controller-protocols'
import {
  ok,
  serverError,
  badRequest,
  forbidden
} from '../../helpers/http-helper'
import { CompanyExistsError } from '../../errors/company-already- exists-error'
import {
  AddConfigs,
  AddConfigsModel
} from '../../../domain/usecases/add-configs'
import { ConfigsModel } from '../../../domain/models/configs'
import { mockInsertEquip } from '../../../domain/mocks/equipment'
import { makeFakeRequestUserAdm, mockCompanyModel, mockReturnCompany, mockReturnUser, mockReturnUserConfigs, mockUserConfigsModel } from '../../../domain/mocks/user'
import { LoadUserByCorporateName } from '../../../domain/usecases/load-user-by-corporateName'
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

class SendEmailStub implements sendEmail {
  sendMail(mailOptions: Options): void {

  }
}

class LoadUserByCorporateNameStub implements LoadUserByCorporateName {
  loadUser(corporateName: string): Promise<UserModel | null> {
    return new Promise(resolve => resolve(null))
  }
}

interface SutTypes {
  sut: SignupRecoverAccountController;
  addUserStub: AddUser;
  addCompanyStub: AddCompany;
  userValidationStub: Validation;
  companyValidationStub: Validation;
  mailService: sendEmail;
  addConfigsStub: AddConfigs;
  loadUserByCorporateNameStub: LoadUserByCorporateName;
}

const makeSut = (): SutTypes => {
  const addUserStub = makeAddUser()
  const userValidationStub = makeValidation()
  const addCompanyStub = makeAddCompany()
  const companyValidationStub = makeValidation()
  const mailService = new SendEmailStub()
  const addConfigsStub = makeAddConfigs()
  const loadUserByCorporateNameStub = new LoadUserByCorporateNameStub()
  const sut = new SignupRecoverAccountController(
    addUserStub,
    addCompanyStub,
    addConfigsStub,
    userValidationStub,
    companyValidationStub,
    mailService,
    loadUserByCorporateNameStub
  )
  return {
    sut,
    addUserStub,
    addCompanyStub,
    userValidationStub,
    companyValidationStub,
    mailService,
    addConfigsStub,
    loadUserByCorporateNameStub
  }
}

describe('Signup recover account controller', () => {
  beforeAll(() => jest.setTimeout(30 * 1000))

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
    expect(httpResponse).toEqual(forbidden(new EmailInUseError()))
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
    expect(httpResponse).toEqual(forbidden(new CompanyExistsError()))
  })

  test('Should call AddConfigs with correct values', async () => {
    const { sut, addConfigsStub } = makeSut()
    const addSpy = jest.spyOn(addConfigsStub, 'add')
    const response = await sut.handle(await makeFakeRequestUserAdm())
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

  test('Should return 200 if valid data is provided', async () => {
    await mockInsertEquip()
    const { sut } = makeSut()
    const httpResponse = await sut.handle(await makeFakeRequestUserAdm())
    expect(httpResponse).toEqual(
      ok({
        user: mockReturnUser(),
        company: mockReturnCompany(),
        configs: mockReturnUserConfigs()
      })
    )
  })
})
