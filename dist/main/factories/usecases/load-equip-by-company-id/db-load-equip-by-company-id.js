"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeDbLoadUserByCompanyId = void 0;
const equip_mysql_repository_1 = require("./../../../../infra/db/mysql/user/equip-mysql-repository");
const db_load_equip_by_company_id_1 = require("./../../../../data/usecases/load-equip-by-company-id/db-load-equip-by-company-id");
const makeDbLoadUserByCompanyId = (pool) => {
    const loadUserByCompanyRepository = new equip_mysql_repository_1.UserMySqlRepository(pool);
    return new db_load_equip_by_company_id_1.DbLoadUserByCompanyId(loadUserByCompanyRepository, loadUserByCompanyRepository);
};
exports.makeDbLoadUserByCompanyId = makeDbLoadUserByCompanyId;
