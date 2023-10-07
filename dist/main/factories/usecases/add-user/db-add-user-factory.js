"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeDbAddUser = void 0;
const user_mysql_repository_1 = require("../../../../infra/user/user-mysql-repository");
const db_add_user_1 = require("../../../../data/usecases/add-user/db-add-user");
const makeDbAddUser = () => {
    const repository = new user_mysql_repository_1.UserMySqlRepository();
    return new db_add_user_1.DbAddUser(repository);
};
exports.makeDbAddUser = makeDbAddUser;
