import { LoadPermissionByCompanyType } from '../../../domain/usecases/load-permission-by-companyType'
import { LoadUserTypesByCompanyId } from '../../../domain/usecases/load-userTypes-by-companyId'
import { ServerError } from '../../errors'
import { badRequest, noContent, ok, serverError } from '../../helpers/http-helper'
import { Controller, HttpRequest, HttpResponse, Validation } from '../../protocols'

export class LoadPermissionByCompanyTypeController implements Controller {
  private readonly loadPermissionByCompanyType: LoadPermissionByCompanyType
  private readonly validation: Validation

  constructor(loadPermissionByCompanyType: LoadPermissionByCompanyType, validation: Validation) {
    this.loadPermissionByCompanyType = loadPermissionByCompanyType
    this.validation = validation
  }

  async handle(httpRequest: HttpRequest<LoadPermissionByCompanyType.Request>): Promise<HttpResponse<LoadUserTypesByCompanyId.Response>> {
    try {
      const validationError = this.validation.validate(httpRequest.params)
      if (validationError) return badRequest(validationError)
      const response = await this.loadPermissionByCompanyType.loadPermission(httpRequest.params.companyTypeId, httpRequest.params.userTypeId)
      if (!response) return noContent()
      return ok(response)
    } catch (error) {
      return serverError(new ServerError(error.stack))
    }
  }
}
