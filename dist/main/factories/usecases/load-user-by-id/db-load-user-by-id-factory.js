"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeDbLoadUser = void 0;
const db_load_user_by_id_1 = require("../../../../data/usecases/load-user-by-id/db-load-user-by-id");
const user_mysql_repository_1 = require("../../../../infra/db/mysql/user/user-mysql-repository");
const makeDbLoadUser = (pool) => {
    const userMySqlRepository = new user_mysql_repository_1.UserMySqlRepository(pool);
    return new db_load_user_by_id_1.DbLoadUserById(userMySqlRepository);
};
exports.makeDbLoadUser = makeDbLoadUser;
