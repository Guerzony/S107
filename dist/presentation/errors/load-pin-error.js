"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoadEquipByPinError = void 0;
class LoadEquipByPinError extends Error {
    constructor() {
        super('Pin not found');
        this.name = 'LoadEquipByPinError';
    }
}
exports.LoadEquipByPinError = LoadEquipByPinError;
