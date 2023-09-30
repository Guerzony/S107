"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeDbLoadCompany = void 0;
const db_load_company_by_id_1 = require("../../../../data/usecases/load-company-by-id/db-load-company-by-id");
const company_mysql_repository_1 = require("../../../../infra/db/mysql/company/company-mysql-repository");
const makeDbLoadCompany = (pool) => {
    const companyMySqlRepository = new company_mysql_repository_1.CompanyMySqlRepository(pool);
    return new db_load_company_by_id_1.DbLoadCompanyById(companyMySqlRepository);
};
exports.makeDbLoadCompany = makeDbLoadCompany;
