"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbLoadStepCombiOvenCMAX = void 0;
class DbLoadStepCombiOvenCMAX {
    constructor(loadStepCombiOvenCMAXRepository) {
        this.loadStepCombiOvenCMAXRepository = loadStepCombiOvenCMAXRepository;
    }
    async loadStepCombiOvenCMAX(idRecipe) {
        const step = await this.loadStepCombiOvenCMAXRepository.loadStepCombiOvenCMAX(idRecipe);
        return step;
    }
}
exports.DbLoadStepCombiOvenCMAX = DbLoadStepCombiOvenCMAX;
