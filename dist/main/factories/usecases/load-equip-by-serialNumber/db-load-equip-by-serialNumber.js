"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeDbLoadEquipBySerialNumber = void 0;
const equip_mysql_repository_1 = require("../../../../infra/db/mysql/equipment/equip-mysql-repository");
const db_load_equip_by_serialNumber_1 = require("../../../../data/usecases/load-equip-by-serialNumber/db-load-equip-by-serialNumber");
const makeDbLoadEquipBySerialNumber = (pool) => {
    const loadEquipByRepository = new equip_mysql_repository_1.EquipMySqlRepository(pool);
    return new db_load_equip_by_serialNumber_1.DbLoadEquipBySerialNumber(loadEquipByRepository);
};
exports.makeDbLoadEquipBySerialNumber = makeDbLoadEquipBySerialNumber;
