"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeLoadEquipByPin = void 0;
const equip_mysql_repository_1 = require("../../../../infra/db/mysql/equipment/equip-mysql-repository");
const db_load_equip_by_pin_1 = require("../../../../data/usecases/load-equip-by-pin/db-load-equip-by-pin");
const makeLoadEquipByPin = (pool) => {
    const loadByEquipPin = new equip_mysql_repository_1.EquipMySqlRepository(pool);
    return new db_load_equip_by_pin_1.DbLoadEquipByPin(loadByEquipPin);
};
exports.makeLoadEquipByPin = makeLoadEquipByPin;
