"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbAddMenu = void 0;
class DbAddMenu {
    constructor(addMenuRepository) {
        this.addMenuRepository = addMenuRepository;
    }
    async add(menuData) {
        const menu = await this.addMenuRepository.add(menuData);
        return menu;
    }
}
exports.DbAddMenu = DbAddMenu;
