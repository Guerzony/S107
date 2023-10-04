"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeDbLoadUserBySerialNumber = void 0;
const equip_mysql_repository_1 = require("../../../../infra/db/mysql/user/equip-mysql-repository");
const db_load_equip_by_serialNumber_1 = require("../../../../data/usecases/load-equip-by-serialNumber/db-load-equip-by-serialNumber");
const makeDbLoadUserBySerialNumber = (pool) => {
    const loadUserByRepository = new equip_mysql_repository_1.UserMySqlRepository(pool);
    return new db_load_equip_by_serialNumber_1.DbLoadUserBySerialNumber(loadUserByRepository);
};
exports.makeDbLoadUserBySerialNumber = makeDbLoadUserBySerialNumber;
