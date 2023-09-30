"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeLoadGroupController = void 0;
const log_mysql_repository_1 = require("../../../../infra/db/mysql/log/log-mysql-repository");
const load_group_validation_factory_1 = require("./load-group-validation-factory");
const log_controller_decorator_1 = require("../../../decorators/log-controller-decorator");
const db_load_group_factory_1 = require("../../usecases/load-group/db-load-group-factory");
const load_group_controller_1 = require("../../../../presentation/controller/load-group-by-menu-id/load-group-controller");
const makeLoadGroupController = (pool) => {
    const logMysqlRepository = new log_mysql_repository_1.LogMysqlRepository(pool);
    const loadMenuController = new load_group_controller_1.LoadGroupController((0, load_group_validation_factory_1.makeLoadGroupValidation)(), (0, db_load_group_factory_1.makeLoadGroup)(pool));
    return new log_controller_decorator_1.LogControllerDecorator(loadMenuController, logMysqlRepository);
};
exports.makeLoadGroupController = makeLoadGroupController;
