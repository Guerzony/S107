"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeUpdateUserByCompany = void 0;
const equip_mysql_repository_1 = require("../../../../infra/db/mysql/user/equip-mysql-repository");
const db_Update_equip_by_company_1 = require("../../../../data/usecases/update-equip-by-company/db-Update-equip-by-company");
const makeUpdateUserByCompany = (pool) => {
    const equipMySqlRepository = new equip_mysql_repository_1.UserMySqlRepository(pool);
    return new db_Update_equip_by_company_1.DbUpdateUserByCompany(equipMySqlRepository);
};
exports.makeUpdateUserByCompany = makeUpdateUserByCompany;
