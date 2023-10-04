"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeLoadUserByPin = void 0;
const equip_mysql_repository_1 = require("../../../../infra/db/mysql/user/equip-mysql-repository");
const db_load_equip_by_pin_1 = require("../../../../data/usecases/load-equip-by-pin/db-load-equip-by-pin");
const makeLoadUserByPin = (pool) => {
    const loadByUserPin = new equip_mysql_repository_1.UserMySqlRepository(pool);
    return new db_load_equip_by_pin_1.DbLoadUserByPin(loadByUserPin);
};
exports.makeLoadUserByPin = makeLoadUserByPin;
