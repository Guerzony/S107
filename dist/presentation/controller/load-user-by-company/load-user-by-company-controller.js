"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoadUserByCompanyController = void 0;
const http_helper_1 = require("../../helpers/http-helper");
class LoadUserByCompanyController {
    constructor(loadRecipeValidation, loadUserByCompany) {
        this.loadRecipeValidation = loadRecipeValidation;
        this.loadUserByCompany = loadUserByCompany;
    }
    async handle(httpRequest) {
        try {
            const error = this.loadRecipeValidation.validate(httpRequest.params);
            if (error)
                return (0, http_helper_1.badRequest)(error);
            const { id } = httpRequest.params;
            const response = await this.loadUserByCompany.loadUser(id);
            if (!response)
                return (0, http_helper_1.noContent)();
            return (0, http_helper_1.ok)({
                users: response
            });
        }
        catch (error) {
            return (0, http_helper_1.serverError)(error);
        }
    }
}
exports.LoadUserByCompanyController = LoadUserByCompanyController;
