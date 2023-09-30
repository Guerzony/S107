"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbUpdateEquipByCompany = void 0;
class DbUpdateEquipByCompany {
    constructor(registerEquipRepository) {
        this.registerEquipRepository = registerEquipRepository;
    }
    async update(idEquip, idCompany) {
        await this.registerEquipRepository.registerEquip(idEquip, idCompany);
    }
}
exports.DbUpdateEquipByCompany = DbUpdateEquipByCompany;
