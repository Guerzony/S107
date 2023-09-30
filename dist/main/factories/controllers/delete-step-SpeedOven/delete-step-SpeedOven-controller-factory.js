"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeDeleteStepSpeedOvenController = void 0;
const log_controller_decorator_1 = require("../../../decorators/log-controller-decorator");
const log_mysql_repository_1 = require("../../../../infra/db/mysql/log/log-mysql-repository");
const delete_step_SpeedOven_validation_factory_1 = require("./delete-step-SpeedOven-validation-factory");
const delete_step_SpeedOven_controller_1 = require("../../../../presentation/controller/delete-step-SpeedOven/delete-step-SpeedOven-controller");
const db_delete_step_SpeedOven_factory_1 = require("../../usecases/delete-step-SpeedOven/db-delete-step-SpeedOven-factory");
const makeDeleteStepSpeedOvenController = (pool) => {
    const logMysqlRepository = new log_mysql_repository_1.LogMysqlRepository(pool);
    const stepSpeedOvenController = new delete_step_SpeedOven_controller_1.DeleteStepSpeedOvenController((0, delete_step_SpeedOven_validation_factory_1.makeDeleteStepSpeedOvenValidation)(), (0, db_delete_step_SpeedOven_factory_1.makeDbDeleteStepSpeedOven)(pool));
    return new log_controller_decorator_1.LogControllerDecorator(stepSpeedOvenController, logMysqlRepository);
};
exports.makeDeleteStepSpeedOvenController = makeDeleteStepSpeedOvenController;
