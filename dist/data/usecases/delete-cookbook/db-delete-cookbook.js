"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbDeleteCookbook = void 0;
class DbDeleteCookbook {
    constructor(deleteCookbookRepository, deleteStepSpeedOvenRepository, deleteCombiOvenTSIRepository, deleteCombiOvenCMAXRepository) {
        this.deleteCookbookRepository = deleteCookbookRepository;
        this.deleteStepSpeedOvenRepository = deleteStepSpeedOvenRepository;
        this.deleteCombiOvenTSIRepository = deleteCombiOvenTSIRepository;
        this.deleteCombiOvenCMAXRepository = deleteCombiOvenCMAXRepository;
    }
    async deleteCookbook(id, equipType) {
        if (equipType === 4) {
            await this.deleteCombiOvenCMAXRepository.deleteCombiOvenCMAX(id);
        }
        else if (equipType === 2) {
            await this.deleteCombiOvenTSIRepository.deleteCombiOvenTSI(id);
        }
        else {
            await this.deleteStepSpeedOvenRepository.deleteSpeedOven(id);
        }
        return await this.deleteCookbookRepository.deleteCookbook(id);
    }
}
exports.DbDeleteCookbook = DbDeleteCookbook;
