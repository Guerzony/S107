"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbUpdateStepSpeedOven = void 0;
class DbUpdateStepSpeedOven {
    constructor(updateStepSpeedOvenRepository) {
        this.updateStepSpeedOvenRepository = updateStepSpeedOvenRepository;
    }
    async updateStepSpeedOven(id, stepSpeedOven) {
        return await this.updateStepSpeedOvenRepository.updateStepSpeedOven(id, stepSpeedOven);
    }
}
exports.DbUpdateStepSpeedOven = DbUpdateStepSpeedOven;
