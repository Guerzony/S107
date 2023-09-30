"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeDbLoadCompanyTypes = void 0;
const companyTypes_mysql_repository_1 = require("../../../../infra/db/mysql/companyTypes/companyTypes-mysql-repository");
const db_load_companyTypes_1 = require("../../../../data/usecases/load-companyTypes/db-load-companyTypes");
const makeDbLoadCompanyTypes = (pool) => {
    const companyTypesMySqlRepository = new companyTypes_mysql_repository_1.CompanyTypesMySqlRepository(pool);
    return new db_load_companyTypes_1.DbLoadCompanyTypes(companyTypesMySqlRepository);
};
exports.makeDbLoadCompanyTypes = makeDbLoadCompanyTypes;
