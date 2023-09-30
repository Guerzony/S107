import { describe, test, expect, jest } from '@jest/globals'
import { noContent, ok } from '../../helpers/http-helper'
import { LoadTutorials } from '../../../domain/usecases/load-tutorials'
import { LoadTutorialsController } from './load-tutorials.controller'
import { Validation } from '../../protocols'
import { mockLoadTutorialsRequest, mockReturnTutorials } from '../../../domain/mocks/user'
import { TutorialsModel } from '../../../domain/models/tutorials'

const makeValidation = (): Validation => {
  class ValidationStub implements Validation {
    validate (input: any): Error | null {
      return null
    }
  }
  return new ValidationStub()
}

const makeLoadTutorials = (): LoadTutorials => {
  class LoadTutorialsStub implements LoadTutorials {
    loadTutorials (idUser: number): Promise<TutorialsModel[] | null> {
      return new Promise(resolve => resolve([mockReturnTutorials()]))
    }
  }
  return new LoadTutorialsStub()
}

interface SutTypes {
  sut: LoadTutorialsController
  loadTutorialsStub: LoadTutorials
  validationStub: Validation
}

const makeSut = (): SutTypes => {
  const loadTutorialsStub = makeLoadTutorials()
  const validationStub = makeValidation()
  const sut = new LoadTutorialsController(loadTutorialsStub, validationStub)
  return {
    sut,
    loadTutorialsStub,
    validationStub
  }
}

describe('LoadTutorialsController UseCase', () => {
  test('Should call LoadTutorial with correct values', async () => {
    const { sut, loadTutorialsStub } = makeSut()
    const loadSpy = jest.spyOn(loadTutorialsStub, 'loadTutorials')
    const httpRequest = await mockLoadTutorialsRequest()
    const { idUser } = httpRequest.params
    await sut.handle(httpRequest)
    expect(loadSpy).toHaveBeenCalledWith(idUser)
  })

  test('Should return 204 if LoadTutorial returns null', async () => {
    const { sut, loadTutorialsStub } = makeSut()
    jest.spyOn(loadTutorialsStub, 'loadTutorials').mockImplementationOnce(() => new Promise(resolve => resolve(null)))
    const httpResponse = await sut.handle(await mockLoadTutorialsRequest())
    expect(httpResponse).toEqual(noContent())
  })

  test('Should return 200 on success', async () => {
    const { sut } = makeSut()
    const httpResponse = await sut.handle(await mockLoadTutorialsRequest())
    expect(httpResponse).toEqual(ok([mockReturnTutorials()]))
  })
})
