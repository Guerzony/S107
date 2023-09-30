"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeLoadAccountByToken = void 0;
const user_mysql_repository_1 = require("../../../../infra/db/mysql/user/user-mysql-repository");
const db_load_user_by_token_1 = require("../../../../data/usecases/load-user-by-token/db-load-user-by-token");
const env_1 = __importDefault(require("../../../config/env"));
const jwt_adapter_1 = require("../../../../infra/cryptography/jwt-adapter/jwt-adapter");
const makeLoadAccountByToken = (pool) => {
    const jwtAdapter = new jwt_adapter_1.JwtAdapter(env_1.default.jwtSecret);
    const loadAccountByTokenRepository = new user_mysql_repository_1.UserMySqlRepository(pool);
    return new db_load_user_by_token_1.DbLoadAccountByToken(jwtAdapter, loadAccountByTokenRepository);
};
exports.makeLoadAccountByToken = makeLoadAccountByToken;
