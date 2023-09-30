"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbDeleteRecipe = void 0;
class DbDeleteRecipe {
    constructor(deleteRecipeRepository, deleteRecipeCMAXRepository, deleteStepSpeedOvenRepository, deleteCombiOvenTSIRepository, deleteCombiOvenCMAXRepository) {
        this.deleteRecipeRepository = deleteRecipeRepository;
        this.deleteRecipeCMAXRepository = deleteRecipeCMAXRepository;
        this.deleteStepSpeedOvenRepository = deleteStepSpeedOvenRepository;
        this.deleteCombiOvenTSIRepository = deleteCombiOvenTSIRepository;
        this.deleteCombiOvenCMAXRepository = deleteCombiOvenCMAXRepository;
    }
    async deleteRecipe(id, equipTypeId) {
        if (equipTypeId === 4) {
            await this.deleteCombiOvenCMAXRepository.deleteCombiOvenCMAX(id);
            await this.deleteRecipeCMAXRepository.deleteRecipeCMAX(id);
        }
        else {
            if (equipTypeId === 2) {
                await this.deleteCombiOvenTSIRepository.deleteCombiOvenTSI(id);
            }
            else {
                await this.deleteStepSpeedOvenRepository.deleteSpeedOven(id);
            }
            await this.deleteRecipeRepository.deleteRecipe(id);
        }
    }
}
exports.DbDeleteRecipe = DbDeleteRecipe;
