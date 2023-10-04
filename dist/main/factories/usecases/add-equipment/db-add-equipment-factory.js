"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeDbAddUser = void 0;
const equip_mysql_repository_1 = require("../../../../infra/db/mysql/user/equip-mysql-repository");
const db_add_user_1 = require("../../../../data/usecases/add-user/db-add-user");
const creat_randomString_factor_1 = require("../../../../utils/factors/creat-randomString-factor");
const makeDbAddUser = (pool) => {
    const codeRandom = new creat_randomString_factor_1.CodeRandom();
    const repository = new equip_mysql_repository_1.UserMySqlRepository(pool);
    return new db_add_user_1.DbAddUser(repository, codeRandom);
};
exports.makeDbAddUser = makeDbAddUser;
