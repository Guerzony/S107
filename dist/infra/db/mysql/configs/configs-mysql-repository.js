"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfigsMySqlRepository = void 0;
const mysql_helper_1 = require("../mysql-helper");
const configs_mysql_repository_helper_1 = require("./configs-mysql-repository-helper");
class ConfigsMySqlRepository {
    constructor(pool) {
        this.connectionPool = pool;
    }
    async add(configsData) {
        const result = await (0, mysql_helper_1.insertOne)(this.connectionPool, 'userConfigs', configsData);
        return (0, configs_mysql_repository_helper_1.mapCreatedConfigs)(configsData, result.insertId);
    }
    async loadByUserId(id) {
        const result = await (0, mysql_helper_1.getOne)(this.connectionPool, 'userConfigs', 'userId', id);
        return result[0];
    }
    async updateConfigs(configs) {
        const setFields = Object.entries(configs)
            .map(value => `${value[0]} = ${isNaN(value[1]) ? `"${value[1]}"` : value[1]}`)
            .join(', ');
        const user = await (0, mysql_helper_1.updateAll)(this.connectionPool, 'userConfigs', setFields, configs.id);
        return user;
    }
}
exports.ConfigsMySqlRepository = ConfigsMySqlRepository;
