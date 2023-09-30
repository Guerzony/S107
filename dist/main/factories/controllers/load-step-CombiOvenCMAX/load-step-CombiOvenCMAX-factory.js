"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeLoadStepCombiOvenCMAXController = void 0;
const log_mysql_repository_1 = require("../../../../infra/db/mysql/log/log-mysql-repository");
const load_step_CombiOvenCMAX_controller_1 = require("../../../../presentation/controller/load-step-CombiOvenCMAX/load-step-CombiOvenCMAX-controller");
const log_controller_decorator_1 = require("../../../decorators/log-controller-decorator");
const db_load_step_CombiOvenCMAX_factory_1 = require("../../usecases/load-step-CombiOvenCMAX/db-load-step-CombiOvenCMAX-factory");
const load_step_CombiOvenCMAX_validation_factory_1 = require("./load-step-CombiOvenCMAX-validation-factory");
const makeLoadStepCombiOvenCMAXController = (pool) => {
    const logMysqlRepository = new log_mysql_repository_1.LogMysqlRepository(pool);
    const loadStepsCombiOvenCMAXByRecipeIdController = new load_step_CombiOvenCMAX_controller_1.LoadStepCombiOvenCMAXController((0, db_load_step_CombiOvenCMAX_factory_1.makeDbLoadStepCombiOvenCMAX)(pool), (0, load_step_CombiOvenCMAX_validation_factory_1.makeLoadStepsCombiOvenCMAXByRecipeIdValidation)());
    return new log_controller_decorator_1.LogControllerDecorator(loadStepsCombiOvenCMAXByRecipeIdController, logMysqlRepository);
};
exports.makeLoadStepCombiOvenCMAXController = makeLoadStepCombiOvenCMAXController;
