"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbAddRecipeCMAX = void 0;
class DbAddRecipeCMAX {
    constructor(addRecipeCMAXRepository) {
        this.addRecipeCMAXRepository = addRecipeCMAXRepository;
    }
    async addRecipeCMAX(recipe) {
        const recipeResult = await this.addRecipeCMAXRepository.addRecipeCMAX(recipe);
        return recipeResult;
    }
}
exports.DbAddRecipeCMAX = DbAddRecipeCMAX;
