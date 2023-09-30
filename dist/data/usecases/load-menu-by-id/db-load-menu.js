"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbLoadMenu = void 0;
class DbLoadMenu {
    constructor(loadMenuRepository) {
        this.loadMenuRepository = loadMenuRepository;
    }
    async loadMenu(id) {
        const menu = await this.loadMenuRepository.loadMenuById(id);
        if (menu) {
            return menu;
        }
        return null;
    }
}
exports.DbLoadMenu = DbLoadMenu;
