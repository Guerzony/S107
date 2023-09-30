"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbLoadStepCombiOvenTSI = void 0;
class DbLoadStepCombiOvenTSI {
    constructor(loadStepCombiOvenTSIRepository) {
        this.loadStepCombiOvenTSIRepository = loadStepCombiOvenTSIRepository;
    }
    async loadStepCombiOvenTSI(idRecipe) {
        const step = await this.loadStepCombiOvenTSIRepository.loadStepCombiOvenTSI(idRecipe);
        return step;
    }
}
exports.DbLoadStepCombiOvenTSI = DbLoadStepCombiOvenTSI;
