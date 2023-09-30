import { describe, test, expect, jest } from '@jest/globals'
import { noContent, ok, serverError } from '../../helpers/http-helper'
import { LoadCompanyByPraticaDistributorController } from './load-company-pratica-distributor-controller'
import { LoadCompanyByPraticaDistributor } from '../../../domain/usecases/load-company-by-pratica-distributor'
import { CompanyModel } from '../../../domain/models/company'
import { mockReturnCompany } from '../../../domain/mocks/user'

class LoadCompanyByPraticaDistributorStub implements LoadCompanyByPraticaDistributor {
  loadCompany(): Promise<CompanyModel[] | null> {
    return new Promise(resolve => resolve([mockReturnCompany()]))

  }
}

interface SutTypes {
  sut: LoadCompanyByPraticaDistributorController
  loadCompanyByPraticaDistributorStub: LoadCompanyByPraticaDistributor
}

const makeSut = (): SutTypes => {
  const loadCompanyByPraticaDistributorStub = new LoadCompanyByPraticaDistributorStub()
  const sut = new LoadCompanyByPraticaDistributorController(loadCompanyByPraticaDistributorStub)
  return {
    sut,
    loadCompanyByPraticaDistributorStub
  }
}

describe('LoadCompanyByPraticaDistributor UseCase', () => {
  test('Should return 500 if LoadCompanyByPraticaDistributor throws', async () => {
    const { sut, loadCompanyByPraticaDistributorStub } = makeSut()
    jest.spyOn(loadCompanyByPraticaDistributorStub, 'loadCompany').mockReturnValueOnce(new Promise((resolve, reject) => reject(new Error())))
    const httpResponse = await sut.handle()
    expect(httpResponse).toEqual(serverError(new Error()))
  })

  test('Should return 204 if LoadCompanyByPraticaDistributor returns null', async () => {
    const { sut, loadCompanyByPraticaDistributorStub } = makeSut()
    jest.spyOn(loadCompanyByPraticaDistributorStub, 'loadCompany').mockImplementationOnce(() => new Promise(resolve => resolve(null)))
    const httpResponse = await sut.handle()
    expect(httpResponse).toEqual(noContent())
  })

  test('Should return 204 on success', async () => {
    const { sut } = makeSut()
    const httpResponse = await sut.handle()
    expect(httpResponse).toEqual(ok([mockReturnCompany()]))
  })
})
