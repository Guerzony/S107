import { ExportCMaxFile, LoadCMaxRecipes } from '../../../domain/usecases'
import { badRequest, download, notFound, serverError } from '../../helpers/http-helper'
import { Controller, HttpRequest, HttpResponse, Validation } from '../../protocols'

export type ExportCMaxFileControllerParamsType = { menuId: number }
export type ExportCMaxFileControllerHttpRequestType = { params: ExportCMaxFileControllerParamsType }

export class ExportCMaxFileController implements Controller {
  // eslint-disable-next-line no-useless-constructor
  constructor (
    private readonly validation: Validation,
    private readonly dbLoadCMaxRecipes: LoadCMaxRecipes,
    private readonly dbExportCMaxFile: ExportCMaxFile
  ) { }

  async handle (httpRequest: HttpRequest<ExportCMaxFileControllerHttpRequestType>): Promise<HttpResponse> {
    try {
      const { params } = httpRequest
      const validationError = this.validation.validate(params)
      if (validationError) return badRequest(validationError)
      const recipes = await this.dbLoadCMaxRecipes.load(params.menuId)
      if (recipes.length === 0) return notFound({ name: 'menuId', value: params.menuId })
      const { filePath, folderPath } = await this.dbExportCMaxFile.export(recipes)
      return download(filePath, { filePath, folderPath })
    } catch (error) {
      return serverError(error)
    }
  }
}
