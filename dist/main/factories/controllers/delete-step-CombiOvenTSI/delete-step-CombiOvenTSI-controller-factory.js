"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeDeleteStepCombiOvenTSIController = void 0;
const log_controller_decorator_1 = require("../../../decorators/log-controller-decorator");
const log_mysql_repository_1 = require("../../../../infra/db/mysql/log/log-mysql-repository");
const delete_step_CombiOvenTSI_validation_factory_1 = require("./delete-step-CombiOvenTSI-validation-factory");
const delete_step_CombiOvenTSI_controller_1 = require("../../../../presentation/controller/delete-step-CombiOvenTSI/delete-step-CombiOvenTSI-controller");
const db_delete_step_CombiOvenTSI_factory_1 = require("../../usecases/delete-step-CombiOvenTSI/db-delete-step-CombiOvenTSI-factory");
const makeDeleteStepCombiOvenTSIController = (pool) => {
    const logMysqlRepository = new log_mysql_repository_1.LogMysqlRepository(pool);
    const stepCombiOvenTSIController = new delete_step_CombiOvenTSI_controller_1.DeleteStepCombiOvenTSIController((0, delete_step_CombiOvenTSI_validation_factory_1.makeDeleteStepCombiOvenTSIValidation)(), (0, db_delete_step_CombiOvenTSI_factory_1.makeDbDeleteStepCombiOvenTSI)(pool));
    return new log_controller_decorator_1.LogControllerDecorator(stepCombiOvenTSIController, logMysqlRepository);
};
exports.makeDeleteStepCombiOvenTSIController = makeDeleteStepCombiOvenTSIController;
