"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeDbLoadUserByCompany = void 0;
const user_mysql_repository_1 = require("../../../../infra/db/mysql/user/user-mysql-repository");
const db_load_user_by_company_1 = require("../../../../data/usecases/load-user-by-company/db-load-user-by-company");
const store_mysql_repository_1 = require("../../../../infra/db/mysql/store/store-mysql-repository");
const makeDbLoadUserByCompany = (pool) => {
    const userMySqlRepository = new user_mysql_repository_1.UserMySqlRepository(pool);
    const storeMySqlRepository = new store_mysql_repository_1.StoreMySqlRepository(pool);
    return new db_load_user_by_company_1.DbLoadUserByCompany(userMySqlRepository, storeMySqlRepository);
};
exports.makeDbLoadUserByCompany = makeDbLoadUserByCompany;
