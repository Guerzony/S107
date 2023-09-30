import { LoadTsiConfigs } from '../../../domain/usecases'
import { mockTsiConfigsModel } from '../../../domain/mocks'

export const mockDbLoadTsiConfigsStub = () => {
  class DbLoadTsiConfigsStub implements LoadTsiConfigs {
    async load (menuId: LoadTsiConfigs.ParameterType): Promise<LoadTsiConfigs.ReturnType> {
      return mockTsiConfigsModel()
    }
  }
  return new DbLoadTsiConfigsStub()
}
