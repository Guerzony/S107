"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeLoadGroup = void 0;
const group_mysql_repository_1 = require("../../../../infra/db/mysql/group/group-mysql-repository");
const db_load_menu_group_1 = require("../../../../data/usecases/load-menu-group/db-load-menu-group");
const makeLoadGroup = (pool) => {
    const loadMenu = new group_mysql_repository_1.GroupMySqlRepository(pool);
    return new db_load_menu_group_1.DbLoadMenuGroup(loadMenu);
};
exports.makeLoadGroup = makeLoadGroup;
