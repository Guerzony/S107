"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeUpdateMenuController = void 0;
const log_controller_decorator_1 = require("../../../decorators/log-controller-decorator");
const log_mysql_repository_1 = require("../../../../infra/db/mysql/log/log-mysql-repository");
const Update_menu_configs_validation_factory_1 = require("./Update-menu-configs-validation-factory");
const Update_menu_validation_factory_1 = require("./Update-menu-validation-factory");
const update_menu_controller_1 = require("../../../../presentation/controller/update-menu/update-menu-controller");
const db_update_menu_factory_1 = require("../../usecases/update-menu/db-update-menu-factory");
const db_Update_menu_factory_1 = require("../../usecases/update-menu-configs/db-Update-menu-factory");
const makeUpdateMenuController = (pool) => {
    const logMysqlRepository = new log_mysql_repository_1.LogMysqlRepository(pool);
    const updateMenuController = new update_menu_controller_1.UpdateMenuController((0, Update_menu_validation_factory_1.makeUpdateMenuValidation)(), (0, Update_menu_configs_validation_factory_1.makeUpdateMenuConfigsValidation)(), (0, db_update_menu_factory_1.makeDbUpdateMenu)(pool), (0, db_Update_menu_factory_1.makeDbUpdateMenuConfigs)(pool));
    return new log_controller_decorator_1.LogControllerDecorator(updateMenuController, logMysqlRepository);
};
exports.makeUpdateMenuController = makeUpdateMenuController;
