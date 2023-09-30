"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbCountEquipment = void 0;
class DbCountEquipment {
    constructor(repository) {
        this.repository = repository;
    }
    async count(where) {
        return this.repository.countEquipment(where);
    }
}
exports.DbCountEquipment = DbCountEquipment;
