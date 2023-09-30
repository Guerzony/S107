"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeDbEditUserBelongStore = void 0;
const db_update_user_belong_store_1 = require("../../../../data/usecases/update-user-belong-store/db-update-user-belong-store");
const store_mysql_repository_1 = require("../../../../infra/db/mysql/store/store-mysql-repository");
const user_mysql_repository_1 = require("../../../../infra/db/mysql/user/user-mysql-repository");
const makeDbEditUserBelongStore = (pool) => {
    const storeMySqlRepository = new store_mysql_repository_1.StoreMySqlRepository(pool);
    const userMySqlRepository = new user_mysql_repository_1.UserMySqlRepository(pool);
    return new db_update_user_belong_store_1.DbUpdateUserBelongStore(storeMySqlRepository, userMySqlRepository, userMySqlRepository);
};
exports.makeDbEditUserBelongStore = makeDbEditUserBelongStore;
