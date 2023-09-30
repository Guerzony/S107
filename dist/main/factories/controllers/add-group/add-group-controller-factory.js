"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeAddGroupController = void 0;
const add_group_controller_1 = require("../../../../presentation/controller/add-group/add-group-controller");
const log_controller_decorator_1 = require("../../../decorators/log-controller-decorator");
const log_mysql_repository_1 = require("../../../../infra/db/mysql/log/log-mysql-repository");
const add_group_validation_factory_1 = require("./add-group-validation-factory");
const db_add_group_factory_1 = require("../../usecases/add-group/db-add-group-factory");
const makeAddGroupController = (pool) => {
    const logMysqlRepository = new log_mysql_repository_1.LogMysqlRepository(pool);
    const addGroupController = new add_group_controller_1.AddGroupController((0, add_group_validation_factory_1.makeAddGroupValidation)(), (0, db_add_group_factory_1.makeDbAddGroup)(pool));
    return new log_controller_decorator_1.LogControllerDecorator(addGroupController, logMysqlRepository);
};
exports.makeAddGroupController = makeAddGroupController;
