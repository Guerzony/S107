"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeAddStepCombiOvenTSIController = void 0;
const add_step_CombiOvenTSI_controller_1 = require("../../../../presentation/controller/add-step-CombiOvenTSI/add-step-CombiOvenTSI-controller");
const log_controller_decorator_1 = require("../../../decorators/log-controller-decorator");
const log_mysql_repository_1 = require("../../../../infra/db/mysql/log/log-mysql-repository");
const db_add_step_CombiOvenTSI_factory_1 = require("../../usecases/add-step-CombiOvenTSI/db-add-step-CombiOvenTSI-factory");
const add_step_CombiOvenTSI_validation_factory_1 = require("./add-step-CombiOvenTSI-validation-factory");
const makeAddStepCombiOvenTSIController = (pool) => {
    const logMysqlRepository = new log_mysql_repository_1.LogMysqlRepository(pool);
    const addStepCombiOvenTSIController = new add_step_CombiOvenTSI_controller_1.AddStepCombiOvenTSIController((0, add_step_CombiOvenTSI_validation_factory_1.makeAddStepCombiOvenTSIValidation)(), (0, db_add_step_CombiOvenTSI_factory_1.makeDbAddStepCombiOvenTSI)(pool));
    return new log_controller_decorator_1.LogControllerDecorator(addStepCombiOvenTSIController, logMysqlRepository);
};
exports.makeAddStepCombiOvenTSIController = makeAddStepCombiOvenTSIController;
