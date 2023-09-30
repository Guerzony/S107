import { ExportForzaFile, LoadSpeedOvensLegacyMenu } from '../../../domain/usecases'
import { badRequest, download, notFound, serverError } from '../../helpers/http-helper'
import { Controller, HttpRequest, HttpResponse, Validation } from '../../protocols'

export type ExportForzaFileControllerParamsType = { menuId: number }
export type ExportForzaFileControllerHttpRequestType = { params: ExportForzaFileControllerParamsType }

export class ExportForzaFileController implements Controller {
  // eslint-disable-next-line no-useless-constructor
  constructor (
    private readonly validation: Validation,
    private readonly dbLoadSpeedOvensLegacyMenu: LoadSpeedOvensLegacyMenu,
    private readonly dbExportForzaFile: ExportForzaFile
  ) { }

  async handle (httpRequest: HttpRequest<ExportForzaFileControllerHttpRequestType>): Promise<HttpResponse> {
    try {
      const { params } = httpRequest
      const validationError = this.validation.validate(params)
      if (validationError) return badRequest(validationError)
      const menu = await this.dbLoadSpeedOvensLegacyMenu.load(params.menuId)
      if (menu === null) return notFound({ name: 'menuId', value: params.menuId })
      const { filePath, folderPath } = await this.dbExportForzaFile.export(menu)
      return download(filePath, { filePath, folderPath })
    } catch (error) {
      return serverError(error)
    }
  }
}
