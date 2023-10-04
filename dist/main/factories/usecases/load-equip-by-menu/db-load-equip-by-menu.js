"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeDbLoadUserByMenu = void 0;
const db_load_equip_by_menu_1 = require("../../../../data/usecases/load-equip-by-menu/db-load-equip-by-menu");
const equip_mysql_repository_1 = require("../../../../infra/db/mysql/user/equip-mysql-repository");
const makeDbLoadUserByMenu = (pool) => {
    const loadByUserMenu = new equip_mysql_repository_1.UserMySqlRepository(pool);
    return new db_load_equip_by_menu_1.DbLoadUserByMenu(loadByUserMenu);
};
exports.makeDbLoadUserByMenu = makeDbLoadUserByMenu;
