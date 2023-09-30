"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoadGroupController = void 0;
const http_helper_1 = require("../../helpers/http-helper");
class LoadGroupController {
    constructor(validation, loadMenuGroup) {
        this.validation = validation;
        this.loadMenuGroup = loadMenuGroup;
    }
    async handle(httpRequest) {
        try {
            const error = this.validation.validate(httpRequest.params);
            if (error)
                return (0, http_helper_1.badRequest)(error);
            const { menuId } = httpRequest.params;
            const response = await this.loadMenuGroup.loadMenuGroup(menuId);
            if (!response)
                return (0, http_helper_1.noContent)();
            return (0, http_helper_1.ok)({
                groups: response
            });
        }
        catch (error) {
            return (0, http_helper_1.serverError)(error);
        }
    }
}
exports.LoadGroupController = LoadGroupController;
