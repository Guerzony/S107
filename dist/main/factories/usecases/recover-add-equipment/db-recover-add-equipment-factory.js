"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeRecoverAddUser = void 0;
const equip_mysql_repository_1 = require("../../../../infra/db/mysql/user/equip-mysql-repository");
const db_recover_add_user_1 = require("../../../../data/usecases/recover-add-user/db-recover-add-user");
const makeRecoverAddUser = (pool) => {
    const equipMySqlRepository = new equip_mysql_repository_1.UserMySqlRepository(pool);
    return new db_recover_add_user_1.DbRecoverAddUser(equipMySqlRepository);
};
exports.makeRecoverAddUser = makeRecoverAddUser;
