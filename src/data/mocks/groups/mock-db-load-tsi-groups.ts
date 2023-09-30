import { LoadTsiGroups } from '../../../domain/usecases'
import { mockTsiGroupModel } from '../../../domain/mocks'

export const mockDbLoadTsiGroupsStub = () => {
  class DbLoadTsiGroupsStub implements LoadTsiGroups {
    async load (menuId: LoadTsiGroups.ParameterType): Promise<LoadTsiGroups.ReturnType> {
      return mockTsiGroupModel()
    }
  }
  return new DbLoadTsiGroupsStub()
}
