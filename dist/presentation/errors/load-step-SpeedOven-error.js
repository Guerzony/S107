"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoadStepSpeedOvenError = void 0;
class LoadStepSpeedOvenError extends Error {
    constructor() {
        super('StepSpeedOven not found');
        this.name = 'LoadStepSpeedOvenError';
    }
}
exports.LoadStepSpeedOvenError = LoadStepSpeedOvenError;
