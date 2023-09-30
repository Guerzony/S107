"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EquipmentCreationError = void 0;
class EquipmentCreationError extends Error {
    constructor() {
        super('Equipment creation error.');
        this.name = 'EquipmentCreationError';
    }
}
exports.EquipmentCreationError = EquipmentCreationError;
