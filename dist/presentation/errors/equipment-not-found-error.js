"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EquipmentNotFoundError = void 0;
class EquipmentNotFoundError extends Error {
    constructor() {
        super('Equipment not found');
        this.name = 'EquipmentNotFoundError';
    }
}
exports.EquipmentNotFoundError = EquipmentNotFoundError;
