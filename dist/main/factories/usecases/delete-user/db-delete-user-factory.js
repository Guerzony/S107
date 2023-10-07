"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeDbDeleteUser = void 0;
const db_delete_user_1 = require("../../../../data/usecases/delete-user/db-delete-user");
const user_mysql_repository_1 = require("../../../../infra/user/user-mysql-repository");
const makeDbDeleteUser = () => {
    const repository = new user_mysql_repository_1.UserMySqlRepository();
    return new db_delete_user_1.DbDeleteUser(repository);
};
exports.makeDbDeleteUser = makeDbDeleteUser;
