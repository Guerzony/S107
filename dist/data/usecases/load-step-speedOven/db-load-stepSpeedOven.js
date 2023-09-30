"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbLoadStepSpeedOven = void 0;
class DbLoadStepSpeedOven {
    constructor(loadStepSpeedOvenRepository) {
        this.loadStepSpeedOvenRepository = loadStepSpeedOvenRepository;
    }
    async loadStepSpeedOven(idRecipe) {
        const step = await this.loadStepSpeedOvenRepository.loadStepSpeedOven(idRecipe);
        return step;
    }
}
exports.DbLoadStepSpeedOven = DbLoadStepSpeedOven;
