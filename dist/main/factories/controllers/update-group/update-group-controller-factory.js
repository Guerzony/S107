"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeUpdateGroupController = void 0;
const update_group_controller_1 = require("../../../../presentation/controller/update-group/update-group-controller");
const log_controller_decorator_1 = require("../../../decorators/log-controller-decorator");
const log_mysql_repository_1 = require("../../../../infra/db/mysql/log/log-mysql-repository");
const Update_group_validation_factory_1 = require("./Update-group-validation-factory");
const db_update_group_factory_1 = require("../../usecases/update-group/db-update-group-factory");
const makeUpdateGroupController = (pool) => {
    const logMysqlRepository = new log_mysql_repository_1.LogMysqlRepository(pool);
    const updateGroupController = new update_group_controller_1.UpdateGroupController((0, Update_group_validation_factory_1.makeUpdateGroupValidation)(), (0, db_update_group_factory_1.makeDbUpdateGroup)(pool));
    return new log_controller_decorator_1.LogControllerDecorator(updateGroupController, logMysqlRepository);
};
exports.makeUpdateGroupController = makeUpdateGroupController;
