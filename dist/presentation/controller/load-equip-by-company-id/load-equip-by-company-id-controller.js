"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoadUserByCompanyIdController = void 0;
const errors_1 = require("../../errors");
const http_helper_1 = require("../../helpers/http-helper");
class LoadUserByCompanyIdController {
    constructor(loadUserByCompanyId, validation) {
        this.loadUserByCompanyId = loadUserByCompanyId;
        this.validation = validation;
    }
    async handle(httpRequest) {
        try {
            const validationError = this.validation.validate(httpRequest.params);
            if (validationError)
                return (0, http_helper_1.badRequest)(validationError);
            const { companyId, userId, userPrivilegeUser } = httpRequest.params;
            const response = await this.loadUserByCompanyId.load(companyId, userId, userPrivilegeUser);
            if (response.length === 0)
                return (0, http_helper_1.noContent)();
            return (0, http_helper_1.ok)(response);
        }
        catch (error) {
            return (0, http_helper_1.serverError)(new errors_1.ServerError(error.stack));
        }
    }
}
exports.LoadUserByCompanyIdController = LoadUserByCompanyIdController;
