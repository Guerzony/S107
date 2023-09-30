import { mockSpeedOvensLegacyMenuModel } from '../../../domain/mocks/menus'
import { LoadSpeedOvensLegacyMenu } from '../../../domain/usecases'

export const mockDbLoadSpeedOvensLegacyMenuStub = () => {
  class DbLoadSpeedOvensLegacyMenuStub implements LoadSpeedOvensLegacyMenu {
    async load (menuId: LoadSpeedOvensLegacyMenu.ParameterType): Promise<LoadSpeedOvensLegacyMenu.ReturnType> {
      return mockSpeedOvensLegacyMenuModel()
    }
  }
  return new DbLoadSpeedOvensLegacyMenuStub()
}
