import { ExportSpeedOvensLegacyFile, LoadSpeedOvensLegacyMenu } from '../../../domain/usecases'
import { badRequest, download, notFound, serverError } from '../../helpers/http-helper'
import { Controller, HttpRequest, HttpResponse, Validation } from '../../protocols'

export type ExportSpeedOvensLegacyFileControllerParamsType = { menuId: number, generation: ExportSpeedOvensLegacyFile.GenerationType }
export type ExportSpeedOvensLegacyFileControllerHttpRequestType = { params: ExportSpeedOvensLegacyFileControllerParamsType }

export class ExportSpeedOvensLegacyFileController implements Controller {
  // eslint-disable-next-line no-useless-constructor
  constructor (
    private readonly validation: Validation,
    private readonly dbLoadSpeedOvensLegacyMenu: LoadSpeedOvensLegacyMenu,
    private readonly dbExportSpeedOvensLegacyFile: ExportSpeedOvensLegacyFile
  ) { }

  async handle (httpRequest: HttpRequest<ExportSpeedOvensLegacyFileControllerHttpRequestType>): Promise<HttpResponse> {
    try {
      const { params } = httpRequest
      const validationError = this.validation.validate(params)
      if (validationError) return badRequest(validationError)
      const { menuId, generation } = params
      const menu = await this.dbLoadSpeedOvensLegacyMenu.load(menuId)
      if (menu === null) return notFound({ name: 'menuId', value: menuId })
      const { filePath, folderPath } = await this.dbExportSpeedOvensLegacyFile.export(menu, generation)
      return download(filePath, { filePath, folderPath })
    } catch (error) {
      return serverError(error)
    }
  }
}
