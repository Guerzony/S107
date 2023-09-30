"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbDeleteStepCombiOvenTSI = void 0;
class DbDeleteStepCombiOvenTSI {
    constructor(deleteStepCombiOvenTSIRepository) {
        this.deleteStepCombiOvenTSIRepository = deleteStepCombiOvenTSIRepository;
    }
    async deleteStepCombiOvenTSI(id) {
        return await this.deleteStepCombiOvenTSIRepository.deleteStepCombiOvenTSI(id);
    }
}
exports.DbDeleteStepCombiOvenTSI = DbDeleteStepCombiOvenTSI;
