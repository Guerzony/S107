"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeDbLoadConfigsByUserId = void 0;
const db_load_configs_by_user_id_1 = require("../../../../data/usecases/load-configs-by-user-id/db-load-configs-by-user-id");
const configs_mysql_repository_1 = require("../../../../infra/db/mysql/configs/configs-mysql-repository");
const makeDbLoadConfigsByUserId = (pool) => {
    const configsMysqlRepository = new configs_mysql_repository_1.ConfigsMySqlRepository(pool);
    return new db_load_configs_by_user_id_1.DbLoadConfigsByUserId(configsMysqlRepository);
};
exports.makeDbLoadConfigsByUserId = makeDbLoadConfigsByUserId;
