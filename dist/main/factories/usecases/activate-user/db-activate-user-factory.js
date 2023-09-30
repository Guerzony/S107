"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeDbActivateUser = void 0;
const db_update_user_by_activation_1 = require("../../../../data/usecases/update-user/db-update-user-by-activation");
const user_mysql_repository_1 = require("../../../../infra/db/mysql/user/user-mysql-repository");
const creat_randomString_factor_1 = require("../../../../utils/factors/creat-randomString-factor");
const makeDbActivateUser = (pool) => {
    const loadUserByActivationRepository = new user_mysql_repository_1.UserMySqlRepository(pool);
    const UpdateActivateTokenRepository = new user_mysql_repository_1.UserMySqlRepository(pool);
    const codeRandom = new creat_randomString_factor_1.CodeRandom();
    return new db_update_user_by_activation_1.DbUpdateUserByActivation(loadUserByActivationRepository, UpdateActivateTokenRepository, codeRandom);
};
exports.makeDbActivateUser = makeDbActivateUser;
