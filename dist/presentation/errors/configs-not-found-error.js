"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfigsNotFoundError = void 0;
class ConfigsNotFoundError extends Error {
    constructor() {
        super('User configurations not found');
        this.name = 'ConfigsNotFoundError';
    }
}
exports.ConfigsNotFoundError = ConfigsNotFoundError;
