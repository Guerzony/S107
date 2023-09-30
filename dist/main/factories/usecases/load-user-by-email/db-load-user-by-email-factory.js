"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeDbLoadUserByEmail = void 0;
const user_mysql_repository_1 = require("../../../../infra/db/mysql/user/user-mysql-repository");
const db_load_user_by_email_1 = require("../../../../data/usecases/load-user-by-email/db-load-user-by-email");
const makeDbLoadUserByEmail = (pool) => {
    const userMySqlRepository = new user_mysql_repository_1.UserMySqlRepository(pool);
    return new db_load_user_by_email_1.DbLoadUserByEmail(userMySqlRepository);
};
exports.makeDbLoadUserByEmail = makeDbLoadUserByEmail;
