"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbLoadCompanyMenu = void 0;
class DbLoadCompanyMenu {
    constructor(loadCompanyMenuRepository) {
        this.loadCompanyMenuRepository = loadCompanyMenuRepository;
    }
    async loadMenu(idCompany) {
        const menu = await this.loadCompanyMenuRepository.loadMenu(idCompany);
        if (menu.length !== 0) {
            return menu;
        }
        return null;
    }
}
exports.DbLoadCompanyMenu = DbLoadCompanyMenu;
