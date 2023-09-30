"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeLoadMenuById = void 0;
const menu_mysql_repository_1 = require("../../../../infra/db/mysql/menu/menu-mysql-repository");
const db_load_menu_1 = require("../../../../data/usecases/load-menu-by-id/db-load-menu");
const makeLoadMenuById = (pool) => {
    const loadMenu = new menu_mysql_repository_1.MenuMySqlRepository(pool);
    return new db_load_menu_1.DbLoadMenu(loadMenu);
};
exports.makeLoadMenuById = makeLoadMenuById;
