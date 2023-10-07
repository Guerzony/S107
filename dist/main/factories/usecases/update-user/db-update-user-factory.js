"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeDbUpdateUser = void 0;
const user_mysql_repository_1 = require("../../../../infra/user/user-mysql-repository");
const db_update_user_1 = require("../../../../data/usecases/update-user/db-update-user");
const makeDbUpdateUser = () => {
    const repository = new user_mysql_repository_1.UserMySqlRepository();
    return new db_update_user_1.DbUpdateUser(repository);
};
exports.makeDbUpdateUser = makeDbUpdateUser;
