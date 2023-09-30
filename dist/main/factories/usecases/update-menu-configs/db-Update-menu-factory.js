"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeDbUpdateMenuConfigs = void 0;
const db_update_menu_cofigs_1 = require("../../../../data/usecases/update-menu-configs/db-update-menu-cofigs");
const menu_mysql_repository_1 = require("../../../../infra/db/mysql/menu/menu-mysql-repository");
const makeDbUpdateMenuConfigs = (pool) => {
    const menuMySqlRepository = new menu_mysql_repository_1.MenuMySqlRepository(pool);
    return new db_update_menu_cofigs_1.DbUpdateMenuConfigs(menuMySqlRepository);
};
exports.makeDbUpdateMenuConfigs = makeDbUpdateMenuConfigs;
