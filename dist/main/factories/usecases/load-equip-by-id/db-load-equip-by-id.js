"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeDbLoadUserById = void 0;
const equip_mysql_repository_1 = require("../../../../infra/db/mysql/user/equip-mysql-repository");
const db_load_equip_by_id_1 = require("../../../../data/usecases/load-equip-by-id/db-load-equip-by-id");
const makeDbLoadUserById = (pool) => {
    const loadUserByRepository = new equip_mysql_repository_1.UserMySqlRepository(pool);
    return new db_load_equip_by_id_1.DbLoadUserById(loadUserByRepository);
};
exports.makeDbLoadUserById = makeDbLoadUserById;
