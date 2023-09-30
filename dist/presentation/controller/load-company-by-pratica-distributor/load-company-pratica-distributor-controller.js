"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoadCompanyByPraticaDistributorController = void 0;
const http_helper_1 = require("../../helpers/http-helper");
class LoadCompanyByPraticaDistributorController {
    constructor(loadStoreByPraticaDistributor) {
        this.loadStoreByPraticaDistributor = loadStoreByPraticaDistributor;
    }
    async handle() {
        try {
            const company = await this.loadStoreByPraticaDistributor.loadCompany();
            if (!company)
                return (0, http_helper_1.noContent)();
            return (0, http_helper_1.ok)(company);
        }
        catch (error) {
            return (0, http_helper_1.serverError)(error);
        }
    }
}
exports.LoadCompanyByPraticaDistributorController = LoadCompanyByPraticaDistributorController;
