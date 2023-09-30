"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuConfigsMySqlRepository = void 0;
const mysql_helper_1 = require("../mysql-helper");
const query_helpers_1 = require("../query-helpers");
class MenuConfigsMySqlRepository {
    // eslint-disable-next-line no-useless-constructor
    constructor(pool) {
        this.pool = pool;
    }
    async loadSpeedOvensConfigs(menuId) {
        const query = (0, query_helpers_1.loadSpeedOvensConfigsQuery)(menuId);
        return await (0, mysql_helper_1.customGet)(this.pool, query);
    }
    async loadTsiConfigs(menuId) {
        const query = (0, query_helpers_1.loadTsiConfigsQuery)(menuId);
        const configsArray = await (0, mysql_helper_1.customGet)(this.pool, query);
        if (configsArray.length === 0)
            return null;
        return configsArray[0];
    }
}
exports.MenuConfigsMySqlRepository = MenuConfigsMySqlRepository;
