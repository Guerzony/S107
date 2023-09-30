"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbUpdateEquipment = void 0;
class DbUpdateEquipment {
    constructor(repository) {
        this.repository = repository;
    }
    async update(id, equipment) {
        return await this.repository.updateEquipment(id, equipment);
    }
}
exports.DbUpdateEquipment = DbUpdateEquipment;
