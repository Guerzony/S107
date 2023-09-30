import { HttpRequest, HttpResponse, Controller, Validation } from './add-user-tutorial-controller-protocols'
import { badRequest, serverError, created } from '../../helpers/http-helper'
import { AddUserTutorials } from '../../../domain/usecases/add-userTutorials'

export class AddUserTutorialController implements Controller {
  private readonly addUserTutorial: AddUserTutorials;
  private readonly validation: Validation;

  constructor (
    validation: Validation,
    addUserTutorial: AddUserTutorials
  ) {
    this.validation = validation
    this.addUserTutorial = addUserTutorial
  }

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const userError = this.validation.validate(httpRequest.body.userTutorial)
      if (userError) {
        return badRequest(userError)
      }
      const userTutorial = httpRequest.body.userTutorial
      const user = await this.addUserTutorial.addUserTutorials(
        userTutorial
      )
      return created({ userTutorial: user })
    } catch (error) {
      return serverError(error)
    }
  }
}
