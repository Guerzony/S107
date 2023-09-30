"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeDbAutehntication = void 0;
const db_authentication_1 = require("../../../../data/usecases/authentication/db-authentication");
const user_mysql_repository_1 = require("../../../../infra/db/mysql/user/user-mysql-repository");
const bcrypt_adapter_1 = require("../../../../infra/cryptography/bcrypt-adapter/bcrypt-adapter");
const jwt_adapter_1 = require("../../../../infra/cryptography/jwt-adapter/jwt-adapter");
const env_1 = __importDefault(require("../../../config/env"));
const makeDbAutehntication = (pool) => {
    const salt = 12;
    const bcryptAdapter = new bcrypt_adapter_1.BcryptAdapter(salt);
    const userMySqlRepository = new user_mysql_repository_1.UserMySqlRepository(pool);
    const jwtAdapter = new jwt_adapter_1.JwtAdapter(env_1.default.jwtSecret);
    return new db_authentication_1.DbAuthentication(userMySqlRepository, bcryptAdapter, jwtAdapter, userMySqlRepository);
};
exports.makeDbAutehntication = makeDbAutehntication;
