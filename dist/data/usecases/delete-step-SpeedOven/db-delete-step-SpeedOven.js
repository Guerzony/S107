"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbDeleteStepSpeedOven = void 0;
class DbDeleteStepSpeedOven {
    constructor(deleteStepSpeedOvenRepository) {
        this.deleteStepSpeedOvenRepository = deleteStepSpeedOvenRepository;
    }
    async deleteStepSpeedOven(id) {
        return await this.deleteStepSpeedOvenRepository.deleteStepSpeedOven(id);
    }
}
exports.DbDeleteStepSpeedOven = DbDeleteStepSpeedOven;
