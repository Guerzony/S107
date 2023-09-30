"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbUpdateMenu = void 0;
class DbUpdateMenu {
    constructor(UpdateMenuRepository) {
        this.UpdateMenuRepository = UpdateMenuRepository;
    }
    async updateMenu(menu) {
        await this.UpdateMenuRepository.updateMenu(menu);
    }
}
exports.DbUpdateMenu = DbUpdateMenu;
