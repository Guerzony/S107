"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeLoadStepsSpeedOvenByRecipeIdController = void 0;
const log_mysql_repository_1 = require("../../../../infra/db/mysql/log/log-mysql-repository");
const load_step_SpeedOven_by_recipe_id_controller_1 = require("../../../../presentation/controller/load-step-by-recipe-id/load-step-SpeedOven-by-recipe-id-controller");
const log_controller_decorator_1 = require("../../../decorators/log-controller-decorator");
const db_load_step_SpeedOven_by_recipe_id_factory_1 = require("../../usecases/load-step-SpeedOven-by-recipe-id/db-load-step-SpeedOven-by-recipe-id-factory");
const load_steps_SpeedOven_by_recipe_id_validation_factory_1 = require("./load-steps-SpeedOven-by-recipe-id-validation-factory");
const makeLoadStepsSpeedOvenByRecipeIdController = (pool) => {
    const logMysqlRepository = new log_mysql_repository_1.LogMysqlRepository(pool);
    const loadStepsSpeedOvenByRecipeIdController = new load_step_SpeedOven_by_recipe_id_controller_1.LoadStepsSpeedOvenByRecipeIdController((0, db_load_step_SpeedOven_by_recipe_id_factory_1.makeDbLoadStepSpeedOvenByRecipeId)(pool), (0, load_steps_SpeedOven_by_recipe_id_validation_factory_1.makeLoadStepsSpeedOvenByRecipeIdValidation)());
    return new log_controller_decorator_1.LogControllerDecorator(loadStepsSpeedOvenByRecipeIdController, logMysqlRepository);
};
exports.makeLoadStepsSpeedOvenByRecipeIdController = makeLoadStepsSpeedOvenByRecipeIdController;
