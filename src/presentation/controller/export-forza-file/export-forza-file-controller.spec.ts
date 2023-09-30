import { mockDbExportForzaFileStub, mockDbLoadSpeedOvensLegacyMenuStub } from '../../../data/mocks'
import { mockSpeedOvensLegacyMenuModel } from '../../../domain/mocks'
import { ExportForzaFile, LoadSpeedOvensLegacyMenu } from '../../../domain/usecases'
import { ServerError } from '../../errors'
import { ResourceNotFoundError } from '../../errors/resource-not-found-error'
import { mockExportForzaFileHttpRequest, mockValidationStub } from '../../mock'
import { Validation } from '../../protocols'
import { ExportForzaFileController } from './export-forza-file-controller'
import { describe, test, jest, expect } from '@jest/globals'

type SutType = {
  sut: ExportForzaFileController;
  validationStub: Validation;
  dbLoadSpeedOvensLegacyMenuStub: LoadSpeedOvensLegacyMenu;
  dbExportForzaFileStub: ExportForzaFile
}

const makeSut = (): SutType => {
  const validationStub = mockValidationStub()
  const dbLoadSpeedOvensLegacyMenuStub = mockDbLoadSpeedOvensLegacyMenuStub()
  const dbExportForzaFileStub = mockDbExportForzaFileStub()
  const sut = new ExportForzaFileController(
    validationStub,
    dbLoadSpeedOvensLegacyMenuStub,
    dbExportForzaFileStub
  )

  return {
    sut,
    validationStub,
    dbLoadSpeedOvensLegacyMenuStub,
    dbExportForzaFileStub
  }
}

describe('Tests of the ExportForzaFileController class', () => {
  describe('Testing dependencies with the Validation class', () => {
    test('should call the validate method once', async () => {
      const { sut, validationStub } = makeSut()
      const validationSpy = jest.spyOn(validationStub, 'validate')
      await sut.handle(mockExportForzaFileHttpRequest())
      expect(validationSpy).toHaveBeenCalledTimes(1)
    })
    test('should call the validate method with the correct values', async () => {
      const { sut, validationStub } = makeSut()
      const validationSpy = jest.spyOn(validationStub, 'validate')
      const request = mockExportForzaFileHttpRequest()
      await sut.handle(request)
      expect(validationSpy).toHaveBeenCalledWith(request.params)
    })
    test('should return an error when the validate returns an error', async () => {
      const { sut, validationStub } = makeSut()
      jest.spyOn(validationStub, 'validate').mockReturnValue(new Error())
      const request = mockExportForzaFileHttpRequest()
      const response = await sut.handle(request)
      expect(response).toHaveProperty('statusCode', 400)
      expect(response).toHaveProperty('body', new Error())
    })
    test('should return success when the validation returns null', async () => {
      const { sut } = makeSut()
      const request = mockExportForzaFileHttpRequest()
      const response = await sut.handle(request)
      expect(response).toHaveProperty('statusCode', 200)
      expect(response).toHaveProperty('body', null)
      expect(response).toHaveProperty('download', 'anyFilePath')
      expect(response).toHaveProperty('file', { filePath: 'anyFilePath', folderPath: 'anyFolderPath' })
    })
  })
  describe('Testing dependencies with the DbLoadSpeedOvensLegacyMenu class', () => {
    test('should call the load method once', async () => {
      const { sut, dbLoadSpeedOvensLegacyMenuStub } = makeSut()
      const dbLoadSpeedOvensLegacyMenuSpy = jest.spyOn(dbLoadSpeedOvensLegacyMenuStub, 'load')
      await sut.handle(mockExportForzaFileHttpRequest())
      expect(dbLoadSpeedOvensLegacyMenuSpy).toHaveBeenCalledTimes(1)
    })
    test('should call the load method with the correct values', async () => {
      const { sut, dbLoadSpeedOvensLegacyMenuStub } = makeSut()
      const dbLoadSpeedOvensLegacyMenuSpy = jest.spyOn(dbLoadSpeedOvensLegacyMenuStub, 'load')
      const request = mockExportForzaFileHttpRequest()
      await sut.handle(request)
      expect(dbLoadSpeedOvensLegacyMenuSpy).toHaveBeenCalledWith(request.params.menuId)
    })
    test('should return an error when the load method fails', async () => {
      const { sut, dbLoadSpeedOvensLegacyMenuStub } = makeSut()
      jest.spyOn(dbLoadSpeedOvensLegacyMenuStub, 'load').mockRejectedValue(new Error())
      const request = mockExportForzaFileHttpRequest()
      const response = await sut.handle(request)
      expect(response).toHaveProperty('statusCode', 500)
      expect(response).toHaveProperty('body', new ServerError('Internal Server Error'))
    })
    test('should return an error when the load method return an empty array', async () => {
      const { sut, dbLoadSpeedOvensLegacyMenuStub } = makeSut()
      jest.spyOn(dbLoadSpeedOvensLegacyMenuStub, 'load').mockResolvedValue(null)
      const request = mockExportForzaFileHttpRequest()
      const response = await sut.handle(request)
      expect(response).toHaveProperty('statusCode', 404)
      expect(response).toHaveProperty('body', new ResourceNotFoundError({ name: 'menuId', value: request.params.menuId }))
    })
    test('should return success when the load returns the configs', async () => {
      const { sut } = makeSut()
      const request = mockExportForzaFileHttpRequest()
      const response = await sut.handle(request)
      expect(response).toHaveProperty('statusCode', 200)
      expect(response).toHaveProperty('body', null)
      expect(response).toHaveProperty('download', 'anyFilePath')
      expect(response).toHaveProperty('file', { filePath: 'anyFilePath', folderPath: 'anyFolderPath' })
    })
  })
  describe('Testing dependencies with the DbExportForzaFile class', () => {
    test('should call the export method once', async () => {
      const { sut, dbExportForzaFileStub } = makeSut()
      const dbExportFileSpy = jest.spyOn(dbExportForzaFileStub, 'export')
      await sut.handle(mockExportForzaFileHttpRequest())
      expect(dbExportFileSpy).toHaveBeenCalledTimes(1)
    })
    test('should call the export method with the correct values', async () => {
      const { sut, dbExportForzaFileStub } = makeSut()
      const dbExportFileSpy = jest.spyOn(dbExportForzaFileStub, 'export')
      const request = mockExportForzaFileHttpRequest()
      const recipes = mockSpeedOvensLegacyMenuModel()
      await sut.handle(request)
      expect(dbExportFileSpy).toHaveBeenCalledWith(recipes)
    })
    test('should return an error when the export method fails', async () => {
      const { sut, dbExportForzaFileStub } = makeSut()
      jest.spyOn(dbExportForzaFileStub, 'export').mockRejectedValue(new Error())
      const request = mockExportForzaFileHttpRequest()
      const response = await sut.handle(request)
      expect(response).toHaveProperty('statusCode', 500)
      expect(response).toHaveProperty('body', new ServerError('Internal Server Error'))
    })
    test('should return success when the export method on success', async () => {
      const { sut } = makeSut()
      const request = mockExportForzaFileHttpRequest()
      const response = await sut.handle(request)
      expect(response).toHaveProperty('statusCode', 200)
      expect(response).toHaveProperty('body', null)
      expect(response).toHaveProperty('download', 'anyFilePath')
      expect(response).toHaveProperty('file', { filePath: 'anyFilePath', folderPath: 'anyFolderPath' })
    })
  })
})
