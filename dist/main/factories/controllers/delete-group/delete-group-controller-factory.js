"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeDeleteGroupController = void 0;
const delete_group_controller_1 = require("../../../../presentation/controller/delete-group/delete-group-controller");
const log_controller_decorator_1 = require("../../../decorators/log-controller-decorator");
const log_mysql_repository_1 = require("../../../../infra/db/mysql/log/log-mysql-repository");
const delete_group_validation_factory_1 = require("./delete-group-validation-factory");
const db_delete_group_factory_1 = require("../../usecases/delete-group/db-delete-group-factory");
const makeDeleteGroupController = (pool) => {
    const logMysqlRepository = new log_mysql_repository_1.LogMysqlRepository(pool);
    const deleteGroupController = new delete_group_controller_1.DeleteGroupController((0, delete_group_validation_factory_1.makeDeleteGroupValidation)(), (0, db_delete_group_factory_1.makeDbDeleteGroup)(pool));
    return new log_controller_decorator_1.LogControllerDecorator(deleteGroupController, logMysqlRepository);
};
exports.makeDeleteGroupController = makeDeleteGroupController;
