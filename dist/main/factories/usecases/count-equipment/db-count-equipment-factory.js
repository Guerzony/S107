"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeDbCountUser = void 0;
const db_count_user_1 = require("../../../../data/usecases/count-user/db-count-user");
const equip_mysql_repository_1 = require("../../../../infra/db/mysql/user/equip-mysql-repository");
const makeDbCountUser = (pool) => {
    const repository = new equip_mysql_repository_1.UserMySqlRepository(pool);
    return new db_count_user_1.DbCountUser(repository);
};
exports.makeDbCountUser = makeDbCountUser;
