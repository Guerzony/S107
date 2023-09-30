"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbLoadEquipmentOldByidUser = void 0;
class DbLoadEquipmentOldByidUser {
    constructor(recoverLoadEquipRepository) {
        this.recoverLoadEquipRepository = recoverLoadEquipRepository;
    }
    loadEquip(id) {
        return this.recoverLoadEquipRepository.loadEquipment(id);
    }
}
exports.DbLoadEquipmentOldByidUser = DbLoadEquipmentOldByidUser;
