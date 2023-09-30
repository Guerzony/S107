"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbLoadEquipById = void 0;
class DbLoadEquipById {
    constructor(repository) {
        this.repository = repository;
    }
    async load(id) {
        return this.repository.loadEquipById(id);
    }
}
exports.DbLoadEquipById = DbLoadEquipById;
