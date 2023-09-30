"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoadCompanyMenuController = void 0;
const http_helper_1 = require("../../helpers/http-helper");
class LoadCompanyMenuController {
    constructor(loadCompanyMenu, loadCompanyMenuConfigs) {
        this.loadCompanyMenu = loadCompanyMenu;
        this.loadCompanyMenuConfigs = loadCompanyMenuConfigs;
    }
    async handle(httpRequest) {
        try {
            const { companyId } = httpRequest.params;
            const menu = await this.loadCompanyMenu.loadMenu(companyId);
            if (!menu)
                return (0, http_helper_1.noContent)();
            for (const index in menu) {
                const menuConfig = await this.loadCompanyMenuConfigs.loadMenuConfigs(menu[index].id);
                Object.assign(menu[index], { configs: menuConfig });
            }
            return (0, http_helper_1.ok)({
                menu: menu
            });
        }
        catch (error) {
            return (0, http_helper_1.serverError)(error);
        }
    }
}
exports.LoadCompanyMenuController = LoadCompanyMenuController;
