"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeAddMenuController = void 0;
const add_menu_controller_1 = require("../../../../presentation/controller/add-menu/add-menu-controller");
const log_controller_decorator_1 = require("../../../decorators/log-controller-decorator");
const log_mysql_repository_1 = require("../../../../infra/db/mysql/log/log-mysql-repository");
const add_menu_validation_factory_1 = require("./add-menu-validation-factory");
const add_menu_configs_validation_factory_1 = require("./add-menu-configs-validation-factory");
const db_add_menu_factory_1 = require("../../usecases/add-menu/db-add-menu-factory");
const db_add_menu_configs_factory_1 = require("../../usecases/add-menu-configs/db-add-menu-configs-factory");
const makeAddMenuController = (pool) => {
    const logMysqlRepository = new log_mysql_repository_1.LogMysqlRepository(pool);
    const addMenuController = new add_menu_controller_1.AddMenuController((0, add_menu_validation_factory_1.makeAddMenuValidation)(), (0, add_menu_configs_validation_factory_1.makeAddMenuConfigsValidation)(), (0, db_add_menu_factory_1.makeDbAddMenu)(pool), (0, db_add_menu_configs_factory_1.makeDbAddMenuConfigs)(pool));
    return new log_controller_decorator_1.LogControllerDecorator(addMenuController, logMysqlRepository);
};
exports.makeAddMenuController = makeAddMenuController;
