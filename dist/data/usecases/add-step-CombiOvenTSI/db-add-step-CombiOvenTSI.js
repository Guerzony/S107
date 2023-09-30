"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbAddStepCombiOvenTSI = void 0;
class DbAddStepCombiOvenTSI {
    constructor(addStepCombiOvenTSIRepository) {
        this.addStepCombiOvenTSIRepository = addStepCombiOvenTSIRepository;
    }
    async addStepCombiOvenTSI(stepCombiOvenTSI) {
        const stepCombiOvenTSIResult = await this.addStepCombiOvenTSIRepository.addStepCombiOvenTSI(stepCombiOvenTSI);
        return stepCombiOvenTSIResult;
    }
}
exports.DbAddStepCombiOvenTSI = DbAddStepCombiOvenTSI;
