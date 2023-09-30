"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeLoadCompanyMenuConfigs = void 0;
const menu_mysql_repository_1 = require("../../../../infra/db/mysql/menu/menu-mysql-repository");
const db_load_menu_configs_1 = require("../../../../data/usecases/load-menu-configs/db-load-menu-configs");
const makeLoadCompanyMenuConfigs = (pool) => {
    const loadMenuConfig = new menu_mysql_repository_1.MenuMySqlRepository(pool);
    return new db_load_menu_configs_1.DbLoadCompanyMenuConfigs(loadMenuConfig);
};
exports.makeLoadCompanyMenuConfigs = makeLoadCompanyMenuConfigs;
