"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeDbLoadUser = void 0;
const user_mysql_repository_1 = require("../../../../infra/db/mysql/user/user-mysql-repository");
const db_load_user_by_corporateName_1 = require("../../../../data/usecases/load-user-by-corporateName/db-load-user-by-corporateName");
const makeDbLoadUser = (pool) => {
    const userMySqlRepository = new user_mysql_repository_1.UserMySqlRepository(pool);
    return new db_load_user_by_corporateName_1.DbLoadUserByCorporateName(userMySqlRepository);
};
exports.makeDbLoadUser = makeDbLoadUser;
