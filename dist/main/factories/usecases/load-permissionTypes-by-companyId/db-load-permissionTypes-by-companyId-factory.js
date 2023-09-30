"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeDbLoadPermissionTypesByCompanyTypeId = void 0;
const permissionTypes_mysql_repository_1 = require("../../../../infra/db/mysql/permissionTypes/permissionTypes-mysql-repository");
const db_load_permision_by_companyType_1 = require("../../../../data/usecases/load-permision-by-companyType/db-load-permision-by-companyType");
const makeDbLoadPermissionTypesByCompanyTypeId = (pool) => {
    const permissionTypesMySqlRepository = new permissionTypes_mysql_repository_1.PermissionTypesMySqlRepository(pool);
    return new db_load_permision_by_companyType_1.DbLoadPermissionByCompanyType(permissionTypesMySqlRepository);
};
exports.makeDbLoadPermissionTypesByCompanyTypeId = makeDbLoadPermissionTypesByCompanyTypeId;
