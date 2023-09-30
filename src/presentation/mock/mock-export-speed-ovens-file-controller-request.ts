import { HttpRequest } from '../protocols'
import { HttpRequestType } from '../controller'

export const mockExportSpeedOvensFileHttpRequest = (menuId?: number, equipmentModel?: 'COPA, ROCKET, COPA SM' | 'FIT, FIT ST' | 'FORZA'): HttpRequest<HttpRequestType> => ({
  params: {
    menuId: menuId ?? 1,
    equipmentModel: equipmentModel ?? 'COPA, ROCKET, COPA SM'
  }
})
