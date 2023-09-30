import { LoadSpeedOvensRecipes } from '../../../domain/usecases'
import { mockLoadSpeedOvensRecipes } from '../../../domain/mocks'

export const mockDbLoadSpeedOvensRecipesStub = () => {
  class DbLoadSpeedOvensRecipesStub implements LoadSpeedOvensRecipes {
    async load (menuId: LoadSpeedOvensRecipes.ParameterType): Promise<LoadSpeedOvensRecipes.ReturnType> {
      return mockLoadSpeedOvensRecipes()
    }
  }
  return new DbLoadSpeedOvensRecipesStub()
}
