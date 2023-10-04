"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbLoadUserByPin = void 0;
class DbLoadUserByPin {
    constructor(loadequipByPinRepository) {
        this.loadequipByPinRepository = loadequipByPinRepository;
    }
    async load(IOKPin) {
        const equip = await this.loadequipByPinRepository.loadByUserPin(IOKPin);
        if (equip) {
            return equip;
        }
        return null;
    }
}
exports.DbLoadUserByPin = DbLoadUserByPin;
