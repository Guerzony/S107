import { describe, test, expect, jest } from '@jest/globals'
import { AddUserTypeController } from './add-userType-controller'
import { CreateEquipOvenModel, EquipModel } from '../../../domain/models/equipment'
import { Validation } from '../../protocols'
import { badRequest, created, serverError } from '../../helpers/http-helper'
import { mockAddUserTypeRequest, mockReturnUserType } from '../../../domain/mocks/user-type'
import { AddUserType } from '../../../domain/usecases/add-userType'
import { CreatUserTypesModel, UserTypesModel } from '../../../domain/models/userTypes'

class ValidationStub implements Validation {
  validate(input: any): Error | null {
    return null
  }
}

class DbAddUserTypeStub implements AddUserType {
  async add(userType: CreatUserTypesModel): Promise<UserTypesModel> {
    return mockReturnUserType()
  }

}

interface SutTypes {
  sut: AddUserTypeController
  validationStub: Validation
  dbAddUserTypeStub: AddUserType
}

const makeSut = (): SutTypes => {
  const validationStub = new ValidationStub()
  const dbAddUserTypeStub = new DbAddUserTypeStub()
  const sut = new AddUserTypeController(validationStub, dbAddUserTypeStub)
  return {
    sut,
    validationStub,
    dbAddUserTypeStub
  }
}

describe('Testing the AddUserTypeController class', () => {
  describe('Dependency with Validator class', () => {
    test('should call the validate method only once', async () => {
      const { sut, validationStub } = makeSut()
      const validateSpy = jest.spyOn(validationStub, 'validate')
      const httpRequest = await mockAddUserTypeRequest()
      await sut.handle(httpRequest)
      expect(validateSpy).toHaveBeenCalledTimes(1)
    })
    test('should call the validate method with the correct parameter', async () => {
      const { sut, validationStub } = makeSut()
      const validateSpy = jest.spyOn(validationStub, 'validate')
      const httpRequest = await mockAddUserTypeRequest()
      await sut.handle(httpRequest)
      expect(validateSpy).toHaveBeenCalledWith(httpRequest.body)
    })
    test('should return 201 if the validate method returns null', async () => {
      const { sut } = makeSut()
      const httpResponse = await sut.handle(await mockAddUserTypeRequest())
      expect(httpResponse).toEqual(created<AddUserType.Response>(httpResponse.body))
    })
    test('should return 400 if the validate returns error', async () => {
      const { sut, validationStub } = makeSut()
      jest.spyOn(validationStub, 'validate').mockReturnValue(new Error())
      const httpResponse = await sut.handle(await mockAddUserTypeRequest())
      expect(httpResponse).toEqual(badRequest(new Error()))
    })
  })
  describe('Dependency with DbAddUserType class', () => {
    test('should call the add method only once', async () => {
      const { sut, dbAddUserTypeStub } = makeSut()
      const dbAddEquipmentSpy = jest.spyOn(dbAddUserTypeStub, 'add')
      const httpRequest = await mockAddUserTypeRequest()
      await sut.handle(httpRequest)
      expect(dbAddEquipmentSpy).toHaveBeenCalledTimes(1)
    })
    test('should call the add method with the correct parameter', async () => {
      const { sut, dbAddUserTypeStub } = makeSut()
      const dbAddEquipmentSpy = jest.spyOn(dbAddUserTypeStub, 'add')
      const httpRequest = await mockAddUserTypeRequest()
      await sut.handle(httpRequest)
      expect(dbAddEquipmentSpy).toHaveBeenCalledWith(httpRequest.body)
    })
    test('should return 201 if the add method returns an object ', async () => {
      const { sut } = makeSut()
      const httpResponse = await sut.handle(await mockAddUserTypeRequest())
      expect(httpResponse).toEqual(created(httpResponse.body))
    })
    test('should return 500 if the add method throws', async () => {
      const { sut, dbAddUserTypeStub } = makeSut()
      jest.spyOn(dbAddUserTypeStub, 'add').mockRejectedValue(new Error())
      const httpResponse = await sut.handle(await mockAddUserTypeRequest())
      expect(httpResponse).toEqual(serverError(new Error()))
    })
  })
})
