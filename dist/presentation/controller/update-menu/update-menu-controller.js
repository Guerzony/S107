"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateMenuController = void 0;
const errors_1 = require("../../errors");
const http_helper_1 = require("../../helpers/http-helper");
class UpdateMenuController {
    constructor(UpdateMenuValidation, UpdateMenuConfigsValidation, UpdateMenu, UpdateMenuConfigs) {
        this.UpdateMenuValidation = UpdateMenuValidation;
        this.UpdateMenuConfigsValidation = UpdateMenuConfigsValidation;
        this.UpdateMenu = UpdateMenu;
        this.UpdateMenuConfigs = UpdateMenuConfigs;
    }
    async handle(httpRequest) {
        try {
            if (!httpRequest.body.menu)
                return (0, http_helper_1.badRequest)(new errors_1.MissingParamError('menu'));
            const menuError = this.UpdateMenuValidation.validate(httpRequest.body.menu);
            if (menuError)
                return (0, http_helper_1.badRequest)(menuError);
            const menu = httpRequest.body.menu;
            await this.UpdateMenu.updateMenu(menu);
            if (httpRequest.body.menu.equipTypeId !== 4) {
                if (!httpRequest.body.menuConfigs)
                    return (0, http_helper_1.badRequest)(new errors_1.MissingParamError('menuConfig'));
                const menuConfig = httpRequest.body.menuConfigs;
                const menuConfigsError = this.UpdateMenuConfigsValidation.validate(menuConfig);
                if (menuConfigsError)
                    return (0, http_helper_1.badRequest)(menuConfigsError);
                await this.UpdateMenuConfigs.updateMenuConfigs(menuConfig);
            }
            return (0, http_helper_1.ok)({});
        }
        catch (error) {
            return (0, http_helper_1.serverError)(error);
        }
    }
}
exports.UpdateMenuController = UpdateMenuController;
