"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbAddStepCombiOvenCMAX = void 0;
class DbAddStepCombiOvenCMAX {
    constructor(addStepCombiOvenCMAXRepository) {
        this.addStepCombiOvenCMAXRepository = addStepCombiOvenCMAXRepository;
    }
    async addStepCombiOvenCMAX(stepCombiOvenCMAX) {
        const stepCombiOvenCMAXResult = await this.addStepCombiOvenCMAXRepository.addStepCombiOvenCMAX(stepCombiOvenCMAX);
        return stepCombiOvenCMAXResult;
    }
}
exports.DbAddStepCombiOvenCMAX = DbAddStepCombiOvenCMAX;
