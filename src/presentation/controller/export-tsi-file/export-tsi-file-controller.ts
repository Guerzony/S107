import { LoadTsiConfigs, LoadTsiGroups, ExportTsiFile } from '../../../domain/usecases/'
import { badRequest, download, notFound, serverError } from '../../helpers/http-helper'
import { Controller, HttpRequest, HttpResponse, Validation } from '../../protocols'

export type ExportTsiFileControllerParamsType = { menuId: number }
export type ExportTsiFileControllerHttpRequestType = { params: ExportTsiFileControllerParamsType }

export class ExportTsiFileController implements Controller {
  // eslint-disable-next-line no-useless-constructor
  constructor (
    private readonly validation : Validation,
    private readonly loadTsiConfigs: LoadTsiConfigs,
    private readonly loadTsiGroups: LoadTsiGroups,
    private readonly exportTsiFile: ExportTsiFile
  ) { }

  async handle (httpRequest: HttpRequest<ExportTsiFileControllerHttpRequestType>): Promise<HttpResponse> {
    try {
      const { params } = httpRequest
      const validationError = this.validation.validate(params)
      if (validationError) return badRequest(validationError)
      const configs = await this.loadTsiConfigs.load(params.menuId)
      if (!configs) return notFound({ name: 'menuId', value: params.menuId })
      const groups = await this.loadTsiGroups.load(params.menuId)
      const { filePath, folderPath } = await this.exportTsiFile.export({ configs, groups })
      return download(filePath, { filePath, folderPath })
    } catch (error) {
      return serverError(error)
    }
  }
}
