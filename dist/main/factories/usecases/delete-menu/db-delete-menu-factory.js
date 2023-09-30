"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeDbDeleteMenu = void 0;
const db_delete_menu_1 = require("../../../../data/usecases/delete-menu/db-delete-menu");
const menu_mysql_repository_1 = require("../../../../infra/db/mysql/menu/menu-mysql-repository");
const makeDbDeleteMenu = (pool) => {
    const menuMySqlRepository = new menu_mysql_repository_1.MenuMySqlRepository(pool);
    return new db_delete_menu_1.DbDeleteMenu(menuMySqlRepository);
};
exports.makeDbDeleteMenu = makeDbDeleteMenu;
