"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeDbUpdateUser = void 0;
const equip_mysql_repository_1 = require("../../../../infra/db/mysql/user/equip-mysql-repository");
const db_update_user_1 = require("../../../../data/usecases/update-user/db-update-user");
const makeDbUpdateUser = (pool) => {
    const repository = new equip_mysql_repository_1.UserMySqlRepository(pool);
    return new db_update_user_1.DbUpdateUser(repository);
};
exports.makeDbUpdateUser = makeDbUpdateUser;
