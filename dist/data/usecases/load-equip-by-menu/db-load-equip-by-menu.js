"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbLoadUserByMenu = void 0;
class DbLoadUserByMenu {
    constructor(loadUserByMenuRepository) {
        this.loadUserByMenuRepository = loadUserByMenuRepository;
    }
    async loadUser(menuId) {
        const equip = await this.loadUserByMenuRepository.loadByUserMenu(menuId);
        if (equip.length !== 0) {
            return equip;
        }
        return null;
    }
}
exports.DbLoadUserByMenu = DbLoadUserByMenu;
