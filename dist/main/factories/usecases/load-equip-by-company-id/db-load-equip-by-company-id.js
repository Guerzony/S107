"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeDbLoadEquipByCompanyId = void 0;
const equip_mysql_repository_1 = require("./../../../../infra/db/mysql/equipment/equip-mysql-repository");
const db_load_equip_by_company_id_1 = require("./../../../../data/usecases/load-equip-by-company-id/db-load-equip-by-company-id");
const makeDbLoadEquipByCompanyId = (pool) => {
    const loadEquipByCompanyRepository = new equip_mysql_repository_1.EquipMySqlRepository(pool);
    return new db_load_equip_by_company_id_1.DbLoadEquipByCompanyId(loadEquipByCompanyRepository, loadEquipByCompanyRepository);
};
exports.makeDbLoadEquipByCompanyId = makeDbLoadEquipByCompanyId;
