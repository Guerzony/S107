
import { mockLoadSpeedOvensConfigs, mockLoadSpeedOvensGroups, mockLoadSpeedOvensRecipes } from '../../../domain/mocks'
import { ExportSpeedOvensFile, LoadSpeedOvensConfigs, LoadSpeedOvensGroups, LoadSpeedOvensRecipes } from '../../../domain/usecases'
import { ServerError } from '../../errors'
import { ResourceNotFoundError } from '../../errors/resource-not-found-error'
import { Validation } from '../../protocols'
import { ExportSpeedOvensFileController } from './export-speed-ovens-file-controller'
import { describe, test, jest, expect } from '@jest/globals'
import { mockDbExportSpeedOvensFileStub, mockDbLoadSpeedOvensConfigsStub, mockDbLoadSpeedOvensGroupsStub, mockDbLoadSpeedOvensRecipesStub } from '../../../data/mocks'
import { mockValidationStub } from './../../mock/mock-validation'
import { mockExportSpeedOvensFileHttpRequest } from '../../mock'

type SutType = {
  sut: ExportSpeedOvensFileController;
  validationStub: Validation;
  dbLoadConfigsStub: LoadSpeedOvensConfigs;
  dbLoadGroupsStub: LoadSpeedOvensGroups;
  dbLoadRecipesStub: LoadSpeedOvensRecipes;
  dbExportFileStub: ExportSpeedOvensFile;
}

const makeSut = (): SutType => {
  const validationStub = mockValidationStub()
  const dbLoadConfigsStub = mockDbLoadSpeedOvensConfigsStub()
  const dbLoadGroupsStub = mockDbLoadSpeedOvensGroupsStub()
  const dbLoadRecipesStub = mockDbLoadSpeedOvensRecipesStub()
  const dbExportFileStub = mockDbExportSpeedOvensFileStub()
  const sut = new ExportSpeedOvensFileController(
    validationStub,
    dbLoadConfigsStub,
    dbLoadGroupsStub,
    dbLoadRecipesStub,
    dbExportFileStub
  )

  return {
    sut,
    validationStub,
    dbLoadConfigsStub,
    dbLoadGroupsStub,
    dbLoadRecipesStub,
    dbExportFileStub
  }
}

describe('Tests of the ExportSpeedOvensFileController class', () => {
  describe('Testing dependencies with the Validation class', () => {
    test('should call the validate method once', async () => {
      const { sut, validationStub } = makeSut()
      const validationSpy = jest.spyOn(validationStub, 'validate')
      await sut.handle(mockExportSpeedOvensFileHttpRequest())
      expect(validationSpy).toHaveBeenCalledTimes(1)
    })
    test('should call the validate method with the correct values', async () => {
      const { sut, validationStub } = makeSut()
      const validationSpy = jest.spyOn(validationStub, 'validate')
      const request = mockExportSpeedOvensFileHttpRequest()
      await sut.handle(request)
      expect(validationSpy).toHaveBeenCalledWith(request.params)
    })
    test('should return an error when the validate returns an error', async () => {
      const { sut, validationStub } = makeSut()
      jest.spyOn(validationStub, 'validate').mockReturnValue(new Error())
      const request = mockExportSpeedOvensFileHttpRequest()
      const response = await sut.handle(request)
      expect(response).toHaveProperty('statusCode', 400)
      expect(response).toHaveProperty('body', new Error())
    })
    test('should return success when the validation returns null', async () => {
      const { sut } = makeSut()
      const request = mockExportSpeedOvensFileHttpRequest()
      const response = await sut.handle(request)
      expect(response).toHaveProperty('statusCode', 200)
      expect(response).toHaveProperty('body', null)
      expect(response).toHaveProperty('download', 'any_file_path')
      expect(response).toHaveProperty('file', { filePath: 'any_file_path', folderPath: 'any_folder_path' })
    })
  })
  describe('Testing dependencies with the DbLoadSpeedOvenConfigs class', () => {
    test('should call the load method once', async () => {
      const { sut, dbLoadConfigsStub } = makeSut()
      const dbLoadConfigsSpy = jest.spyOn(dbLoadConfigsStub, 'load')
      await sut.handle(mockExportSpeedOvensFileHttpRequest())
      expect(dbLoadConfigsSpy).toHaveBeenCalledTimes(1)
    })
    test('should call the load method with the correct values', async () => {
      const { sut, dbLoadConfigsStub } = makeSut()
      const dbLoadConfigsSpy = jest.spyOn(dbLoadConfigsStub, 'load')
      const request = mockExportSpeedOvensFileHttpRequest()
      await sut.handle(request)
      expect(dbLoadConfigsSpy).toHaveBeenCalledWith(request.params.menuId)
    })
    test('should return an error when the load method fails', async () => {
      const { sut, dbLoadConfigsStub } = makeSut()
      jest.spyOn(dbLoadConfigsStub, 'load').mockRejectedValue(new Error())
      const request = mockExportSpeedOvensFileHttpRequest()
      const response = await sut.handle(request)
      expect(response).toHaveProperty('statusCode', 500)
      expect(response).toHaveProperty('body', new ServerError('Internal Server Error'))
    })
    test('should return an error when the load method return an empty array', async () => {
      const { sut, dbLoadConfigsStub } = makeSut()
      jest.spyOn(dbLoadConfigsStub, 'load').mockResolvedValue([])
      const request = mockExportSpeedOvensFileHttpRequest()
      const response = await sut.handle(request)
      expect(response).toHaveProperty('statusCode', 404)
      expect(response).toHaveProperty('body', new ResourceNotFoundError({ name: 'menuId', value: request.params.menuId }))
    })
    test('should return success when the load returns an array de configs', async () => {
      const { sut } = makeSut()
      const request = mockExportSpeedOvensFileHttpRequest()
      const response = await sut.handle(request)
      expect(response).toHaveProperty('statusCode', 200)
      expect(response).toHaveProperty('body', null)
      expect(response).toHaveProperty('download', 'any_file_path')
      expect(response).toHaveProperty('file', { filePath: 'any_file_path', folderPath: 'any_folder_path' })
    })
  })
  describe('Testing dependencies with the DbLoadSpeedOvenGroups class', () => {
    test('should call the load method once', async () => {
      const { sut, dbLoadGroupsStub } = makeSut()
      const dbLoadGroupsSpy = jest.spyOn(dbLoadGroupsStub, 'load')
      await sut.handle(mockExportSpeedOvensFileHttpRequest())
      expect(dbLoadGroupsSpy).toHaveBeenCalledTimes(1)
    })
    test('should call the load method with the correct values', async () => {
      const { sut, dbLoadGroupsStub } = makeSut()
      const dbLoadGroupsSpy = jest.spyOn(dbLoadGroupsStub, 'load')
      const request = mockExportSpeedOvensFileHttpRequest()
      await sut.handle(request)
      expect(dbLoadGroupsSpy).toHaveBeenCalledWith(request.params.menuId)
    })
    test('should return an error when the load method fails', async () => {
      const { sut, dbLoadGroupsStub } = makeSut()
      jest.spyOn(dbLoadGroupsStub, 'load').mockRejectedValue(new Error())
      const request = mockExportSpeedOvensFileHttpRequest()
      const response = await sut.handle(request)
      expect(response).toHaveProperty('statusCode', 500)
      expect(response).toHaveProperty('body', new ServerError('Internal Server Error'))
    })
    test('should return success when the load method returns an empty array', async () => {
      const { sut, dbLoadGroupsStub } = makeSut()
      jest.spyOn(dbLoadGroupsStub, 'load').mockResolvedValue([])
      const request = mockExportSpeedOvensFileHttpRequest()
      const response = await sut.handle(request)
      expect(response).toHaveProperty('statusCode', 200)
      expect(response).toHaveProperty('body', null)
      expect(response).toHaveProperty('download', 'any_file_path')
      expect(response).toHaveProperty('file', { filePath: 'any_file_path', folderPath: 'any_folder_path' })
    })
    test('should return success when the load method returns an array de configs', async () => {
      const { sut } = makeSut()
      const request = mockExportSpeedOvensFileHttpRequest()
      const response = await sut.handle(request)
      expect(response).toHaveProperty('statusCode', 200)
      expect(response).toHaveProperty('body', null)
      expect(response).toHaveProperty('download', 'any_file_path')
      expect(response).toHaveProperty('file', { filePath: 'any_file_path', folderPath: 'any_folder_path' })
    })
  })
  describe('Testing dependencies with the DbLoadSpeedOvenRecipes class', () => {
    test('should call the load method once', async () => {
      const { sut, dbLoadRecipesStub } = makeSut()
      const dbLoadRecipesSpy = jest.spyOn(dbLoadRecipesStub, 'load')
      await sut.handle(mockExportSpeedOvensFileHttpRequest())
      expect(dbLoadRecipesSpy).toHaveBeenCalledTimes(1)
    })
    test('should call the load method with the correct values', async () => {
      const { sut, dbLoadRecipesStub } = makeSut()
      const dbLoadRecipesSpy = jest.spyOn(dbLoadRecipesStub, 'load')
      const request = mockExportSpeedOvensFileHttpRequest()
      await sut.handle(request)
      expect(dbLoadRecipesSpy).toHaveBeenCalledWith(request.params.menuId)
    })
    test('should return an error when the load method fails', async () => {
      const { sut, dbLoadRecipesStub } = makeSut()
      jest.spyOn(dbLoadRecipesStub, 'load').mockRejectedValue(new Error())
      const request = mockExportSpeedOvensFileHttpRequest()
      const response = await sut.handle(request)
      expect(response).toHaveProperty('statusCode', 500)
      expect(response).toHaveProperty('body', new ServerError('Internal Server Error'))
    })
    test('should return success when the load method returns an empty array', async () => {
      const { sut, dbLoadRecipesStub } = makeSut()
      jest.spyOn(dbLoadRecipesStub, 'load').mockResolvedValue([])
      const request = mockExportSpeedOvensFileHttpRequest()
      const response = await sut.handle(request)
      expect(response).toHaveProperty('statusCode', 200)
      expect(response).toHaveProperty('body', null)
      expect(response).toHaveProperty('download', 'any_file_path')
      expect(response).toHaveProperty('file', { filePath: 'any_file_path', folderPath: 'any_folder_path' })
    })
    test('should return success when the load method returns an array de configs', async () => {
      const { sut } = makeSut()
      const request = mockExportSpeedOvensFileHttpRequest()
      const response = await sut.handle(request)
      expect(response).toHaveProperty('statusCode', 200)
      expect(response).toHaveProperty('body', null)
      expect(response).toHaveProperty('download', 'any_file_path')
      expect(response).toHaveProperty('file', { filePath: 'any_file_path', folderPath: 'any_folder_path' })
    })
  })
  describe('Testing dependencies with the DbExportSpeedOvensFile class', () => {
    test('should call the export method once', async () => {
      const { sut, dbExportFileStub } = makeSut()
      const dbExportFileSpy = jest.spyOn(dbExportFileStub, 'export')
      await sut.handle(mockExportSpeedOvensFileHttpRequest())
      expect(dbExportFileSpy).toHaveBeenCalledTimes(1)
    })
    test('should call the export method with the correct values', async () => {
      const { sut, dbExportFileStub } = makeSut()
      const dbExportFileSpy = jest.spyOn(dbExportFileStub, 'export')
      const request = mockExportSpeedOvensFileHttpRequest()
      const configs = mockLoadSpeedOvensConfigs()
      const groups = mockLoadSpeedOvensGroups()
      const recipies = mockLoadSpeedOvensRecipes()
      await sut.handle(request)
      expect(dbExportFileSpy).toHaveBeenCalledWith({ configs, groups, recipies }, request.params.equipmentModel)
    })
    test('should return an error when the export method fails', async () => {
      const { sut, dbExportFileStub } = makeSut()
      jest.spyOn(dbExportFileStub, 'export').mockRejectedValue(new Error())
      const request = mockExportSpeedOvensFileHttpRequest()
      const response = await sut.handle(request)
      expect(response).toHaveProperty('statusCode', 500)
      expect(response).toHaveProperty('body', new ServerError('Internal Server Error'))
    })
    test('should return success when the export method on success', async () => {
      const { sut } = makeSut()
      const request = mockExportSpeedOvensFileHttpRequest()
      const response = await sut.handle(request)
      expect(response).toHaveProperty('statusCode', 200)
      expect(response).toHaveProperty('body', null)
      expect(response).toHaveProperty('download', 'any_file_path')
      expect(response).toHaveProperty('file', { filePath: 'any_file_path', folderPath: 'any_folder_path' })
    })
  })
})
