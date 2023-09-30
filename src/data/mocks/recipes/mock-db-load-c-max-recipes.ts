import { mockCMaxRecipesModel } from '../../../domain/mocks'
import { LoadCMaxRecipes } from '../../../domain/usecases'

export const mockDbLoadCMaxRecipesStub = (): LoadCMaxRecipes => {
  class DbLoadCMaxRecipesStub implements LoadCMaxRecipes {
    async load (menuId: number): Promise<LoadCMaxRecipes.ReturnType> {
      return mockCMaxRecipesModel()
    }
  }
  return new DbLoadCMaxRecipesStub()
}
