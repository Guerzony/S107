"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbLoadStepSpeedOvenById = void 0;
class DbLoadStepSpeedOvenById {
    constructor(loadStepSpeedOvenByIdRepository) {
        this.loadStepSpeedOvenByIdRepository = loadStepSpeedOvenByIdRepository;
    }
    async loadStepSpeedOvenById(id) {
        const stepSpeedOven = await this.loadStepSpeedOvenByIdRepository.loadStepSpeedOvenById(id);
        if (stepSpeedOven) {
            return stepSpeedOven;
        }
        return null;
    }
}
exports.DbLoadStepSpeedOvenById = DbLoadStepSpeedOvenById;
