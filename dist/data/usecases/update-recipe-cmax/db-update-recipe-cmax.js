"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbUpdateRecipeCMAX = void 0;
class DbUpdateRecipeCMAX {
    constructor(UpdateRecipeCMAXRepository) {
        this.UpdateRecipeCMAXRepository = UpdateRecipeCMAXRepository;
    }
    async updateRecipeCMAX(recipe) {
        const recipeResult = await this.UpdateRecipeCMAXRepository.updateRecipeCMAX(recipe);
        return recipeResult;
    }
}
exports.DbUpdateRecipeCMAX = DbUpdateRecipeCMAX;
