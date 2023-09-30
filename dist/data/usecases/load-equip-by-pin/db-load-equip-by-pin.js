"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbLoadEquipByPin = void 0;
class DbLoadEquipByPin {
    constructor(loadequipByPinRepository) {
        this.loadequipByPinRepository = loadequipByPinRepository;
    }
    async load(IOKPin) {
        const equip = await this.loadequipByPinRepository.loadByEquipPin(IOKPin);
        if (equip) {
            return equip;
        }
        return null;
    }
}
exports.DbLoadEquipByPin = DbLoadEquipByPin;
