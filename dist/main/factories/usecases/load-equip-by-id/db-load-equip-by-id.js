"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeDbLoadEquipById = void 0;
const equip_mysql_repository_1 = require("../../../../infra/db/mysql/equipment/equip-mysql-repository");
const db_load_equip_by_id_1 = require("../../../../data/usecases/load-equip-by-id/db-load-equip-by-id");
const makeDbLoadEquipById = (pool) => {
    const loadEquipByRepository = new equip_mysql_repository_1.EquipMySqlRepository(pool);
    return new db_load_equip_by_id_1.DbLoadEquipById(loadEquipByRepository);
};
exports.makeDbLoadEquipById = makeDbLoadEquipById;
