"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbUpdateRecipe = void 0;
class DbUpdateRecipe {
    constructor(UpdateRecipeRepository) {
        this.UpdateRecipeRepository = UpdateRecipeRepository;
    }
    async updateRecipe(recipe) {
        const recipeResult = await this.UpdateRecipeRepository.updateRecipe(recipe);
        return recipeResult;
    }
}
exports.DbUpdateRecipe = DbUpdateRecipe;
