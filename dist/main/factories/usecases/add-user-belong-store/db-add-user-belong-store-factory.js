"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeDbAddUserBelongStore = void 0;
const user_mysql_repository_1 = require("../../../../infra/db/mysql/user/user-mysql-repository");
const db_add_UserBelongStore_1 = require("../../../../data/usecases/add-UserBelongStore/db-add-UserBelongStore");
const makeDbAddUserBelongStore = (pool) => {
    const userMySqlRepository = new user_mysql_repository_1.UserMySqlRepository(pool);
    return new db_add_UserBelongStore_1.DbAddUserBelongStore(userMySqlRepository);
};
exports.makeDbAddUserBelongStore = makeDbAddUserBelongStore;
