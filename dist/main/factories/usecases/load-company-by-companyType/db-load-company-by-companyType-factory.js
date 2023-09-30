"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeDbLoadCompanyByCompanyType = void 0;
const company_mysql_repository_1 = require("../../../../infra/db/mysql/company/company-mysql-repository");
const db_load_company_by_pratica_distributor_1 = require("../../../../data/usecases/load-company-by-pratica-distributor/db-load-company-by-pratica-distributor");
const makeDbLoadCompanyByCompanyType = (pool) => {
    const companyMySqlRepository = new company_mysql_repository_1.CompanyMySqlRepository(pool);
    return new db_load_company_by_pratica_distributor_1.DbLoadCompanyByPraticaDistributor(companyMySqlRepository);
};
exports.makeDbLoadCompanyByCompanyType = makeDbLoadCompanyByCompanyType;
