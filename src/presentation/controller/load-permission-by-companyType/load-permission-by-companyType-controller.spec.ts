import { describe, test, expect, jest, afterEach } from '@jest/globals'
import { LoadEquipById } from '../../../domain/usecases/load-equip-by-id'
import { LoadPermissionByCompanyTypeController } from './load-permission-by-companyType-controller'
import { badRequest, noContent, ok, serverError } from '../../helpers/http-helper'
import { Validation } from '../../protocols'
import { LoadUserTypesByCompanyId } from '../../../domain/usecases/load-userTypes-by-companyId'
import { UserTypesModel } from '../../../domain/models/userTypes'
import { mockReturnPermission, mockLoadPermissionRequest } from '../../../domain/mocks/permission'
import { LoadPermissionByCompanyType } from '../../../domain/usecases/load-permission-by-companyType'

class LoadPermissionByCompanyTypeStub implements LoadPermissionByCompanyType {
  async loadPermission(companyTypeId: string): Promise<LoadPermissionByCompanyType.Response> {
    return [mockReturnPermission()]
  }
}

class ValidationStub implements Validation {
  validate(input: any): Error | null {
    return null
  }
}
interface SutTypes {
  sut: LoadPermissionByCompanyTypeController
  loadPermissionByCompanyTypeStub: LoadPermissionByCompanyTypeStub
  validationStub: ValidationStub
}

const makeSut = (): SutTypes => {
  const loadPermissionByCompanyTypeStub = new LoadPermissionByCompanyTypeStub()
  const validationStub = new ValidationStub()
  const sut = new LoadPermissionByCompanyTypeController(loadPermissionByCompanyTypeStub, validationStub)
  return { sut, loadPermissionByCompanyTypeStub, validationStub }
}

describe('Testing the LoadPermissionByCompanyTypeController class', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })
  describe('Dependency with LoadPermissionByCompanyType class', () => {
    test('should call the load method only once', async () => {
      const { sut, loadPermissionByCompanyTypeStub } = makeSut()
      const loadEquipByIdSpy = jest.spyOn(loadPermissionByCompanyTypeStub, 'loadPermission')
      const httpRequest = await mockLoadPermissionRequest()
      await sut.handle(httpRequest)
      expect(loadEquipByIdSpy).toHaveBeenCalledTimes(1)
    })
    test('should call the load method with the correct parameter', async () => {
      const { sut, loadPermissionByCompanyTypeStub } = makeSut()
      const loadEquipByIdSpy = jest.spyOn(loadPermissionByCompanyTypeStub, 'loadPermission')
      const httpRequest = await mockLoadPermissionRequest()
      await sut.handle(httpRequest)
      expect(loadEquipByIdSpy).toHaveBeenCalledWith(httpRequest.params.companyTypeId, httpRequest.params.userTypeId)
    })
    test('should return 200 if the load method returns a equipment', async () => {
      const { sut } = makeSut()
      const httpResponse = await sut.handle(await mockLoadPermissionRequest())
      expect(httpResponse).toEqual(ok([mockReturnPermission()]))
    })
    test('should return 204 if the load method returns null', async () => {
      const { sut, loadPermissionByCompanyTypeStub } = makeSut()
      jest.spyOn(loadPermissionByCompanyTypeStub, 'loadPermission').mockResolvedValue(null)
      const httpResponse = await sut.handle(await mockLoadPermissionRequest())
      expect(httpResponse).toEqual(noContent())
    })
    test('should return 500 if the load method throws', async () => {
      const { sut, loadPermissionByCompanyTypeStub } = makeSut()
      jest.spyOn(loadPermissionByCompanyTypeStub, 'loadPermission').mockRejectedValue(new Error())
      const httpResponse = await sut.handle(await mockLoadPermissionRequest())
      expect(httpResponse).toEqual(serverError(new Error()))
    })
  })
  describe('Dependency with Validator class', () => {
    test('should call the validate method only once', async () => {
      const { sut, validationStub } = makeSut()
      const loadEquipByIdSpy = jest.spyOn(validationStub, 'validate')
      const httpRequest = await mockLoadPermissionRequest()
      await sut.handle(httpRequest)
      expect(loadEquipByIdSpy).toHaveBeenCalledTimes(1)
    })
    test('should call the validate method with the correct parameter', async () => {
      const { sut, validationStub } = makeSut()
      const validationSpy = jest.spyOn(validationStub, 'validate')
      const httpRequest = await mockLoadPermissionRequest()
      await sut.handle(httpRequest)
      expect(validationSpy).toHaveBeenCalledWith(httpRequest.params)
    })
    test('should return 200 if the validate method returns null', async () => {
      const { sut } = makeSut()
      const httpResponse = await sut.handle(await mockLoadPermissionRequest())
      expect(httpResponse).toEqual(ok([mockReturnPermission()]))
    })
    test('should return 400 if the validate returns error', async () => {
      const { sut, validationStub } = makeSut()
      jest.spyOn(validationStub, 'validate').mockReturnValue(new Error())
      const httpResponse = await sut.handle(await mockLoadPermissionRequest())
      expect(httpResponse).toEqual(badRequest(new Error()))
    })
  })
})
