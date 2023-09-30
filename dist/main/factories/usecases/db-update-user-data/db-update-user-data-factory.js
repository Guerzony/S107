"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeDbEditUserData = void 0;
const db_update_user_data_1 = require("../../../../data/usecases/update-user-data/db-update-user-data");
const bcrypt_adapter_1 = require("../../../../infra/cryptography/bcrypt-adapter/bcrypt-adapter");
const user_mysql_repository_1 = require("../../../../infra/db/mysql/user/user-mysql-repository");
const makeDbEditUserData = (pool) => {
    const salt = 12;
    const bcryptAdapter = new bcrypt_adapter_1.BcryptAdapter(salt);
    const userMySqlRepository = new user_mysql_repository_1.UserMySqlRepository(pool);
    return new db_update_user_data_1.DbEditUserData(bcryptAdapter, userMySqlRepository, userMySqlRepository);
};
exports.makeDbEditUserData = makeDbEditUserData;
