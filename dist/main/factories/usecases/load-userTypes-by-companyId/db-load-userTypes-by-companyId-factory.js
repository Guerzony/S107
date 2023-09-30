"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeDbLoadUserTypesByCompanyId = void 0;
const userTypes_mysql_repository_1 = require("../../../../infra/db/mysql/userTypes/userTypes-mysql-repository");
const db_lload_userType_by_companyId_1 = require("../../../../data/usecases/load-userType-by-companyId/db-lload-userType-by-companyId");
const makeDbLoadUserTypesByCompanyId = (pool) => {
    const userTypesMySqlRepository = new userTypes_mysql_repository_1.UserTypesMySqlRepository(pool);
    return new db_lload_userType_by_companyId_1.DbLoadUserTypeByCompanyId(userTypesMySqlRepository);
};
exports.makeDbLoadUserTypesByCompanyId = makeDbLoadUserTypesByCompanyId;
