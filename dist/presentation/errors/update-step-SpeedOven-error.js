"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateStepSpeedOvenError = void 0;
class UpdateStepSpeedOvenError extends Error {
    constructor() {
        super('Error updating stepSpeedOven');
        this.name = 'UpdateStepSpeedOvenError';
    }
}
exports.UpdateStepSpeedOvenError = UpdateStepSpeedOvenError;
