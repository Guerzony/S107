import { badRequest, serverError, created } from '../../helpers/http-helper'
import { Controller, HttpRequest, HttpResponse, Validation } from '../../protocols'
import { EquipmentCreationError } from '../../errors/equipment-creation-error'
import { AddUserType } from '../../../domain/usecases/add-userType'

export class AddUserTypeController implements Controller {
  private readonly validation: Validation
  private readonly addUserType: AddUserType

  constructor(validation: Validation, addUserType: AddUserType) {
    this.validation = validation
    this.addUserType = addUserType
  }

  async handle(httpRequest: HttpRequest<AddUserType.Request>): Promise<HttpResponse<AddUserType.Response>> {
    try {
      if (!httpRequest.body) return badRequest(new Error())
      const request = httpRequest.body
      const validationError = this.validation.validate(request)
      if (validationError) return badRequest(validationError)
      const userType = await this.addUserType.add(request)
      return created<AddUserType.Response>(userType)
    } catch (error) {
      return serverError(new EquipmentCreationError())
    }
  }
}
