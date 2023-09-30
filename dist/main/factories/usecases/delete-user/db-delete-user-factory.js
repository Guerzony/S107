"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeDeleteUser = void 0;
const db_delete_user_1 = require("../../../../data/usecases/delete-user/db-delete-user");
const user_mysql_repository_1 = require("../../../../infra/db/mysql/user/user-mysql-repository");
const makeDeleteUser = (pool) => {
    const userMySqlRepository = new user_mysql_repository_1.UserMySqlRepository(pool);
    return new db_delete_user_1.DbDeleteUser(userMySqlRepository);
};
exports.makeDeleteUser = makeDeleteUser;
