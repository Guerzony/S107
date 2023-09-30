"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeDbAddCompany = void 0;
const db_add_company_1 = require("../../../../data/usecases/add-company/db-add-company");
const company_mysql_repository_1 = require("../../../../infra/db/mysql/company/company-mysql-repository");
const makeDbAddCompany = (pool) => {
    const companyMySqlRepository = new company_mysql_repository_1.CompanyMySqlRepository(pool);
    return new db_add_company_1.DbAddCompany(companyMySqlRepository, companyMySqlRepository);
};
exports.makeDbAddCompany = makeDbAddCompany;
