"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbLoadEquipBySerialNumber = void 0;
class DbLoadEquipBySerialNumber {
    constructor(repository) {
        this.repository = repository;
    }
    async loadEquip(serialNumber) {
        return this.repository.loadEquipBySerialNumber(serialNumber);
    }
}
exports.DbLoadEquipBySerialNumber = DbLoadEquipBySerialNumber;
