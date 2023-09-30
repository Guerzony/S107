"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeAddStepCombiOvenCMAXController = void 0;
const add_step_CombiOvenCMAX_controller_1 = require("../../../../presentation/controller/add-step-CombiOvenCMAX/add-step-CombiOvenCMAX-controller");
const log_controller_decorator_1 = require("../../../decorators/log-controller-decorator");
const log_mysql_repository_1 = require("../../../../infra/db/mysql/log/log-mysql-repository");
const db_add_step_CombiOvenCMAX_factory_1 = require("../../usecases/add-step-CombiOvenCMAX/db-add-step-CombiOvenCMAX-factory");
const add_step_CombiOvenCMAX_validation_factory_1 = require("./add-step-CombiOvenCMAX-validation-factory");
const makeAddStepCombiOvenCMAXController = (pool) => {
    const logMysqlRepository = new log_mysql_repository_1.LogMysqlRepository(pool);
    const addStepCombiOvenCMAXController = new add_step_CombiOvenCMAX_controller_1.AddStepCombiOvenCMAXController((0, add_step_CombiOvenCMAX_validation_factory_1.makeAddStepCombiOvenCMAXValidation)(), (0, db_add_step_CombiOvenCMAX_factory_1.makeDbAddStepCombiOvenCMAX)(pool));
    return new log_controller_decorator_1.LogControllerDecorator(addStepCombiOvenCMAXController, logMysqlRepository);
};
exports.makeAddStepCombiOvenCMAXController = makeAddStepCombiOvenCMAXController;
