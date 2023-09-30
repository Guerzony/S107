import { LoadCompanyByPraticaDistributor } from '../../../domain/usecases/load-company-by-pratica-distributor'
import { noContent, ok, serverError } from '../../helpers/http-helper'
import { ControllerNotParamsRequest, HttpRequest, HttpResponse } from '../../protocols'

export class LoadCompanyByPraticaDistributorController implements ControllerNotParamsRequest {
  private readonly loadStoreByPraticaDistributor: LoadCompanyByPraticaDistributor

  constructor(loadStoreByPraticaDistributor: LoadCompanyByPraticaDistributor) {
    this.loadStoreByPraticaDistributor = loadStoreByPraticaDistributor
  }

  async handle(): Promise<HttpResponse> {
    try {
      const company = await this.loadStoreByPraticaDistributor.loadCompany()
      if (!company) return noContent()
      return ok(company)
    } catch (error) {
      return serverError(error)
    }
  }
}
