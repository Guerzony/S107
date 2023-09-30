"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbAddRecipe = void 0;
class DbAddRecipe {
    constructor(addRecipeRepository) {
        this.addRecipeRepository = addRecipeRepository;
    }
    async addRecipe(recipe) {
        const recipeResult = this.addRecipeRepository.addRecipe(recipe);
        return recipeResult;
    }
}
exports.DbAddRecipe = DbAddRecipe;
