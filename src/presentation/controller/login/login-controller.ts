import { badRequest, forbidden, ok, serverError, unauthorized } from '../../helpers/http-helper'
import { Controller, HttpRequest, HttpResponse, Authentication, Validation } from './login-controller-protocols'

export class LoginController implements Controller {
  private readonly authentication: Authentication
  private readonly validation: Validation

  constructor (authentication: Authentication, validation: Validation) {
    this.authentication = authentication
    this.validation = validation
  }

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const error = this.validation.validate(httpRequest.body)
      if (error) {
        return badRequest(error)
      }
      const { email, password } = httpRequest.body
      const accessToken = await this.authentication.auth({
        email,
        password
      })
      if (accessToken === 'Error authentication') {
        return unauthorized()
      } else if (accessToken === 'Error activate account') {
        return forbidden({
          name: 'activate',
          message: 'Error activate account'
        })
      }
      return ok({ accessToken })
    } catch (error) {
      return serverError(error)
    }
  }
}
