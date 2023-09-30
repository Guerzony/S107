"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbLoadCompanyMenuConfigs = void 0;
class DbLoadCompanyMenuConfigs {
    constructor(loadCompanyMenuConfigRepository) {
        this.loadCompanyMenuConfigRepository = loadCompanyMenuConfigRepository;
    }
    async loadMenuConfigs(idMenu) {
        const menu = await this.loadCompanyMenuConfigRepository.loadMenuConfig(idMenu);
        if (menu) {
            return menu;
        }
        return null;
    }
}
exports.DbLoadCompanyMenuConfigs = DbLoadCompanyMenuConfigs;
