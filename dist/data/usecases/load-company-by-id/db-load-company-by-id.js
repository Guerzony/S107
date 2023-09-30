"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbLoadCompanyById = void 0;
class DbLoadCompanyById {
    constructor(loadCompanyByIdRepository) {
        this.loadCompanyByIdRepository = loadCompanyByIdRepository;
    }
    async load(id) {
        const company = await this.loadCompanyByIdRepository.loadById(id);
        if (company) {
            return company;
        }
        return null;
    }
}
exports.DbLoadCompanyById = DbLoadCompanyById;
