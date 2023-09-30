"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbUpdateStepCombiOvenTSI = void 0;
class DbUpdateStepCombiOvenTSI {
    constructor(updateStepCombiOvenTSIRepository) {
        this.updateStepCombiOvenTSIRepository = updateStepCombiOvenTSIRepository;
    }
    async updateStepCombiOvenTSI(id, stepCombiOvenTSI) {
        return await this.updateStepCombiOvenTSIRepository.updateStepCombiOvenTSI(id, stepCombiOvenTSI);
    }
}
exports.DbUpdateStepCombiOvenTSI = DbUpdateStepCombiOvenTSI;
