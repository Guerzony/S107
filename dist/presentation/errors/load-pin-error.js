"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoadUserByPinError = void 0;
class LoadUserByPinError extends Error {
    constructor() {
        super('Pin not found');
        this.name = 'LoadUserByPinError';
    }
}
exports.LoadUserByPinError = LoadUserByPinError;
