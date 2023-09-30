import { LoadUserTypesByCompanyId } from '../../../domain/usecases/load-userTypes-by-companyId'
import { ServerError } from '../../errors'
import { badRequest, noContent, ok, serverError } from '../../helpers/http-helper'
import { Controller, HttpRequest, HttpResponse, Validation } from '../../protocols'

export class LoadUserTypeByCompanyIdController implements Controller {
  private readonly loadUserTypesByCompanyId: LoadUserTypesByCompanyId
  private readonly validation: Validation

  constructor(loadUserTypesByCompanyId: LoadUserTypesByCompanyId, validation: Validation) {
    this.loadUserTypesByCompanyId = loadUserTypesByCompanyId
    this.validation = validation
  }

  async handle(httpRequest: HttpRequest<LoadUserTypesByCompanyId.Request>): Promise<HttpResponse<LoadUserTypesByCompanyId.Response>> {
    try {
      const validationError = this.validation.validate(httpRequest.params)
      if (validationError) return badRequest(validationError)
      const response = await this.loadUserTypesByCompanyId.loadUserTypes(httpRequest.params.companyId)
      if (!response) return noContent()
      return ok(response)
    } catch (error) {
      return serverError(new ServerError(error.stack))
    }
  }
}
