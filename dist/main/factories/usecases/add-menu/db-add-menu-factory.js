"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeDbAddMenu = void 0;
const db_add_menu_1 = require("../../../../data/usecases/add-menu/db-add-menu");
const menu_mysql_repository_1 = require("../../../../infra/db/mysql/menu/menu-mysql-repository");
const makeDbAddMenu = (pool) => {
    const menuMySqlRepository = new menu_mysql_repository_1.MenuMySqlRepository(pool);
    return new db_add_menu_1.DbAddMenu(menuMySqlRepository);
};
exports.makeDbAddMenu = makeDbAddMenu;
