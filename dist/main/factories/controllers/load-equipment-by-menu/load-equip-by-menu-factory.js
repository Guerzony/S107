"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeLoadEquipByMenuController = void 0;
const log_mysql_repository_1 = require("../../../../infra/db/mysql/log/log-mysql-repository");
const load_equip_by_menu_validation_factory_1 = require("./load-equip-by-menu-validation-factory");
const log_controller_decorator_1 = require("../../../decorators/log-controller-decorator");
const load_equip_by_menu_controller_1 = require("../../../../presentation/controller/load-equip-by-menu/load-equip-by-menu-controller");
const db_load_equip_by_menu_1 = require("../../usecases/load-equip-by-menu/db-load-equip-by-menu");
const makeLoadEquipByMenuController = (pool) => {
    const logMysqlRepository = new log_mysql_repository_1.LogMysqlRepository(pool);
    const loadEquipByMenuController = new load_equip_by_menu_controller_1.LoadEquipByMenuController((0, load_equip_by_menu_validation_factory_1.makeLoadEquipByMenuValidation)(), (0, db_load_equip_by_menu_1.makeDbLoadEquipByMenu)(pool));
    return new log_controller_decorator_1.LogControllerDecorator(loadEquipByMenuController, logMysqlRepository);
};
exports.makeLoadEquipByMenuController = makeLoadEquipByMenuController;
