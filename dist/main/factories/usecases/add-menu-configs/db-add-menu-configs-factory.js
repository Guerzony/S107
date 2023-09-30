"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeDbAddMenuConfigs = void 0;
const db_menu_configs_1 = require("../../../../data/usecases/add-menu-configs/db-menu-configs");
const menu_mysql_repository_1 = require("../../../../infra/db/mysql/menu/menu-mysql-repository");
const makeDbAddMenuConfigs = (pool) => {
    const menuMySqlRepository = new menu_mysql_repository_1.MenuMySqlRepository(pool);
    return new db_menu_configs_1.DbAddMenuConfigs(menuMySqlRepository);
};
exports.makeDbAddMenuConfigs = makeDbAddMenuConfigs;
