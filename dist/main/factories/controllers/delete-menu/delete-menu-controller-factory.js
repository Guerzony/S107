"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeDeleteMenuController = void 0;
const log_controller_decorator_1 = require("../../../decorators/log-controller-decorator");
const log_mysql_repository_1 = require("../../../../infra/db/mysql/log/log-mysql-repository");
const delete_menu_validation_factory_1 = require("./delete-menu-validation-factory");
const db_delete_menu_factory_1 = require("../../usecases/delete-menu/db-delete-menu-factory");
const delete_menu_controller_1 = require("../../../../presentation/controller/delete-menu/delete-menu-controller");
const makeDeleteMenuController = (pool) => {
    const logMysqlRepository = new log_mysql_repository_1.LogMysqlRepository(pool);
    const deleteMenuController = new delete_menu_controller_1.DeleteMenuController((0, delete_menu_validation_factory_1.makeDeleteMenuValidation)(), (0, db_delete_menu_factory_1.makeDbDeleteMenu)(pool));
    return new log_controller_decorator_1.LogControllerDecorator(deleteMenuController, logMysqlRepository);
};
exports.makeDeleteMenuController = makeDeleteMenuController;
