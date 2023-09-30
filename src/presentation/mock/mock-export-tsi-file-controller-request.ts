import { HttpRequest } from '../protocols'
import { ExportTsiFileControllerHttpRequestType } from '../controller'

export const mockExportTsiFileHttpRequest = (menuId?: number): HttpRequest<ExportTsiFileControllerHttpRequestType> => ({
  params: {
    menuId: menuId ?? 1
  }
})
