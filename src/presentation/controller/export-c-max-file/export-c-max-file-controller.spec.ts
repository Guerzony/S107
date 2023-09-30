import { mockDbExportCMaxFileStub, mockDbLoadCMaxRecipesStub } from '../../../data/mocks'
import { mockCMaxRecipesModel } from '../../../domain/mocks'
import { ExportCMaxFile, LoadCMaxRecipes } from '../../../domain/usecases'
import { ServerError } from '../../errors'
import { ResourceNotFoundError } from '../../errors/resource-not-found-error'
import { mockExportCMaxFileHttpRequest, mockValidationStub } from '../../mock'
import { Validation } from '../../protocols'
import { ExportCMaxFileController } from './export-c-max-file-controller'
import { describe, test, jest, expect } from '@jest/globals'

type SutType = {
  sut: ExportCMaxFileController;
  validationStub: Validation;
  dbLoadCMaxRecipesStub: LoadCMaxRecipes;
  dbExportCMaxFileStub: ExportCMaxFile
}

const makeSut = (): SutType => {
  const validationStub = mockValidationStub()
  const dbLoadCMaxRecipesStub = mockDbLoadCMaxRecipesStub()
  const dbExportCMaxFileStub = mockDbExportCMaxFileStub()
  const sut = new ExportCMaxFileController(
    validationStub,
    dbLoadCMaxRecipesStub,
    dbExportCMaxFileStub
  )

  return {
    sut,
    validationStub,
    dbLoadCMaxRecipesStub,
    dbExportCMaxFileStub
  }
}

describe('Tests of the ExportCMaxFileController class', () => {
  describe('Testing dependencies with the Validation class', () => {
    test('should call the validate method once', async () => {
      const { sut, validationStub } = makeSut()
      const validationSpy = jest.spyOn(validationStub, 'validate')
      await sut.handle(mockExportCMaxFileHttpRequest())
      expect(validationSpy).toHaveBeenCalledTimes(1)
    })
    test('should call the validate method with the correct values', async () => {
      const { sut, validationStub } = makeSut()
      const validationSpy = jest.spyOn(validationStub, 'validate')
      const request = mockExportCMaxFileHttpRequest()
      await sut.handle(request)
      expect(validationSpy).toHaveBeenCalledWith(request.params)
    })
    test('should return an error when the validate returns an error', async () => {
      const { sut, validationStub } = makeSut()
      jest.spyOn(validationStub, 'validate').mockReturnValue(new Error())
      const request = mockExportCMaxFileHttpRequest()
      const response = await sut.handle(request)
      expect(response).toHaveProperty('statusCode', 400)
      expect(response).toHaveProperty('body', new Error())
    })
    test('should return success when the validation returns null', async () => {
      const { sut } = makeSut()
      const request = mockExportCMaxFileHttpRequest()
      const response = await sut.handle(request)
      expect(response).toHaveProperty('statusCode', 200)
      expect(response).toHaveProperty('body', null)
      expect(response).toHaveProperty('download', 'anyFilePath')
      expect(response).toHaveProperty('file', { filePath: 'anyFilePath', folderPath: 'anyFolderPath' })
    })
  })
  describe('Testing dependencies with the DbLoadCMaxRecipes class', () => {
    test('should call the load method once', async () => {
      const { sut, dbLoadCMaxRecipesStub } = makeSut()
      const dbLoadCMaxRecipesSpy = jest.spyOn(dbLoadCMaxRecipesStub, 'load')
      await sut.handle(mockExportCMaxFileHttpRequest())
      expect(dbLoadCMaxRecipesSpy).toHaveBeenCalledTimes(1)
    })
    test('should call the load method with the correct values', async () => {
      const { sut, dbLoadCMaxRecipesStub } = makeSut()
      const dbLoadCMaxRecipesSpy = jest.spyOn(dbLoadCMaxRecipesStub, 'load')
      const request = mockExportCMaxFileHttpRequest()
      await sut.handle(request)
      expect(dbLoadCMaxRecipesSpy).toHaveBeenCalledWith(request.params.menuId)
    })
    test('should return an error when the load method fails', async () => {
      const { sut, dbLoadCMaxRecipesStub } = makeSut()
      jest.spyOn(dbLoadCMaxRecipesStub, 'load').mockRejectedValue(new Error())
      const request = mockExportCMaxFileHttpRequest()
      const response = await sut.handle(request)
      expect(response).toHaveProperty('statusCode', 500)
      expect(response).toHaveProperty('body', new ServerError('Internal Server Error'))
    })
    test('should return an error when the load method return an empty array', async () => {
      const { sut, dbLoadCMaxRecipesStub } = makeSut()
      jest.spyOn(dbLoadCMaxRecipesStub, 'load').mockResolvedValue([])
      const request = mockExportCMaxFileHttpRequest()
      const response = await sut.handle(request)
      expect(response).toHaveProperty('statusCode', 404)
      expect(response).toHaveProperty('body', new ResourceNotFoundError({ name: 'menuId', value: request.params.menuId }))
    })
    test('should return success when the load returns the configs', async () => {
      const { sut } = makeSut()
      const request = mockExportCMaxFileHttpRequest()
      const response = await sut.handle(request)
      expect(response).toHaveProperty('statusCode', 200)
      expect(response).toHaveProperty('body', null)
      expect(response).toHaveProperty('download', 'anyFilePath')
      expect(response).toHaveProperty('file', { filePath: 'anyFilePath', folderPath: 'anyFolderPath' })
    })
  })
  describe('Testing dependencies with the DbExportCMaxFile class', () => {
    test('should call the export method once', async () => {
      const { sut, dbExportCMaxFileStub } = makeSut()
      const dbExportFileSpy = jest.spyOn(dbExportCMaxFileStub, 'export')
      await sut.handle(mockExportCMaxFileHttpRequest())
      expect(dbExportFileSpy).toHaveBeenCalledTimes(1)
    })
    test('should call the export method with the correct values', async () => {
      const { sut, dbExportCMaxFileStub } = makeSut()
      const dbExportFileSpy = jest.spyOn(dbExportCMaxFileStub, 'export')
      const request = mockExportCMaxFileHttpRequest()
      const recipes = mockCMaxRecipesModel()
      await sut.handle(request)
      expect(dbExportFileSpy).toHaveBeenCalledWith(recipes)
    })
    test('should return an error when the export method fails', async () => {
      const { sut, dbExportCMaxFileStub } = makeSut()
      jest.spyOn(dbExportCMaxFileStub, 'export').mockRejectedValue(new Error())
      const request = mockExportCMaxFileHttpRequest()
      const response = await sut.handle(request)
      expect(response).toHaveProperty('statusCode', 500)
      expect(response).toHaveProperty('body', new ServerError('Internal Server Error'))
    })
    test('should return success when the export method on success', async () => {
      const { sut } = makeSut()
      const request = mockExportCMaxFileHttpRequest()
      const response = await sut.handle(request)
      expect(response).toHaveProperty('statusCode', 200)
      expect(response).toHaveProperty('body', null)
      expect(response).toHaveProperty('download', 'anyFilePath')
      expect(response).toHaveProperty('file', { filePath: 'anyFilePath', folderPath: 'anyFolderPath' })
    })
  })
})
