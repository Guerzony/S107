
import { ExportTsiFile, LoadTsiConfigs, LoadTsiGroups } from '../../../domain/usecases'
import { ServerError } from '../../errors'
import { ResourceNotFoundError } from '../../errors/resource-not-found-error'
import { Validation } from '../../protocols'
import { describe, test, jest, expect } from '@jest/globals'
import { mockValidationStub } from '../../mock/mock-validation'
import { ExportTsiFileController } from './export-tsi-file-controller'
import { mockDbExportTsiFileStub, mockDbLoadTsiConfigsStub, mockDbLoadTsiGroupsStub } from '../../../data/mocks'
import { mockExportTsiFileHttpRequest } from '../../mock'
import { mockTsiConfigsModel, mockTsiGroupModel } from '../../../domain/mocks'

type SutType = {
  sut: ExportTsiFileController;
  validationStub: Validation;
  dbLoadConfigsStub: LoadTsiConfigs;
  dbLoadGroupsStub: LoadTsiGroups;
  dbExportFileStub: ExportTsiFile;
}

const makeSut = (): SutType => {
  const validationStub = mockValidationStub()
  const dbLoadConfigsStub = mockDbLoadTsiConfigsStub()
  const dbLoadGroupsStub = mockDbLoadTsiGroupsStub()
  const dbExportFileStub = mockDbExportTsiFileStub()
  const sut = new ExportTsiFileController(
    validationStub,
    dbLoadConfigsStub,
    dbLoadGroupsStub,
    dbExportFileStub
  )

  return {
    sut,
    validationStub,
    dbLoadConfigsStub,
    dbLoadGroupsStub,
    dbExportFileStub
  }
}

describe('Tests of the ExportTsiFileController class', () => {
  describe('Testing dependencies with the Validation class', () => {
    test('should call the validate method once', async () => {
      const { sut, validationStub } = makeSut()
      const validationSpy = jest.spyOn(validationStub, 'validate')
      await sut.handle(mockExportTsiFileHttpRequest())
      expect(validationSpy).toHaveBeenCalledTimes(1)
    })
    test('should call the validate method with the correct values', async () => {
      const { sut, validationStub } = makeSut()
      const validationSpy = jest.spyOn(validationStub, 'validate')
      const request = mockExportTsiFileHttpRequest()
      await sut.handle(request)
      expect(validationSpy).toHaveBeenCalledWith(request.params)
    })
    test('should return an error when the validate returns an error', async () => {
      const { sut, validationStub } = makeSut()
      jest.spyOn(validationStub, 'validate').mockReturnValue(new Error())
      const request = mockExportTsiFileHttpRequest()
      const response = await sut.handle(request)
      expect(response).toHaveProperty('statusCode', 400)
      expect(response).toHaveProperty('body', new Error())
    })
    test('should return success when the validation returns null', async () => {
      const { sut } = makeSut()
      const request = mockExportTsiFileHttpRequest()
      const response = await sut.handle(request)
      expect(response).toHaveProperty('statusCode', 200)
      expect(response).toHaveProperty('body', null)
      expect(response).toHaveProperty('download', 'any_file_path')
      expect(response).toHaveProperty('file', { filePath: 'any_file_path', folderPath: 'any_folder_path' })
    })
  })
  describe('Testing dependencies with the DbLoadTsiConfigs class', () => {
    test('should call the load method once', async () => {
      const { sut, dbLoadConfigsStub } = makeSut()
      const dbLoadConfigsSpy = jest.spyOn(dbLoadConfigsStub, 'load')
      await sut.handle(mockExportTsiFileHttpRequest())
      expect(dbLoadConfigsSpy).toHaveBeenCalledTimes(1)
    })
    test('should call the load method with the correct values', async () => {
      const { sut, dbLoadConfigsStub } = makeSut()
      const dbLoadConfigsSpy = jest.spyOn(dbLoadConfigsStub, 'load')
      const request = mockExportTsiFileHttpRequest()
      await sut.handle(request)
      expect(dbLoadConfigsSpy).toHaveBeenCalledWith(request.params.menuId)
    })
    test('should return an error when the load method fails', async () => {
      const { sut, dbLoadConfigsStub } = makeSut()
      jest.spyOn(dbLoadConfigsStub, 'load').mockRejectedValue(new Error())
      const request = mockExportTsiFileHttpRequest()
      const response = await sut.handle(request)
      expect(response).toHaveProperty('statusCode', 500)
      expect(response).toHaveProperty('body', new ServerError('Internal Server Error'))
    })
    test('should return an error when the load method return null', async () => {
      const { sut, dbLoadConfigsStub } = makeSut()
      jest.spyOn(dbLoadConfigsStub, 'load').mockResolvedValue(null)
      const request = mockExportTsiFileHttpRequest()
      const response = await sut.handle(request)
      expect(response).toHaveProperty('statusCode', 404)
      expect(response).toHaveProperty('body', new ResourceNotFoundError({ name: 'menuId', value: request.params.menuId }))
    })
    test('should return success when the load returns the configs', async () => {
      const { sut } = makeSut()
      const request = mockExportTsiFileHttpRequest()
      const response = await sut.handle(request)
      expect(response).toHaveProperty('statusCode', 200)
      expect(response).toHaveProperty('body', null)
      expect(response).toHaveProperty('download', 'any_file_path')
      expect(response).toHaveProperty('file', { filePath: 'any_file_path', folderPath: 'any_folder_path' })
    })
  })
  describe('Testing dependencies with the DbLoadTsiGroups class', () => {
    test('should call the load method once', async () => {
      const { sut, dbLoadGroupsStub } = makeSut()
      const dbLoadGroupsSpy = jest.spyOn(dbLoadGroupsStub, 'load')
      await sut.handle(mockExportTsiFileHttpRequest())
      expect(dbLoadGroupsSpy).toHaveBeenCalledTimes(1)
    })
    test('should call the load method with the correct values', async () => {
      const { sut, dbLoadGroupsStub } = makeSut()
      const dbLoadGroupsSpy = jest.spyOn(dbLoadGroupsStub, 'load')
      const request = mockExportTsiFileHttpRequest()
      await sut.handle(request)
      expect(dbLoadGroupsSpy).toHaveBeenCalledWith(request.params.menuId)
    })
    test('should return an error when the load method fails', async () => {
      const { sut, dbLoadGroupsStub } = makeSut()
      jest.spyOn(dbLoadGroupsStub, 'load').mockRejectedValue(new Error())
      const request = mockExportTsiFileHttpRequest()
      const response = await sut.handle(request)
      expect(response).toHaveProperty('statusCode', 500)
      expect(response).toHaveProperty('body', new ServerError('Internal Server Error'))
    })
    test('should return success when the load method returns an empty array', async () => {
      const { sut, dbLoadGroupsStub } = makeSut()
      jest.spyOn(dbLoadGroupsStub, 'load').mockResolvedValue([])
      const request = mockExportTsiFileHttpRequest()
      const response = await sut.handle(request)
      expect(response).toHaveProperty('statusCode', 200)
      expect(response).toHaveProperty('body', null)
      expect(response).toHaveProperty('download', 'any_file_path')
      expect(response).toHaveProperty('file', { filePath: 'any_file_path', folderPath: 'any_folder_path' })
    })
    test('should return success when the load method returns an array de configs', async () => {
      const { sut } = makeSut()
      const request = mockExportTsiFileHttpRequest()
      const response = await sut.handle(request)
      expect(response).toHaveProperty('statusCode', 200)
      expect(response).toHaveProperty('body', null)
      expect(response).toHaveProperty('download', 'any_file_path')
      expect(response).toHaveProperty('file', { filePath: 'any_file_path', folderPath: 'any_folder_path' })
    })
  })
  describe('Testing dependencies with the DbExportTsiFile class', () => {
    test('should call the export method once', async () => {
      const { sut, dbExportFileStub } = makeSut()
      const dbExportFileSpy = jest.spyOn(dbExportFileStub, 'export')
      await sut.handle(mockExportTsiFileHttpRequest())
      expect(dbExportFileSpy).toHaveBeenCalledTimes(1)
    })
    test('should call the export method with the correct values', async () => {
      const { sut, dbExportFileStub } = makeSut()
      const dbExportFileSpy = jest.spyOn(dbExportFileStub, 'export')
      const request = mockExportTsiFileHttpRequest()
      const configs = mockTsiConfigsModel()
      const groups = mockTsiGroupModel()
      await sut.handle(request)
      expect(dbExportFileSpy).toHaveBeenCalledWith({ configs, groups })
    })
    test('should return an error when the export method fails', async () => {
      const { sut, dbExportFileStub } = makeSut()
      jest.spyOn(dbExportFileStub, 'export').mockRejectedValue(new Error())
      const request = mockExportTsiFileHttpRequest()
      const response = await sut.handle(request)
      expect(response).toHaveProperty('statusCode', 500)
      expect(response).toHaveProperty('body', new ServerError('Internal Server Error'))
    })
    test('should return success when the export method on success', async () => {
      const { sut } = makeSut()
      const request = mockExportTsiFileHttpRequest()
      const response = await sut.handle(request)
      expect(response).toHaveProperty('statusCode', 200)
      expect(response).toHaveProperty('body', null)
      expect(response).toHaveProperty('download', 'any_file_path')
      expect(response).toHaveProperty('file', { filePath: 'any_file_path', folderPath: 'any_folder_path' })
    })
  })
})
