import { noContent, ok, serverError } from '../../helpers/http-helper'
import { Controller, HttpRequest, HttpResponse } from '../../protocols'
import { LoadUserOldByEmail } from '../../../domain/usecases/load-userOld-by-email'
import { LoadUserByEmail } from '../../../domain/usecases/load-user-by-email'

export class LoadUserByEmailController implements Controller {
  private readonly loadUserOldByEmail: LoadUserOldByEmail
  private readonly loadUserByEmail: LoadUserByEmail

  constructor (loadUserOldByEmail: LoadUserOldByEmail, loadUserByEmail: LoadUserByEmail) {
    this.loadUserOldByEmail = loadUserOldByEmail
    this.loadUserByEmail = loadUserByEmail
  }

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { email } = httpRequest.params

      const user = await this.loadUserByEmail.loadUser(email)
      if (user) {
        return ok(
          'existing account'
        )
      }

      const response = await this.loadUserOldByEmail.loadUser(email)
      if (!response) return noContent()
      return ok({
        user: response
      })
    } catch (error) {
      return serverError(error)
    }
  }
}
