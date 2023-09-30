"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbLoadCompanyTypes = void 0;
class DbLoadCompanyTypes {
    constructor(loadCompanyTypesRepository) {
        this.loadCompanyTypesRepository = loadCompanyTypesRepository;
    }
    async load() {
        const companyTypes = await this.loadCompanyTypesRepository.load();
        return companyTypes;
    }
}
exports.DbLoadCompanyTypes = DbLoadCompanyTypes;
