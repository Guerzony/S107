"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoadCompanyTypesController = void 0;
const http_helper_1 = require("../../helpers/http-helper");
class LoadCompanyTypesController {
    constructor(loadCompanyTypes, validation) {
        this.loadCompanyTypes = loadCompanyTypes;
        this.validation = validation;
    }
    async handle(httpRequest) {
        try {
            const error = this.validation.validate(httpRequest.params);
            if (error) {
                return (0, http_helper_1.badRequest)(error);
            }
            const companyTypes = await this.loadCompanyTypes.load();
            return (0, http_helper_1.ok)(companyTypes);
        }
        catch (error) {
            return (0, http_helper_1.serverError)(error);
        }
    }
}
exports.LoadCompanyTypesController = LoadCompanyTypesController;
