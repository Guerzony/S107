"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeAuthMiddleware = void 0;
const auth_middleware_1 = require("../../../presentation/middlewares/auth-middleware");
const db_load_account_by_token_factory_1 = require("../usecases/load-account-by-token/db-load-account-by-token-factory");
const makeAuthMiddleware = (pool, role) => {
    return new auth_middleware_1.AuthMiddleware((0, db_load_account_by_token_factory_1.makeLoadAccountByToken)(pool), role);
};
exports.makeAuthMiddleware = makeAuthMiddleware;
