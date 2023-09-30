"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StepSpeedOvenParamsError = void 0;
class StepSpeedOvenParamsError extends Error {
    constructor() {
        super('Error in stepSpeedOven parameters');
        this.name = 'StepSpeedOvenParametersError';
    }
}
exports.StepSpeedOvenParamsError = StepSpeedOvenParamsError;
