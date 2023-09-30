/* eslint-disable no-undef */
import { badRequest, created, serverError } from '../../helpers/http-helper'
import { connection } from '../../../main/config/app'
import setUpRoutes from '../../../main/config/routes'
import setUpMiddlewares from '../../../main/config/middlewares'
import express from 'express'
import env from '../../../main/config/env'
import mysql from 'mysql'
import { Validation, sendEmail } from '../../protocols'
import { LoadRecoverMenusByIdUser } from '../../../domain/usecases/load-recover-menu-by-idUser'
import { RecoverMenusController } from './recover-menu-controller'
import { makeFakeRequestGetMenuByIdUser, mockEquipmentOldModel, mockReturnMenuOld, mockReturnUserOld } from '../../../domain/mocks/user-old'
import { AddRecoverMenus } from '../../../domain/usecases/add-recover-menu'
import RecoverMenus from '../../../domain/models/models-old/UserMenus'
import { UserRecoverMenuModel } from '../../../domain/models/user'
import { LoadUserOldByEmail } from '../../../domain/usecases/load-userOld-by-email'
import { UserOldModel } from '../../../domain/models/userOld'
import { LoadRecoverEquipByIdUser } from '../../../domain/usecases/load-recover-equip-by-idUser'
import LinuxEquipment from '../../../domain/models/models-old/LinuxEquipment'
import { AddRecoverEquipment } from '../../../domain/usecases/add-recover-equipment'
import { MailService } from '../../../utils/send-email-adapter'
import { Options } from 'nodemailer/lib/mailer'

const makeValidation = (): Validation => {
  class ValidationStub implements Validation {
    validate(input: any): Error | null {
      return null
    }
  }
  return new ValidationStub()
}

class LoadRecoverMenusByIdUserStub implements LoadRecoverMenusByIdUser {
  loadMenu(id: number): Promise<any[] | null> {
    return new Promise(resolve => resolve([mockReturnMenuOld()]))
  }
}

class AddRecoverMenusStub implements AddRecoverMenus {
  createMenu(menu: RecoverMenus[], user: UserRecoverMenuModel): Promise<void> {
    return new Promise(resolve => resolve())
  }
}

class LoadUserOldByEmailStub implements LoadUserOldByEmail {
  loadUser(email: string): Promise<UserOldModel | null> {
    return new Promise(resolve => resolve(mockReturnUserOld()))
  }
}

class LoadRecoverEquipByIdUserStub implements LoadRecoverEquipByIdUser {
  async loadEquip(id: number): Promise<LinuxEquipment[] | null> {
    return [mockEquipmentOldModel()]
  }
}

class AddRecoverEquipmentStub implements AddRecoverEquipment {
  createEquipment(equip: LinuxEquipment[], user: UserRecoverMenuModel): Promise<void> {
    return new Promise(resolve => resolve())
  }
}

class SendEmailStub implements sendEmail {
  sendMail(mailOptions: Options): void {

  }
}

interface SutTypes {
  sut: RecoverMenusController
  ValidationStub: Validation
  loadRecoverMenusByIdUserStub: LoadRecoverMenusByIdUserStub
  addRecoverMenusStubStub: AddRecoverMenusStub
  loadUserOldByEmailStub: LoadUserOldByEmail
  loadRecoverEquipByIdUserStub: LoadRecoverEquipByIdUser
  addRecoverEquipmentStub: AddRecoverEquipmentStub
  mailService: sendEmail;
}

const makeSut = (): SutTypes => {
  const ValidationStub = makeValidation()
  const loadRecoverMenusByIdUserStub = new LoadRecoverMenusByIdUserStub()
  const addRecoverMenusStubStub = new AddRecoverMenusStub()
  const loadUserOldByEmailStub = new LoadUserOldByEmailStub()
  const loadRecoverEquipByIdUserStub = new LoadRecoverEquipByIdUserStub()
  const addRecoverEquipmentStub = new AddRecoverEquipmentStub()
  const mailService = new SendEmailStub()
  const sut = new RecoverMenusController(ValidationStub, loadRecoverMenusByIdUserStub, addRecoverMenusStubStub, loadUserOldByEmailStub, loadRecoverEquipByIdUserStub, addRecoverEquipmentStub, mailService)
  return {
    sut,
    ValidationStub,
    loadRecoverMenusByIdUserStub,
    addRecoverMenusStubStub,
    loadUserOldByEmailStub,
    loadRecoverEquipByIdUserStub,
    addRecoverEquipmentStub,
    mailService
  }
}

describe('LoadMenu Controller', () => {
  afterAll(() => {
    testConnection.end()
    connection.end()
  })

  const testConnection = mysql.createPool(env.dbTest)
  const app1 = express()
  setUpMiddlewares(app1)
  setUpRoutes(app1, testConnection)

  test('Should call Validation with correct values', async () => {
    const { sut, ValidationStub } = makeSut()
    const validateSpy = jest.spyOn(ValidationStub, 'validate')
    const httpRequest = await makeFakeRequestGetMenuByIdUser()
    await sut.handle(httpRequest)
    expect(validateSpy).toHaveBeenCalledWith(httpRequest.body.user)
  })

  test('Should return 400 if Validation fails', async () => {
    const { sut, ValidationStub } = makeSut()
    jest.spyOn(ValidationStub, 'validate').mockReturnValueOnce(new Error())
    const httpRequest = await makeFakeRequestGetMenuByIdUser()
    const httpResponse = await sut.handle(httpRequest)
    expect(httpResponse).toEqual(badRequest(new Error()))
  })

  test('Should call loadUserMenuStub with correct values', async () => {
    const { sut, loadRecoverMenusByIdUserStub } = makeSut()
    const addMenuSpy = jest.spyOn(loadRecoverMenusByIdUserStub, 'loadMenu')
    const httpRequest = await makeFakeRequestGetMenuByIdUser()
    const { userId } = httpRequest.body.user
    await sut.handle(httpRequest)
    expect(addMenuSpy).toHaveBeenCalledWith(userId)
  })

  test('Should return 500 UpdateMenu throws', async () => {
    const { sut, loadRecoverMenusByIdUserStub } = makeSut()
    jest.spyOn(loadRecoverMenusByIdUserStub, 'loadMenu').mockImplementationOnce(() => { throw new Error() })
    const httpRequest = await makeFakeRequestGetMenuByIdUser()
    const httpResponse = await sut.handle(httpRequest)
    expect(httpResponse).toEqual(serverError(new Error()))
  })

  test('Should return 204 on success', async () => {
    const { sut } = makeSut()
    const httpRequest = await makeFakeRequestGetMenuByIdUser()
    const httpResponse = await sut.handle(httpRequest)
    expect(httpResponse).toEqual(created({
      response: 'create success menus'
    }))
  })

  test('Should call loadUserOldByEmailStub with correct values', async () => {
    const { sut, loadUserOldByEmailStub } = makeSut()
    const loadRecipeSpy = jest.spyOn(loadUserOldByEmailStub, 'loadUser')
    const httpRequest = await makeFakeRequestGetMenuByIdUser()
    const { email } = httpRequest.body.user
    await sut.handle(httpRequest)
    expect(loadRecipeSpy).toHaveBeenCalledWith(email)
  })

  test('Should return 500 loadUserOldByEmail throws', async () => {
    const { sut, loadUserOldByEmailStub } = makeSut()
    jest.spyOn(loadUserOldByEmailStub, 'loadUser').mockImplementationOnce(() => { throw new Error() })
    const httpRequest = await makeFakeRequestGetMenuByIdUser()
    const httpResponse = await sut.handle(httpRequest)
    expect(httpResponse).toEqual(serverError(new Error()))
  })
})
