import { mockLoadEquipByCompanyIdResponse, mockLoadEquipByCompanyIdRemoteAccessRequest } from '../../../domain/mocks/equipment'
import { LoadEquipByCompanyIdRemoteAccessController } from './load-equip-by-companyIdRemoteAccess-controller'
import { badRequest, noContent, ok, serverError } from '../../helpers/http-helper'
import { describe, test, expect, jest, afterEach } from '@jest/globals'
import { Validation } from '../../protocols'
import { LoadEquipByCompanyIdRemoteAccess } from '../../../domain/usecases/load-equip-by-companyIdRemoteAccess'

class LoadEquipByCompanyIdRemoteAccessStub implements LoadEquipByCompanyIdRemoteAccess {
  async load(companyIdRemoteAccess: number): Promise<LoadEquipByCompanyIdRemoteAccess.Response[]> {
    return mockLoadEquipByCompanyIdResponse()
  }
}

class ValidationStub implements Validation {
  validate(input: any): Error | null {
    return null
  }
}
interface SutTypes {
  sut: LoadEquipByCompanyIdRemoteAccessController
  loadEquipByCompanyIdRemoteAccessStub: LoadEquipByCompanyIdRemoteAccessStub
  validationStub: ValidationStub
}

const makeSut = (): SutTypes => {
  const loadEquipByCompanyIdRemoteAccessStub = new LoadEquipByCompanyIdRemoteAccessStub()
  const validationStub = new ValidationStub()
  const sut = new LoadEquipByCompanyIdRemoteAccessController(loadEquipByCompanyIdRemoteAccessStub, validationStub)

  return { sut, loadEquipByCompanyIdRemoteAccessStub, validationStub }
}

describe('Testing the LoadEquipByCompanyIdRemoteAccess class', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })
  describe('Dependency with LoadEquipByCompanyIdRemoteAccess class', () => {
    test('should call the load method only once', async () => {
      const { sut, loadEquipByCompanyIdRemoteAccessStub } = makeSut()
      const loadEquipByCompanyIdSpy = jest.spyOn(loadEquipByCompanyIdRemoteAccessStub, 'load')
      const httpRequest = mockLoadEquipByCompanyIdRemoteAccessRequest()
      await sut.handle(httpRequest)
      expect(loadEquipByCompanyIdSpy).toHaveBeenCalledTimes(1)
    })
    test('should call the load method with the correct parameter', async () => {
      const { sut, loadEquipByCompanyIdRemoteAccessStub } = makeSut()
      const loadEquipByCompanyIdSpy = jest.spyOn(loadEquipByCompanyIdRemoteAccessStub, 'load')
      const httpRequest = mockLoadEquipByCompanyIdRemoteAccessRequest()
      await sut.handle(httpRequest)
      expect(loadEquipByCompanyIdSpy).toHaveBeenCalledWith(1)
    })
    test('should return 200 if the load method returns a list of equipment', async () => {
      const { sut } = makeSut()
      const httpResponse = await sut.handle(mockLoadEquipByCompanyIdRemoteAccessRequest())
      expect(httpResponse).toEqual(ok(mockLoadEquipByCompanyIdResponse()))
    })
    test('should return 204 if the load method returns a empty list', async () => {
      const { sut, loadEquipByCompanyIdRemoteAccessStub } = makeSut()
      jest.spyOn(loadEquipByCompanyIdRemoteAccessStub, 'load').mockResolvedValue([])
      const httpResponse = await sut.handle(mockLoadEquipByCompanyIdRemoteAccessRequest())
      expect(httpResponse).toEqual(noContent())
    })
    test('should return 500 if the load method throws', async () => {
      const { sut, loadEquipByCompanyIdRemoteAccessStub } = makeSut()
      jest.spyOn(loadEquipByCompanyIdRemoteAccessStub, 'load').mockRejectedValue(new Error())
      const httpResponse = await sut.handle(mockLoadEquipByCompanyIdRemoteAccessRequest())
      expect(httpResponse).toEqual(serverError(new Error()))
    })
  })
  describe('Dependency with Validator class', () => {
    test('should call the validate method only once', async () => {
      const { sut, validationStub } = makeSut()
      const loadEquipByCompanyIdSpy = jest.spyOn(validationStub, 'validate')
      const httpRequest = mockLoadEquipByCompanyIdRemoteAccessRequest()
      await sut.handle(httpRequest)
      expect(loadEquipByCompanyIdSpy).toHaveBeenCalledTimes(1)
    })
    test('should call the validate method with the correct parameter', async () => {
      const { sut, validationStub } = makeSut()
      const validationSpy = jest.spyOn(validationStub, 'validate')
      const httpRequest = mockLoadEquipByCompanyIdRemoteAccessRequest()
      await sut.handle(httpRequest)
      expect(validationSpy).toHaveBeenCalledWith(httpRequest.params)
    })
    test('should return 200 if the validate method returns null', async () => {
      const { sut } = makeSut()
      const httpResponse = await sut.handle(mockLoadEquipByCompanyIdRemoteAccessRequest())
      expect(httpResponse).toEqual(ok(mockLoadEquipByCompanyIdResponse()))
    })
    test('should return 400 if the validate returns error', async () => {
      const { sut, validationStub } = makeSut()
      jest.spyOn(validationStub, 'validate').mockReturnValue(new Error())
      const httpResponse = await sut.handle(mockLoadEquipByCompanyIdRemoteAccessRequest())
      expect(httpResponse).toEqual(badRequest(new Error()))
    })
  })
})
