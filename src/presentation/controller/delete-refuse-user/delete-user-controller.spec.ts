import { describe, test, expect, jest } from '@jest/globals'
import { Validation, sendEmail } from '../../protocols'
import { DeleteRecuseUserController } from './delete-user-controller'
import { badRequest, ok, serverError } from '../../helpers/http-helper'
import { MissingParamError } from '../../errors'
import { NoRowsAffected } from '../../errors/no-rows-affected-error'
import { DeleteUser } from '../../../domain/usecases/delete-user'
import { mockDeleteRecuseUserRequest } from '../../../domain/mocks/user'
import { MailService } from '../../../utils/send-email-adapter'
import { Options } from 'nodemailer/lib/mailer'
class ValidationStub implements Validation {
  validate(input: any): Error | null {
    return null
  }
}

class DeleteUserStub implements DeleteUser {
  async deleteUser(id: number): Promise<boolean> {
    return true
  }
}
class SendEmailStub implements sendEmail {
  sendMail(mailOptions: Options): void {
  }
}

type SutTypes = {
  sut: DeleteRecuseUserController
  validationStub: Validation
  deleteUserStub: DeleteUser
  mailService: sendEmail
}

const makeSut = (): SutTypes => {
  const validationStub = new ValidationStub()
  const deleteUserStub = new DeleteUserStub()
  const mailService = new SendEmailStub()
  const sut = new DeleteRecuseUserController(validationStub, deleteUserStub, mailService)
  return { sut, validationStub, deleteUserStub, mailService }
}

describe('Testing the DeleteUserController class', () => {
  describe('Dependency with Validator class', () => {
    test('should call the validate method only once', async () => {
      const { sut, validationStub } = makeSut()
      const validateSpy = jest.spyOn(validationStub, 'validate')
      const httpRequest = await mockDeleteRecuseUserRequest()
      await sut.handle(httpRequest)
      expect(validateSpy).toHaveBeenCalledTimes(1)
    })
    test('should call the validate method with the correct parameter', async () => {
      const { sut, validationStub } = makeSut()
      const validateSpy = jest.spyOn(validationStub, 'validate')
      const httpRequest = await mockDeleteRecuseUserRequest()
      await sut.handle(httpRequest)
      expect(validateSpy).toHaveBeenCalledWith(httpRequest.params)
    })
    test('should return 200 if the validate method returns null', async () => {
      const { sut } = makeSut()
      const httpRequest = await mockDeleteRecuseUserRequest()
      const httpResponse = await sut.handle(httpRequest)
      expect(httpResponse).toEqual(ok({}))
    })
    test('should return 400 if the validate returns error', async () => {
      const { sut, validationStub } = makeSut()
      jest.spyOn(validationStub, 'validate').mockReturnValue(new Error())
      const httpRequest = await mockDeleteRecuseUserRequest()
      const httpResponse = await sut.handle(httpRequest)
      expect(httpResponse).toEqual(badRequest(new MissingParamError('id')))
    })
  })
  describe('Dependency with class DeleteUserStub implements DeleteUser', () => {
    test('should call the delete method only once', async () => {
      const { sut, deleteUserStub } = makeSut()
      const dbDeleteSpy = jest.spyOn(deleteUserStub, 'deleteUser')
      const httpRequest = await mockDeleteRecuseUserRequest()
      await sut.handle(httpRequest)
      expect(dbDeleteSpy).toHaveBeenCalledTimes(1)
    })
    test('should call the delete method with the correct parameter', async () => {
      const { sut, deleteUserStub } = makeSut()
      const dbDeleteSpy = jest.spyOn(deleteUserStub, 'deleteUser')
      const httpRequest = await mockDeleteRecuseUserRequest()
      await sut.handle(httpRequest)
      expect(dbDeleteSpy).toHaveBeenCalledWith(httpRequest.params.id)
    })
    test('should return 200 if the delete method returns true ', async () => {
      const { sut } = makeSut()
      const httpRequest = await mockDeleteRecuseUserRequest()
      const httpResponse = await sut.handle(httpRequest)
      expect(httpResponse).toEqual(ok({}))
    })
    test('should return 400 if the delete method returns false ', async () => {
      const { sut, deleteUserStub } = makeSut()
      jest.spyOn(deleteUserStub, 'deleteUser').mockResolvedValue(false)
      const httpRequest = await mockDeleteRecuseUserRequest()
      const httpResponse = await sut.handle(httpRequest)
      expect(httpResponse).toEqual(badRequest(new NoRowsAffected(httpRequest.params.id)))
    })
    test('should return 500 if the delete method throws', async () => {
      const { sut, deleteUserStub } = makeSut()
      jest.spyOn(deleteUserStub, 'deleteUser').mockRejectedValue(new Error())
      const httpRequest = await mockDeleteRecuseUserRequest()
      const httpResponse = await sut.handle(httpRequest)
      expect(httpResponse).toEqual(serverError(new Error()))
    })
  })
})
