"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbDeleteEquipment = void 0;
class DbDeleteEquipment {
    constructor(repository) {
        this.repository = repository;
    }
    async delete(id) {
        return await this.repository.deleteEquipment(id);
    }
}
exports.DbDeleteEquipment = DbDeleteEquipment;
