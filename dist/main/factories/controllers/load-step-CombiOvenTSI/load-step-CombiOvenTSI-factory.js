"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeLoadStepCombiOvenTSIController = void 0;
const log_mysql_repository_1 = require("../../../../infra/db/mysql/log/log-mysql-repository");
const load_step_CombiOvenTSI_controller_1 = require("../../../../presentation/controller/load-step-CombiOvenTSI/load-step-CombiOvenTSI-controller");
const log_controller_decorator_1 = require("../../../decorators/log-controller-decorator");
const db_load_step_CombiOvenTSI_factory_1 = require("../../usecases/load-step-CombiOvenTSI/db-load-step-CombiOvenTSI-factory");
const load_step_CombiOvenTSI_validation_factory_1 = require("./load-step-CombiOvenTSI-validation-factory");
const makeLoadStepCombiOvenTSIController = (pool) => {
    const logMysqlRepository = new log_mysql_repository_1.LogMysqlRepository(pool);
    const loadStepsCombiOvenTSIByRecipeIdController = new load_step_CombiOvenTSI_controller_1.LoadStepCombiOvenTSIController((0, db_load_step_CombiOvenTSI_factory_1.makeDbLoadStepCombiOvenTSI)(pool), (0, load_step_CombiOvenTSI_validation_factory_1.makeLoadStepsCombiOvenTSIByRecipeIdValidation)());
    return new log_controller_decorator_1.LogControllerDecorator(loadStepsCombiOvenTSIByRecipeIdController, logMysqlRepository);
};
exports.makeLoadStepCombiOvenTSIController = makeLoadStepCombiOvenTSIController;
