import { LoadSpeedOvensConfigs } from '../../../domain/usecases'
import { mockLoadSpeedOvensConfigs } from '../../../domain/mocks'

export const mockDbLoadSpeedOvensConfigsStub = () => {
  class DbLoadSpeedOvensConfigsStub implements LoadSpeedOvensConfigs {
    async load (menuId: LoadSpeedOvensConfigs.ParameterType): Promise<LoadSpeedOvensConfigs.ReturnType> {
      return mockLoadSpeedOvensConfigs()
    }
  }
  return new DbLoadSpeedOvensConfigsStub()
}
