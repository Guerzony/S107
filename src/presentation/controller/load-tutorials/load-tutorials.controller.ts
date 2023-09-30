import { LoadTutorials } from '../../../domain/usecases/load-tutorials'
import { badRequest, noContent, ok, serverError } from '../../helpers/http-helper'
import { Controller, HttpRequest, HttpResponse, Validation } from '../../protocols'

export class LoadTutorialsController implements Controller {
  private readonly loadTutorials: LoadTutorials
  private readonly validation: Validation
  constructor (loadTutorials: LoadTutorials, validation: Validation) {
    this.loadTutorials = loadTutorials
    this.validation = validation
  }

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const error = this.validation.validate(httpRequest.params)
      if (error) {
        return badRequest(error)
      }
      const response = await this.loadTutorials.loadTutorials(httpRequest.params.idUser)
      if (!response) return noContent()
      return ok(response)
    } catch (error) {
      return serverError(error)
    }
  }
}
