"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeDbUpdateConfigs = void 0;
const db_update_configs_1 = require("../../../../data/usecases/update-configs/db-update-configs");
const configs_mysql_repository_1 = require("../../../../infra/db/mysql/configs/configs-mysql-repository");
const makeDbUpdateConfigs = (pool) => {
    const configsMySqlRepository = new configs_mysql_repository_1.ConfigsMySqlRepository(pool);
    return new db_update_configs_1.DbUpdateConfigs(configsMySqlRepository, configsMySqlRepository);
};
exports.makeDbUpdateConfigs = makeDbUpdateConfigs;
