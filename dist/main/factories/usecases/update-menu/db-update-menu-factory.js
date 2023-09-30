"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeDbUpdateMenu = void 0;
const db_update_menu_1 = require("../../../../data/usecases/update-menu/db-update-menu");
const menu_mysql_repository_1 = require("../../../../infra/db/mysql/menu/menu-mysql-repository");
const makeDbUpdateMenu = (pool) => {
    const menuMySqlRepository = new menu_mysql_repository_1.MenuMySqlRepository(pool);
    return new db_update_menu_1.DbUpdateMenu(menuMySqlRepository);
};
exports.makeDbUpdateMenu = makeDbUpdateMenu;
