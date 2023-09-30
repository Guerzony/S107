"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoadUserTypeByCompanyIdController = void 0;
const errors_1 = require("../../errors");
const http_helper_1 = require("../../helpers/http-helper");
class LoadUserTypeByCompanyIdController {
    constructor(loadUserTypesByCompanyId, validation) {
        this.loadUserTypesByCompanyId = loadUserTypesByCompanyId;
        this.validation = validation;
    }
    async handle(httpRequest) {
        try {
            const validationError = this.validation.validate(httpRequest.params);
            if (validationError)
                return (0, http_helper_1.badRequest)(validationError);
            const response = await this.loadUserTypesByCompanyId.loadUserTypes(httpRequest.params.companyId);
            if (!response)
                return (0, http_helper_1.noContent)();
            return (0, http_helper_1.ok)(response);
        }
        catch (error) {
            return (0, http_helper_1.serverError)(new errors_1.ServerError(error.stack));
        }
    }
}
exports.LoadUserTypeByCompanyIdController = LoadUserTypeByCompanyIdController;
