"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoadStoresByCompanyIdController = void 0;
const http_helper_1 = require("../../helpers/http-helper");
class LoadStoresByCompanyIdController {
    constructor(loadStoresByCompanyId, validation) {
        this.loadStoresByCompanyId = loadStoresByCompanyId;
        this.validation = validation;
    }
    async handle(httpRequest) {
        try {
            const error = this.validation.validate(httpRequest.params);
            if (error)
                return (0, http_helper_1.badRequest)(error);
            const { companyId, userId, userPrivilegeUser } = httpRequest.params;
            const response = await this.loadStoresByCompanyId.loadStoresByCompanyId(companyId, userId, userPrivilegeUser);
            if (!response) {
                return (0, http_helper_1.noContent)();
            }
            return (0, http_helper_1.ok)({ stores: response });
        }
        catch (error) {
            return (0, http_helper_1.serverError)(error);
        }
    }
}
exports.LoadStoresByCompanyIdController = LoadStoresByCompanyIdController;
