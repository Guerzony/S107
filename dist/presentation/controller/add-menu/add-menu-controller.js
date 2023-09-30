"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddMenuController = void 0;
const create_menu_error_1 = require("../../errors/create-menu-error");
const menu_config_params_error_1 = require("../../errors/menu-config-params-error");
const menu_params_error_1 = require("../../errors/menu-params-error");
const http_helper_1 = require("../../helpers/http-helper");
class AddMenuController {
    constructor(menuValidation, menuConfigsValidation, addMenu, addMenuConfigs) {
        this.menuValidation = menuValidation;
        this.menuConfigsValidation = menuConfigsValidation;
        this.addMenu = addMenu;
        this.addMenuConfigs = addMenuConfigs;
    }
    async handle(httpRequest) {
        try {
            if (!httpRequest.body.menu)
                return (0, http_helper_1.badRequest)(new menu_params_error_1.MenuParamsError());
            const menuRequest = httpRequest.body.menu;
            const menuConfigRequest = menuRequest.equipTypeId !== 4 ? httpRequest.body.menuConfigs : {};
            const error = this.menuValidation.validate(menuRequest);
            if (error)
                return (0, http_helper_1.badRequest)(error);
            if (menuRequest.equipTypeId !== 4) {
                if (!httpRequest.body.menuConfigs)
                    return (0, http_helper_1.badRequest)(new menu_config_params_error_1.MenuConfigParametersError());
                // const error = this.menuConfigsValidation.validate(menuConfigRequest)
                // if (error) return badRequest(error)
            }
            const menu = await this.addMenu.add(menuRequest);
            if (menuRequest.equipTypeId !== 4) {
                await this.addMenuConfigs.addConfigs(Object.assign(menuConfigRequest, { menuId: menu.id }));
            }
            return (0, http_helper_1.created)(menu);
        }
        catch (error) {
            return (0, http_helper_1.serverError)(new create_menu_error_1.CreateMenuError());
        }
    }
}
exports.AddMenuController = AddMenuController;
