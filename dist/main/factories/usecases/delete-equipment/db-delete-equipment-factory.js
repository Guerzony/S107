"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeDbDeleteUser = void 0;
const db_delete_user_1 = require("../../../../data/usecases/delete-user/db-delete-user");
const equip_mysql_repository_1 = require("../../../../infra/db/mysql/user/equip-mysql-repository");
const makeDbDeleteUser = (pool) => {
    const repository = new equip_mysql_repository_1.UserMySqlRepository(pool);
    return new db_delete_user_1.DbDeleteUser(repository);
};
exports.makeDbDeleteUser = makeDbDeleteUser;
