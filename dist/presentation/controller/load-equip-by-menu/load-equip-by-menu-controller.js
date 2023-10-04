"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoadUserByMenuController = void 0;
const http_helper_1 = require("../../helpers/http-helper");
class LoadUserByMenuController {
    constructor(loadUserMenuValidation, loadUserByMenu) {
        this.loadUserByMenuValidation = loadUserMenuValidation;
        this.loadUserByMenu = loadUserByMenu;
    }
    async handle(httpRequest) {
        try {
            const Error = this.loadUserByMenuValidation.validate(httpRequest.params);
            if (Error) {
                return (0, http_helper_1.badRequest)(Error);
            }
            const { idMenu } = httpRequest.params;
            const equip = await this.loadUserByMenu.loadUser(idMenu);
            return (0, http_helper_1.ok)({
                user: equip
            });
        }
        catch (error) {
            return (0, http_helper_1.serverError)(error);
        }
    }
}
exports.LoadUserByMenuController = LoadUserByMenuController;
