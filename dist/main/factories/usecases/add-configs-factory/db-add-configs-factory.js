"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeDbAddConfigs = void 0;
const db_add_configs_1 = require("../../../../data/usecases/add-configs/db-add-configs");
const configs_mysql_repository_1 = require("../../../../infra/db/mysql/configs/configs-mysql-repository");
const makeDbAddConfigs = (pool) => {
    const configsMySqlRepository = new configs_mysql_repository_1.ConfigsMySqlRepository(pool);
    return new db_add_configs_1.DbAddConfigs(configsMySqlRepository);
};
exports.makeDbAddConfigs = makeDbAddConfigs;
