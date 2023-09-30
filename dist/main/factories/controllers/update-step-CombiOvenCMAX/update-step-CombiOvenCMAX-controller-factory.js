"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeUpdateStepCombiOvenCMAXController = void 0;
const update_step_CombiOvenCMAX_body_validation_factory_1 = require("./update-step-CombiOvenCMAX-body-validation-factory");
const update_step_CombiOvenCMAX_params_validation_factory_1 = require("./update-step-CombiOvenCMAX-params-validation-factory");
const db_update_step_CombiOvenCMAX_factory_1 = require("../../usecases/update-step-CombiOvenCMAX/db-update-step-CombiOvenCMAX-factory");
const log_mysql_repository_1 = require("../../../../infra/db/mysql/log/log-mysql-repository");
const update_step_CombiOvenCMAX_controller_1 = require("../../../../presentation/controller/update-step-CombiOvenCMAX/update-step-CombiOvenCMAX-controller");
const log_controller_decorator_1 = require("../../../decorators/log-controller-decorator");
const makeUpdateStepCombiOvenCMAXController = (pool) => {
    const logMysqlRepository = new log_mysql_repository_1.LogMysqlRepository(pool);
    const updateStepCombiOvenCMAXController = new update_step_CombiOvenCMAX_controller_1.UpdateStepCombiOvenCMAXController((0, update_step_CombiOvenCMAX_body_validation_factory_1.makeUpdateStepCombiOvenCMAXBodyValidation)(), (0, update_step_CombiOvenCMAX_params_validation_factory_1.makeUpdateStepCombiOvenCMAXParamsValidation)(), (0, db_update_step_CombiOvenCMAX_factory_1.makeDbUpdateStepCombiOvenCMAX)(pool));
    return new log_controller_decorator_1.LogControllerDecorator(updateStepCombiOvenCMAXController, logMysqlRepository);
};
exports.makeUpdateStepCombiOvenCMAXController = makeUpdateStepCombiOvenCMAXController;
