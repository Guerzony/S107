"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbLoadEquipByMenu = void 0;
class DbLoadEquipByMenu {
    constructor(loadEquipByMenuRepository) {
        this.loadEquipByMenuRepository = loadEquipByMenuRepository;
    }
    async loadEquip(menuId) {
        const equip = await this.loadEquipByMenuRepository.loadByEquipMenu(menuId);
        if (equip.length !== 0) {
            return equip;
        }
        return null;
    }
}
exports.DbLoadEquipByMenu = DbLoadEquipByMenu;
