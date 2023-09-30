
import { LoadEquipByCompanyIdRemoteAccess } from '../../../domain/usecases/load-equip-by-companyIdRemoteAccess'
import { ServerError } from '../../errors'
import { badRequest, noContent, ok, serverError } from '../../helpers/http-helper'
import { Controller, HttpRequest, HttpResponse, Validation } from '../../protocols'

export class LoadEquipByCompanyIdRemoteAccessController implements Controller {
  private readonly loadEquipByCompanyId: LoadEquipByCompanyIdRemoteAccess
  private readonly validation: Validation
  constructor(loadEquipByCompanyId: LoadEquipByCompanyIdRemoteAccess, validation: Validation) {
    this.loadEquipByCompanyId = loadEquipByCompanyId
    this.validation = validation
  } 1

  async handle(httpRequest: HttpRequest<LoadEquipByCompanyIdRemoteAccess.Request>): Promise<HttpResponse<LoadEquipByCompanyIdRemoteAccess.Response>> {
    try {
      const validationError = this.validation.validate(httpRequest.params)
      if (validationError) return badRequest(validationError)
      const { companyIdRemoteAccess } = httpRequest.params
      const response = await this.loadEquipByCompanyId.load(companyIdRemoteAccess)
      if (response.length === 0) return noContent()
      return ok(response)
    } catch (error) {
      return serverError(new ServerError(error.stack))
    }
  }
}
