"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbAddEquipment = void 0;
class DbAddEquipment {
    constructor(repository, codeRandomRepository) {
        this.repository = repository;
        this.codeRandomRepository = codeRandomRepository;
    }
    async add(equipment) {
        const pin = await this.codeRandomRepository.codeRandom();
        Object.assign(equipment, { iokPin: pin });
        delete equipment.idEquipment;
        const equipmentResponse = await this.repository.addEquipment(equipment);
        return equipmentResponse;
    }
}
exports.DbAddEquipment = DbAddEquipment;
