"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbAddCompany = void 0;
class DbAddCompany {
    constructor(addCompanyRepository, loadCompanyByCorporateNameRepository) {
        this.addCompanyRepository = addCompanyRepository;
        this.loadCompanyByCorporateNameRepository = loadCompanyByCorporateNameRepository;
    }
    async add(companyData) {
        const company = await this.loadCompanyByCorporateNameRepository.loadByCorporateName(companyData.corporateName);
        if (!company) {
            const newCompany = await this.addCompanyRepository.add(companyData);
            return newCompany;
        }
        return null;
    }
}
exports.DbAddCompany = DbAddCompany;
