"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeUpdateStepSpeedOvenController = void 0;
const update_step_SpeedOven_body_validation_factory_1 = require("./update-step-SpeedOven-body-validation-factory");
const update_step_SpeedOven_params_validation_factory_1 = require("./update-step-SpeedOven-params-validation-factory");
const db_update_step_SpeedOven_factory_1 = require("../../usecases/update-step-SpeedOven/db-update-step-SpeedOven-factory");
const log_mysql_repository_1 = require("../../../../infra/db/mysql/log/log-mysql-repository");
const update_step_SpeedOven_controller_1 = require("../../../../presentation/controller/update-step-SpeedOven/update-step-SpeedOven-controller");
const log_controller_decorator_1 = require("../../../decorators/log-controller-decorator");
const makeUpdateStepSpeedOvenController = (pool) => {
    const logMysqlRepository = new log_mysql_repository_1.LogMysqlRepository(pool);
    const updateStepSpeedOvenController = new update_step_SpeedOven_controller_1.UpdateStepSpeedOvenController((0, update_step_SpeedOven_body_validation_factory_1.makeUpdateStepSpeedOvenBodyValidation)(), (0, update_step_SpeedOven_params_validation_factory_1.makeUpdateStepSpeedOvenParamsValidation)(), (0, db_update_step_SpeedOven_factory_1.makeDbUpdateStepSpeedOven)(pool));
    return new log_controller_decorator_1.LogControllerDecorator(updateStepSpeedOvenController, logMysqlRepository);
};
exports.makeUpdateStepSpeedOvenController = makeUpdateStepSpeedOvenController;
