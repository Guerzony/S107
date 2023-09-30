"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeUpdateEquipByCompany = void 0;
const equip_mysql_repository_1 = require("../../../../infra/db/mysql/equipment/equip-mysql-repository");
const db_Update_equip_by_company_1 = require("../../../../data/usecases/update-equip-by-company/db-Update-equip-by-company");
const makeUpdateEquipByCompany = (pool) => {
    const equipMySqlRepository = new equip_mysql_repository_1.EquipMySqlRepository(pool);
    return new db_Update_equip_by_company_1.DbUpdateEquipByCompany(equipMySqlRepository);
};
exports.makeUpdateEquipByCompany = makeUpdateEquipByCompany;
