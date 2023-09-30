"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeDbauthenticationPassword = void 0;
const user_mysql_repository_1 = require("../../../../infra/db/mysql/user/user-mysql-repository");
const bcrypt_adapter_1 = require("../../../../infra/cryptography/bcrypt-adapter/bcrypt-adapter");
const db_authentication_1 = require("../../../../data/usecases/authenticationPassword/db-authentication");
const makeDbauthenticationPassword = (pool) => {
    const salt = 12;
    const bcryptAdapter = new bcrypt_adapter_1.BcryptAdapter(salt);
    const userMySqlRepository = new user_mysql_repository_1.UserMySqlRepository(pool);
    return new db_authentication_1.DbAuthenticationPassword(userMySqlRepository, bcryptAdapter);
};
exports.makeDbauthenticationPassword = makeDbauthenticationPassword;
