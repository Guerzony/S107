"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeDeleteStepCombiOvenCMAXController = void 0;
const log_controller_decorator_1 = require("../../../decorators/log-controller-decorator");
const log_mysql_repository_1 = require("../../../../infra/db/mysql/log/log-mysql-repository");
const delete_step_CombiOvenCMAX_validation_factory_1 = require("./delete-step-CombiOvenCMAX-validation-factory");
const delete_step_CombiOvenCMAX_controller_1 = require("../../../../presentation/controller/delete-step-CombiOvenCMAX/delete-step-CombiOvenCMAX-controller");
const db_delete_step_CombiOvenCMAX_factory_1 = require("../../usecases/delete-step-CombiOvenCMAX/db-delete-step-CombiOvenCMAX-factory");
const makeDeleteStepCombiOvenCMAXController = (pool) => {
    const logMysqlRepository = new log_mysql_repository_1.LogMysqlRepository(pool);
    const stepCombiOvenCMAXController = new delete_step_CombiOvenCMAX_controller_1.DeleteStepCombiOvenCMAXController((0, delete_step_CombiOvenCMAX_validation_factory_1.makeDeleteStepCombiOvenCMAXValidation)(), (0, db_delete_step_CombiOvenCMAX_factory_1.makeDbDeleteStepCombiOvenCMAX)(pool));
    return new log_controller_decorator_1.LogControllerDecorator(stepCombiOvenCMAXController, logMysqlRepository);
};
exports.makeDeleteStepCombiOvenCMAXController = makeDeleteStepCombiOvenCMAXController;
