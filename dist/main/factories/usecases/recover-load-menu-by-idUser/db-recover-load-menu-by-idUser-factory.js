"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeRecoverLoadMenuByIdUser = void 0;
const db_recover_load_menu_1 = require("../../../../data/usecases/recover-load-menus/db-recover-load-menu");
const user_mysql_repository_1 = require("../../../../infra/db/mysql/recover-user/user-mysql-repository");
const makeRecoverLoadMenuByIdUser = () => {
    const menuSql = new user_mysql_repository_1.RecoverUserMySqlRepository();
    return new db_recover_load_menu_1.DbRecoverLoadMenu(menuSql, menuSql, menuSql, menuSql, menuSql, menuSql, menuSql, menuSql);
};
exports.makeRecoverLoadMenuByIdUser = makeRecoverLoadMenuByIdUser;
