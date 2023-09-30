"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbDeleteStepCombiOvenCMAX = void 0;
class DbDeleteStepCombiOvenCMAX {
    constructor(deleteStepCombiOvenCMAXRepository) {
        this.deleteStepCombiOvenCMAXRepository = deleteStepCombiOvenCMAXRepository;
    }
    async deleteStepCombiOvenCMAX(id) {
        return await this.deleteStepCombiOvenCMAXRepository.deleteStepCombiOvenCMAX(id);
    }
}
exports.DbDeleteStepCombiOvenCMAX = DbDeleteStepCombiOvenCMAX;
