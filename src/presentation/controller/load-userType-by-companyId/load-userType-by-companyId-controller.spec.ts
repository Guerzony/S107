import { describe, test, expect, jest, afterEach } from '@jest/globals'
import { LoadEquipById } from '../../../domain/usecases/load-equip-by-id'
import { LoadUserTypeByCompanyIdController } from './load-userType-by-companyId-controller'
import { badRequest, noContent, ok, serverError } from '../../helpers/http-helper'
import { Validation } from '../../protocols'
import { LoadUserTypesByCompanyId } from '../../../domain/usecases/load-userTypes-by-companyId'
import { UserTypesModel } from '../../../domain/models/userTypes'
import { mockReturnUserType, mockLoadUserTypeRequest } from '../../../domain/mocks/user-type'

class LoadUserTypesByCompanyIdStub implements LoadUserTypesByCompanyId {
  async loadUserTypes(companyId: number): Promise<LoadUserTypesByCompanyId.Response> {
    return [mockReturnUserType()]
  }
}

class ValidationStub implements Validation {
  validate(input: any): Error | null {
    return null
  }
}
interface SutTypes {
  sut: LoadUserTypeByCompanyIdController
  loadUserTypesByCompanyIdStub: LoadUserTypesByCompanyIdStub
  validationStub: ValidationStub
}

const makeSut = (): SutTypes => {
  const loadUserTypesByCompanyIdStub = new LoadUserTypesByCompanyIdStub()
  const validationStub = new ValidationStub()
  const sut = new LoadUserTypeByCompanyIdController(loadUserTypesByCompanyIdStub, validationStub)
  return { sut, loadUserTypesByCompanyIdStub, validationStub }
}

describe('Testing the LoadUserTypeByCompanyIdController class', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })
  describe('Dependency with LoadUserTypesByCompanyId class', () => {
    test('should call the load method only once', async () => {
      const { sut, loadUserTypesByCompanyIdStub } = makeSut()
      const loadEquipByIdSpy = jest.spyOn(loadUserTypesByCompanyIdStub, 'loadUserTypes')
      const httpRequest = await mockLoadUserTypeRequest()
      await sut.handle(httpRequest)
      expect(loadEquipByIdSpy).toHaveBeenCalledTimes(1)
    })
    test('should call the load method with the correct parameter', async () => {
      const { sut, loadUserTypesByCompanyIdStub } = makeSut()
      const loadEquipByIdSpy = jest.spyOn(loadUserTypesByCompanyIdStub, 'loadUserTypes')
      const httpRequest = await mockLoadUserTypeRequest()
      await sut.handle(httpRequest)
      expect(loadEquipByIdSpy).toHaveBeenCalledWith(httpRequest.params.companyId)
    })
    test('should return 200 if the load method returns a equipment', async () => {
      const { sut } = makeSut()
      const httpResponse = await sut.handle(await mockLoadUserTypeRequest())
      expect(httpResponse).toEqual(ok([mockReturnUserType()]))
    })
    test('should return 204 if the load method returns null', async () => {
      const { sut, loadUserTypesByCompanyIdStub } = makeSut()
      jest.spyOn(loadUserTypesByCompanyIdStub, 'loadUserTypes').mockResolvedValue(null)
      const httpResponse = await sut.handle(await mockLoadUserTypeRequest())
      expect(httpResponse).toEqual(noContent())
    })
    test('should return 500 if the load method throws', async () => {
      const { sut, loadUserTypesByCompanyIdStub } = makeSut()
      jest.spyOn(loadUserTypesByCompanyIdStub, 'loadUserTypes').mockRejectedValue(new Error())
      const httpResponse = await sut.handle(await mockLoadUserTypeRequest())
      expect(httpResponse).toEqual(serverError(new Error()))
    })
  })
  describe('Dependency with Validator class', () => {
    test('should call the validate method only once', async () => {
      const { sut, validationStub } = makeSut()
      const loadEquipByIdSpy = jest.spyOn(validationStub, 'validate')
      const httpRequest = await mockLoadUserTypeRequest()
      await sut.handle(httpRequest)
      expect(loadEquipByIdSpy).toHaveBeenCalledTimes(1)
    })
    test('should call the validate method with the correct parameter', async () => {
      const { sut, validationStub } = makeSut()
      const validationSpy = jest.spyOn(validationStub, 'validate')
      const httpRequest = await mockLoadUserTypeRequest()
      await sut.handle(httpRequest)
      expect(validationSpy).toHaveBeenCalledWith(httpRequest.params)
    })
    test('should return 200 if the validate method returns null', async () => {
      const { sut } = makeSut()
      const httpResponse = await sut.handle(await mockLoadUserTypeRequest())
      expect(httpResponse).toEqual(ok([mockReturnUserType()]))
    })
    test('should return 400 if the validate returns error', async () => {
      const { sut, validationStub } = makeSut()
      jest.spyOn(validationStub, 'validate').mockReturnValue(new Error())
      const httpResponse = await sut.handle(await mockLoadUserTypeRequest())
      expect(httpResponse).toEqual(badRequest(new Error()))
    })
  })
})
