"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateStepSpeedOvenError = void 0;
class CreateStepSpeedOvenError extends Error {
    constructor() {
        super('Error creating stepSpeedOven');
        this.name = 'CreateStepSpeedOvenError';
    }
}
exports.CreateStepSpeedOvenError = CreateStepSpeedOvenError;
