"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoadPermissionByCompanyTypeController = void 0;
const errors_1 = require("../../errors");
const http_helper_1 = require("../../helpers/http-helper");
class LoadPermissionByCompanyTypeController {
    constructor(loadPermissionByCompanyType, validation) {
        this.loadPermissionByCompanyType = loadPermissionByCompanyType;
        this.validation = validation;
    }
    async handle(httpRequest) {
        try {
            const validationError = this.validation.validate(httpRequest.params);
            if (validationError)
                return (0, http_helper_1.badRequest)(validationError);
            const response = await this.loadPermissionByCompanyType.loadPermission(httpRequest.params.companyTypeId, httpRequest.params.userTypeId);
            if (!response)
                return (0, http_helper_1.noContent)();
            return (0, http_helper_1.ok)(response);
        }
        catch (error) {
            return (0, http_helper_1.serverError)(new errors_1.ServerError(error.stack));
        }
    }
}
exports.LoadPermissionByCompanyTypeController = LoadPermissionByCompanyTypeController;
