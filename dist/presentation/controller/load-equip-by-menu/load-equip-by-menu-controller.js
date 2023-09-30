"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoadEquipByMenuController = void 0;
const http_helper_1 = require("../../helpers/http-helper");
class LoadEquipByMenuController {
    constructor(loadUserMenuValidation, loadEquipByMenu) {
        this.loadEquipByMenuValidation = loadUserMenuValidation;
        this.loadEquipByMenu = loadEquipByMenu;
    }
    async handle(httpRequest) {
        try {
            const Error = this.loadEquipByMenuValidation.validate(httpRequest.params);
            if (Error) {
                return (0, http_helper_1.badRequest)(Error);
            }
            const { idMenu } = httpRequest.params;
            const equip = await this.loadEquipByMenu.loadEquip(idMenu);
            return (0, http_helper_1.ok)({
                equipment: equip
            });
        }
        catch (error) {
            return (0, http_helper_1.serverError)(error);
        }
    }
}
exports.LoadEquipByMenuController = LoadEquipByMenuController;
