import { forbidden, ok, serverError } from '../../helpers/http-helper'
import { UpdateEquipment } from '../../../domain/usecases/update-equipment'
import { Controller, HttpRequest, HttpResponse, Validation } from '../../protocols'
import { badRequest } from './../../helpers/http-helper'
import { MissingParamError, ServerError } from '../../errors'
import { NoRowsAffected } from '../../errors/no-rows-affected-error'

export class UpdateEquipmentController implements Controller {
  private readonly paramsValidation: Validation
  private readonly bodyValidation: Validation
  private readonly dbUpdateEquipment: UpdateEquipment
  constructor(paramsValidation: Validation, bodyValidation: Validation, dbUpdateEquipment: UpdateEquipment) {
    this.paramsValidation = paramsValidation
    this.bodyValidation = bodyValidation
    this.dbUpdateEquipment = dbUpdateEquipment
  }

  async handle(httpRequest: HttpRequest<UpdateEquipment.Request>): Promise<HttpResponse> {
    try {
      if (!httpRequest.body.equipment) return badRequest(new MissingParamError('equipment'))
      if (!httpRequest.params.id) return badRequest(new MissingParamError('id'))
      const validationParamsError = this.paramsValidation.validate(httpRequest.params)
      const validationBodyError = this.bodyValidation.validate(httpRequest.body.equipment)
      if (validationParamsError) return badRequest(validationParamsError)
      if (validationBodyError) return badRequest(validationBodyError)

      const result = await this.dbUpdateEquipment.update(httpRequest.params.id, httpRequest.body.equipment)
      if (!result) return badRequest(new NoRowsAffected(httpRequest.params.id))
      return ok({})
    } catch (error) {
      return serverError(new ServerError(error))
    }
  }
}
