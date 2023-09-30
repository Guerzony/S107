"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeLoadCompanyMenu = void 0;
const menu_mysql_repository_1 = require("../../../../infra/db/mysql/menu/menu-mysql-repository");
const db_load_company_menu_1 = require("../../../../data/usecases/load-company-menu/db-load-company-menu");
const makeLoadCompanyMenu = (pool) => {
    const loadMenu = new menu_mysql_repository_1.MenuMySqlRepository(pool);
    return new db_load_company_menu_1.DbLoadCompanyMenu(loadMenu);
};
exports.makeLoadCompanyMenu = makeLoadCompanyMenu;
