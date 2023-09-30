"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeDbLoadEquipByCompanyIdRemoteAccess = void 0;
const equip_mysql_repository_1 = require("../../../../infra/db/mysql/equipment/equip-mysql-repository");
const db_load_equip_by_companyIdRemoteAccess_1 = require("../../../../data/usecases/load-equip-by-companyIdRemoteAccess/db-load-equip-by-companyIdRemoteAccess");
const makeDbLoadEquipByCompanyIdRemoteAccess = (pool) => {
    const loadEquipByRepository = new equip_mysql_repository_1.EquipMySqlRepository(pool);
    return new db_load_equip_by_companyIdRemoteAccess_1.DbLoadEquipByCompanyIdRemoteAccess(loadEquipByRepository);
};
exports.makeDbLoadEquipByCompanyIdRemoteAccess = makeDbLoadEquipByCompanyIdRemoteAccess;
