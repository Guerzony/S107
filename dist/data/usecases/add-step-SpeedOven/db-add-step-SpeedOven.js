"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbAddStepSpeedOven = void 0;
class DbAddStepSpeedOven {
    constructor(addStepSpeedOvenRepository) {
        this.addStepSpeedOvenRepository = addStepSpeedOvenRepository;
    }
    async addStepSpeedOven(stepSpeedOven) {
        const stepSpeedOvenResult = await this.addStepSpeedOvenRepository.addStepSpeedOven(stepSpeedOven);
        return stepSpeedOvenResult;
    }
}
exports.DbAddStepSpeedOven = DbAddStepSpeedOven;
