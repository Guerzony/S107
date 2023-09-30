"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbLoadStepsSpeedOvenByRecipeId = void 0;
class DbLoadStepsSpeedOvenByRecipeId {
    constructor(loadStepsSpeedOvenByRecipeIdRepository) {
        this.loadStepsSpeedOvenByRecipeIdRepository = loadStepsSpeedOvenByRecipeIdRepository;
    }
    async loadStepsSpeedOvenByRecipeId(idRecipe) {
        const result = await this.loadStepsSpeedOvenByRecipeIdRepository.loadStepsSpeedOvenByRecipeId(idRecipe);
        return result;
    }
}
exports.DbLoadStepsSpeedOvenByRecipeId = DbLoadStepsSpeedOvenByRecipeId;
