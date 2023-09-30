"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateConfigsError = void 0;
class UpdateConfigsError extends Error {
    constructor() {
        super('Unable to Update the Configs');
        this.name = 'UpdateConfigsError';
    }
}
exports.UpdateConfigsError = UpdateConfigsError;
