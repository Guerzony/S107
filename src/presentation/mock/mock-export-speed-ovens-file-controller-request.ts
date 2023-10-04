import { HttpRequest } from '../protocols'
import { HttpRequestType } from '../controller'

export const mockExportSpeedOvensFileHttpRequest = (menuId?: number, userModel?: 'COPA, ROCKET, COPA SM' | 'FIT, FIT ST' | 'FORZA'): HttpRequest<HttpRequestType> => ({
  params: {
    menuId: menuId ?? 1,
    userModel: userModel ?? 'COPA, ROCKET, COPA SM'
  }
})
