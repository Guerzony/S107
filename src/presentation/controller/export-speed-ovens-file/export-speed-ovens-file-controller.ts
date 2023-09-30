import { InvalidParamError } from '../../errors'
import { LoadSpeedOvensGroups } from './../../../domain/usecases/load-speed-ovens-groups'
import { ExportSpeedOvensFile } from '../../../domain/usecases'
import { LoadSpeedOvensConfigs } from '../../../domain/usecases/load-speed-ovens-configs'
import { badRequest, download, notFound, serverError } from '../../helpers/http-helper'
import { Controller, HttpRequest, HttpResponse, Validation } from '../../protocols'
import { LoadSpeedOvensRecipes } from './../../../domain/usecases/load-speed-ovens-recipes'

export type EquipmentModelType = ExportSpeedOvensFile.EquipmentModelType

export type ParamsType = {
  menuId: number
  equipmentModel: EquipmentModelType
}
export type HttpRequestType = {
  params: ParamsType
}

export class ExportSpeedOvensFileController implements Controller {
  // eslint-disable-next-line no-useless-constructor
  constructor(
    private readonly validation: Validation,
    private readonly loadSpeedOvensConfigs: LoadSpeedOvensConfigs,
    private readonly loadSpeedOvensGroups: LoadSpeedOvensGroups,
    private readonly loadSpeedOvensRecipes: LoadSpeedOvensRecipes,
    private readonly exportSpeedOvensFile: ExportSpeedOvensFile
  ) { }

  async handle(httpRequest: HttpRequest<HttpRequestType>): Promise<HttpResponse> {
    try {
      const { params } = httpRequest
      const validationError = this.validation.validate(params)
      if (validationError) return badRequest(validationError)
      if (params.equipmentModel !== 'COPA, ROCKET, COPA SM' && params.equipmentModel !== 'FIT, FIT ST' && params.equipmentModel !== 'FORZA') return badRequest(new InvalidParamError('equipmentModel'))
      const configs = await this.loadSpeedOvensConfigs.load(params.menuId)
      if (!configs.length) return notFound({ name: 'menuId', value: params.menuId })
      const groups = await this.loadSpeedOvensGroups.load(params.menuId)
      const recipies = await this.loadSpeedOvensRecipes.load(params.menuId)
      const { filePath, folderPath } = await this.exportSpeedOvensFile.export({ configs, groups, recipies }, params.equipmentModel)
      return download(filePath, { filePath, folderPath })
    } catch (error) {
      return serverError(error)
    }
  }
}
