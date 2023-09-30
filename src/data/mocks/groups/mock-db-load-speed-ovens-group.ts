import { LoadSpeedOvensGroups } from '../../../domain/usecases'
import { mockLoadSpeedOvensGroups } from '../../../domain/mocks'

export const mockDbLoadSpeedOvensGroupsStub = () => {
  class DbLoadSpeedOvensGroupsStub implements LoadSpeedOvensGroups {
    async load (menuId: LoadSpeedOvensGroups.ParameterType): Promise<LoadSpeedOvensGroups.ReturnType> {
      return mockLoadSpeedOvensGroups()
    }
  }
  return new DbLoadSpeedOvensGroupsStub()
}
