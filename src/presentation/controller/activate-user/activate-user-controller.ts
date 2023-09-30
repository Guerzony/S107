import { Controller, HttpRequest, HttpResponse, Validation } from './activate-user-controller-protocols'
import { UpdateUserByActivationCode } from '../../../domain/usecases/update-user-by-activation-code'
import { badRequest, noContent, serverError } from '../../helpers/http-helper'

export class ActivateUserController implements Controller {
  private readonly validation: Validation
  private readonly activation: UpdateUserByActivationCode

  constructor (validation: Validation, activation: UpdateUserByActivationCode) {
    this.validation = validation
    this.activation = activation
  }

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const error = this.validation.validate(httpRequest.body)
      if (error) {
        return badRequest(error)
      }

      const { activateToken } = httpRequest.body
      const active = await this.activation.updateActivationCode(activateToken)
      if (!active) {
        return badRequest({
          name: 'activate',
          message: 'Error activate account',
          stack: 'Descrição do erro'
        })
      }

      return noContent()
    } catch (error) {
      return serverError(error)
    }
  }
}
