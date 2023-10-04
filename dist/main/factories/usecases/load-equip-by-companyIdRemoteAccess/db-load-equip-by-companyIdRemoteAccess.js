"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeDbLoadUserByCompanyIdRemoteAccess = void 0;
const equip_mysql_repository_1 = require("../../../../infra/db/mysql/user/equip-mysql-repository");
const db_load_equip_by_companyIdRemoteAccess_1 = require("../../../../data/usecases/load-equip-by-companyIdRemoteAccess/db-load-equip-by-companyIdRemoteAccess");
const makeDbLoadUserByCompanyIdRemoteAccess = (pool) => {
    const loadUserByRepository = new equip_mysql_repository_1.UserMySqlRepository(pool);
    return new db_load_equip_by_companyIdRemoteAccess_1.DbLoadUserByCompanyIdRemoteAccess(loadUserByRepository);
};
exports.makeDbLoadUserByCompanyIdRemoteAccess = makeDbLoadUserByCompanyIdRemoteAccess;
