"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeDbAddUser = void 0;
const db_add_user_1 = require("../../../../data/usecases/add-user/db-add-user");
const bcrypt_adapter_1 = require("../../../../infra/cryptography/bcrypt-adapter/bcrypt-adapter");
const user_mysql_repository_1 = require("../../../../infra/db/mysql/user/user-mysql-repository");
const creat_randomString_factor_1 = require("../../../../utils/factors/creat-randomString-factor");
const makeDbAddUser = (pool) => {
    const salt = 12;
    const bcryptAdapter = new bcrypt_adapter_1.BcryptAdapter(salt);
    const userMySqlRepository = new user_mysql_repository_1.UserMySqlRepository(pool);
    const codeRandom = new creat_randomString_factor_1.CodeRandom();
    return new db_add_user_1.DbAddUser(bcryptAdapter, userMySqlRepository, userMySqlRepository, codeRandom);
};
exports.makeDbAddUser = makeDbAddUser;
