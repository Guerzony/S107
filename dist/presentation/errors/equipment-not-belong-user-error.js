"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EquipmentNotBelongUser = void 0;
class EquipmentNotBelongUser extends Error {
    constructor() {
        super('Equipment does not belong to the user');
        this.name = 'EquipmentNotBelongUser';
    }
}
exports.EquipmentNotBelongUser = EquipmentNotBelongUser;
