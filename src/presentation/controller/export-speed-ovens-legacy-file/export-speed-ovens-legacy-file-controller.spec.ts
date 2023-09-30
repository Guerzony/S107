import { Validation } from '../../protocols'
import { ServerError } from '../../errors'
import { ResourceNotFoundError } from '../../errors/resource-not-found-error'
import { describe, test, jest, expect } from '@jest/globals'
import { mockSpeedOvensLegacyMenuModel } from '../../../domain/mocks'
import { ExportSpeedOvensLegacyFileController } from './export-speed-ovens-legacy-file-controller'
import { ExportSpeedOvensLegacyFile, LoadSpeedOvensLegacyMenu } from '../../../domain/usecases'
import { mockExportSpeedOvensLegacyFileHttpRequest, mockValidationStub } from '../../mock'
import { mockDbExportSpeedOvensLegacyFileStub, mockDbLoadSpeedOvensLegacyMenuStub } from '../../../data/mocks'

type SutType = {
  sut: ExportSpeedOvensLegacyFileController;
  validationStub: Validation;
  dbLoadSpeedOvensLegacyMenuStub: LoadSpeedOvensLegacyMenu;
  dbExportSpeedOvensLegacyFileStub: ExportSpeedOvensLegacyFile
}

const makeSut = (): SutType => {
  const validationStub = mockValidationStub()
  const dbLoadSpeedOvensLegacyMenuStub = mockDbLoadSpeedOvensLegacyMenuStub()
  const dbExportSpeedOvensLegacyFileStub = mockDbExportSpeedOvensLegacyFileStub()
  const sut = new ExportSpeedOvensLegacyFileController(
    validationStub,
    dbLoadSpeedOvensLegacyMenuStub,
    dbExportSpeedOvensLegacyFileStub
  )

  return {
    sut,
    validationStub,
    dbLoadSpeedOvensLegacyMenuStub,
    dbExportSpeedOvensLegacyFileStub
  }
}

describe('Tests of the ExportSpeedOvensLegacyFileController class', () => {
  describe('Testing dependencies with the Validation class', () => {
    test('should call the validate method once', async () => {
      const { sut, validationStub } = makeSut()
      const validationSpy = jest.spyOn(validationStub, 'validate')
      await sut.handle(mockExportSpeedOvensLegacyFileHttpRequest())
      expect(validationSpy).toHaveBeenCalledTimes(1)
    })
    test('should call the validate method with the correct values', async () => {
      const { sut, validationStub } = makeSut()
      const validationSpy = jest.spyOn(validationStub, 'validate')
      const request = mockExportSpeedOvensLegacyFileHttpRequest()
      await sut.handle(request)
      expect(validationSpy).toHaveBeenCalledWith(request.params)
    })
    test('should return an error when the validate returns an error', async () => {
      const { sut, validationStub } = makeSut()
      jest.spyOn(validationStub, 'validate').mockReturnValue(new Error())
      const request = mockExportSpeedOvensLegacyFileHttpRequest()
      const response = await sut.handle(request)
      expect(response).toHaveProperty('statusCode', 400)
      expect(response).toHaveProperty('body', new Error())
    })
    test('should return success when the validation returns null', async () => {
      const { sut } = makeSut()
      const request = mockExportSpeedOvensLegacyFileHttpRequest()
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
      await sut.handle(mockExportSpeedOvensLegacyFileHttpRequest())
      expect(dbLoadSpeedOvensLegacyMenuSpy).toHaveBeenCalledTimes(1)
    })
    test('should call the load method with the correct values', async () => {
      const { sut, dbLoadSpeedOvensLegacyMenuStub } = makeSut()
      const dbLoadSpeedOvensLegacyMenuSpy = jest.spyOn(dbLoadSpeedOvensLegacyMenuStub, 'load')
      const request = mockExportSpeedOvensLegacyFileHttpRequest()
      await sut.handle(request)
      expect(dbLoadSpeedOvensLegacyMenuSpy).toHaveBeenCalledWith(request.params.menuId)
    })
    test('should return an error when the load method fails', async () => {
      const { sut, dbLoadSpeedOvensLegacyMenuStub } = makeSut()
      jest.spyOn(dbLoadSpeedOvensLegacyMenuStub, 'load').mockRejectedValue(new Error())
      const request = mockExportSpeedOvensLegacyFileHttpRequest()
      const response = await sut.handle(request)
      expect(response).toHaveProperty('statusCode', 500)
      expect(response).toHaveProperty('body', new ServerError('Internal Server Error'))
    })
    test('should return an error when the load method return an empty array', async () => {
      const { sut, dbLoadSpeedOvensLegacyMenuStub } = makeSut()
      jest.spyOn(dbLoadSpeedOvensLegacyMenuStub, 'load').mockResolvedValue(null)
      const request = mockExportSpeedOvensLegacyFileHttpRequest()
      const response = await sut.handle(request)
      expect(response).toHaveProperty('statusCode', 404)
      expect(response).toHaveProperty('body', new ResourceNotFoundError({ name: 'menuId', value: request.params.menuId }))
    })
    test('should return success when the load returns the configs', async () => {
      const { sut } = makeSut()
      const request = mockExportSpeedOvensLegacyFileHttpRequest()
      const response = await sut.handle(request)
      expect(response).toHaveProperty('statusCode', 200)
      expect(response).toHaveProperty('body', null)
      expect(response).toHaveProperty('download', 'anyFilePath')
      expect(response).toHaveProperty('file', { filePath: 'anyFilePath', folderPath: 'anyFolderPath' })
    })
  })
  describe('Testing dependencies with the DbExportSpeedOvensLegacyFile class', () => {
    test('should call the export method once', async () => {
      const { sut, dbExportSpeedOvensLegacyFileStub } = makeSut()
      const dbExportFileSpy = jest.spyOn(dbExportSpeedOvensLegacyFileStub, 'export')
      await sut.handle(mockExportSpeedOvensLegacyFileHttpRequest())
      expect(dbExportFileSpy).toHaveBeenCalledTimes(1)
    })
    test('should call the export method with the correct values', async () => {
      const { sut, dbExportSpeedOvensLegacyFileStub } = makeSut()
      const dbExportFileSpy = jest.spyOn(dbExportSpeedOvensLegacyFileStub, 'export')
      const request = mockExportSpeedOvensLegacyFileHttpRequest()
      const menu = mockSpeedOvensLegacyMenuModel()
      await sut.handle(request)
      expect(dbExportFileSpy).toHaveBeenCalledWith(menu, 'A')
    })
    test('should return an error when the export method fails', async () => {
      const { sut, dbExportSpeedOvensLegacyFileStub } = makeSut()
      jest.spyOn(dbExportSpeedOvensLegacyFileStub, 'export').mockRejectedValue(new Error())
      const request = mockExportSpeedOvensLegacyFileHttpRequest()
      const response = await sut.handle(request)
      expect(response).toHaveProperty('statusCode', 500)
      expect(response).toHaveProperty('body', new ServerError('Internal Server Error'))
    })
    test('should return success when the export method on success', async () => {
      const { sut } = makeSut()
      const request = mockExportSpeedOvensLegacyFileHttpRequest()
      const response = await sut.handle(request)
      expect(response).toHaveProperty('statusCode', 200)
      expect(response).toHaveProperty('body', null)
      expect(response).toHaveProperty('download', 'anyFilePath')
      expect(response).toHaveProperty('file', { filePath: 'anyFilePath', folderPath: 'anyFolderPath' })
    })
  })
})
