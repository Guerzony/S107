"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeDbLoadUserOld = void 0;
const user_mysql_repository_1 = require("../../../../infra/db/mysql/user/user-mysql-repository");
const db_load_userOld_by_email_1 = require("../../../../data/usecases/load-userOld-by-email/db-load-userOld-by-email");
const makeDbLoadUserOld = (pool) => {
    const userMySqlRepository = new user_mysql_repository_1.UserMySqlRepository(pool);
    return new db_load_userOld_by_email_1.DbLoadUserOldByEmail(userMySqlRepository);
};
exports.makeDbLoadUserOld = makeDbLoadUserOld;
