"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbDeleteMenu = void 0;
class DbDeleteMenu {
    constructor(deleteMenuRepository) {
        this.deleteMenuRepository = deleteMenuRepository;
    }
    async deleteMenu(id) {
        const result = await this.deleteMenuRepository.deleteMenu(id);
        return result;
    }
}
exports.DbDeleteMenu = DbDeleteMenu;
