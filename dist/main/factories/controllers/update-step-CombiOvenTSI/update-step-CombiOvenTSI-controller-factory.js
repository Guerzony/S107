"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeUpdateStepCombiOvenTSIController = void 0;
const update_step_CombiOvenTSI_body_validation_factory_1 = require("./update-step-CombiOvenTSI-body-validation-factory");
const update_step_CombiOvenTSI_params_validation_factory_1 = require("./update-step-CombiOvenTSI-params-validation-factory");
const db_update_step_CombiOvenTSI_factory_1 = require("../../usecases/update-step-CombiOvenTSI/db-update-step-CombiOvenTSI-factory");
const log_mysql_repository_1 = require("../../../../infra/db/mysql/log/log-mysql-repository");
const update_step_CombiOvenTSI_controller_1 = require("../../../../presentation/controller/update-step-CombiOvenTSI/update-step-CombiOvenTSI-controller");
const log_controller_decorator_1 = require("../../../decorators/log-controller-decorator");
const makeUpdateStepCombiOvenTSIController = (pool) => {
    const logMysqlRepository = new log_mysql_repository_1.LogMysqlRepository(pool);
    const updateStepCombiOvenTSIController = new update_step_CombiOvenTSI_controller_1.UpdateStepCombiOvenTSIController((0, update_step_CombiOvenTSI_body_validation_factory_1.makeUpdateStepCombiOvenTSIBodyValidation)(), (0, update_step_CombiOvenTSI_params_validation_factory_1.makeUpdateStepCombiOvenTSIParamsValidation)(), (0, db_update_step_CombiOvenTSI_factory_1.makeDbUpdateStepCombiOvenTSI)(pool));
    return new log_controller_decorator_1.LogControllerDecorator(updateStepCombiOvenTSIController, logMysqlRepository);
};
exports.makeUpdateStepCombiOvenTSIController = makeUpdateStepCombiOvenTSIController;
