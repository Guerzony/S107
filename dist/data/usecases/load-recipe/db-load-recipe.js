"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbLoadRecipe = void 0;
class DbLoadRecipe {
    constructor(loadRecipeRepository) {
        this.loadRecipeRepository = loadRecipeRepository;
    }
    async loadRecipe(idGroup) {
        const recipes = await this.loadRecipeRepository.loadRecipe(idGroup);
        return recipes;
    }
}
exports.DbLoadRecipe = DbLoadRecipe;
