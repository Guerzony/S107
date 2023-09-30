"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeAddStepSpeedOvenController = void 0;
const add_step_SpeedOven_controller_1 = require("../../../../presentation/controller/add-step-SpeedOven/add-step-SpeedOven-controller");
const log_controller_decorator_1 = require("../../../decorators/log-controller-decorator");
const log_mysql_repository_1 = require("../../../../infra/db/mysql/log/log-mysql-repository");
const db_add_step_SpeedOven_factory_1 = require("../../usecases/add-step-SpeedOven/db-add-step-SpeedOven-factory");
const add_step_SpeedOven_validation_factory_1 = require("./add-step-SpeedOven-validation-factory");
const makeAddStepSpeedOvenController = (pool) => {
    const logMysqlRepository = new log_mysql_repository_1.LogMysqlRepository(pool);
    const addStepSpeedOvenController = new add_step_SpeedOven_controller_1.AddStepSpeedOvenController((0, add_step_SpeedOven_validation_factory_1.makeAddStepSpeedOvenValidation)(), (0, db_add_step_SpeedOven_factory_1.makeDbAddStepSpeedOven)(pool));
    return new log_controller_decorator_1.LogControllerDecorator(addStepSpeedOvenController, logMysqlRepository);
};
exports.makeAddStepSpeedOvenController = makeAddStepSpeedOvenController;
