"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbUpdateStepCombiOvenCMAX = void 0;
class DbUpdateStepCombiOvenCMAX {
    constructor(updateStepCombiOvenCMAXRepository) {
        this.updateStepCombiOvenCMAXRepository = updateStepCombiOvenCMAXRepository;
    }
    async updateStepCombiOvenCMAX(id, stepCombiOvenCMAX) {
        return await this.updateStepCombiOvenCMAXRepository.updateStepCombiOvenCMAX(id, stepCombiOvenCMAX);
    }
}
exports.DbUpdateStepCombiOvenCMAX = DbUpdateStepCombiOvenCMAX;
