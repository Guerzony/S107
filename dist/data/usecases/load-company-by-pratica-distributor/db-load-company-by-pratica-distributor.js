"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbLoadCompanyByPraticaDistributor = void 0;
class DbLoadCompanyByPraticaDistributor {
    constructor(loadCompanyByPraticaDistributorRepository) {
        this.loadCompanyByPraticaDistributorRepository = loadCompanyByPraticaDistributorRepository;
    }
    async loadCompany() {
        const company = await this.loadCompanyByPraticaDistributorRepository.loadByPraticaDistributor();
        if (company) {
            return company;
        }
        return null;
    }
}
exports.DbLoadCompanyByPraticaDistributor = DbLoadCompanyByPraticaDistributor;
