"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteMenuController = void 0;
const errors_1 = require("../../errors");
const http_helper_1 = require("../../helpers/http-helper");
class DeleteMenuController {
    constructor(deleteMenuValidation, deleteMenu) {
        this.deleteMenuValidation = deleteMenuValidation;
        this.deleteMenu = deleteMenu;
    }
    async handle(httpRequest) {
        try {
            const { id } = httpRequest.params;
            const error = this.deleteMenuValidation.validate(httpRequest.params);
            if (error)
                return (0, http_helper_1.badRequest)(new errors_1.MissingParamError('id'));
            if (typeof (id) === 'undefined')
                return (0, http_helper_1.badRequest)(new errors_1.InvalidParamError('id'));
            await this.deleteMenu.deleteMenu(id);
            return (0, http_helper_1.ok)({});
        }
        catch (error) {
            return (0, http_helper_1.serverError)(error);
        }
    }
}
exports.DeleteMenuController = DeleteMenuController;
