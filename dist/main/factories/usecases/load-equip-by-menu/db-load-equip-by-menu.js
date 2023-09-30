"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeDbLoadEquipByMenu = void 0;
const db_load_equip_by_menu_1 = require("../../../../data/usecases/load-equip-by-menu/db-load-equip-by-menu");
const equip_mysql_repository_1 = require("../../../../infra/db/mysql/equipment/equip-mysql-repository");
const makeDbLoadEquipByMenu = (pool) => {
    const loadByEquipMenu = new equip_mysql_repository_1.EquipMySqlRepository(pool);
    return new db_load_equip_by_menu_1.DbLoadEquipByMenu(loadByEquipMenu);
};
exports.makeDbLoadEquipByMenu = makeDbLoadEquipByMenu;
