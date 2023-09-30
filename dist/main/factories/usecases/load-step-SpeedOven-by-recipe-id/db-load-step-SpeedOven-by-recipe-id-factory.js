"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeDbLoadStepSpeedOvenByRecipeId = void 0;
const db_load_step_SpeedOven_by_recipe_id_1 = require("../../../../data/usecases/load-step-SpeedOven-by-recipe-id/db-load-step-SpeedOven-by-recipe-id");
const step_SpeedOven_mysql_repository_1 = require("../../../../infra/db/mysql/step/step-SpeedOven-mysql-repository");
const makeDbLoadStepSpeedOvenByRecipeId = (pool) => {
    const stepSpeedOvenMySqlRepository = new step_SpeedOven_mysql_repository_1.StepSpeedOvenMySqlRepository(pool);
    return new db_load_step_SpeedOven_by_recipe_id_1.DbLoadStepsSpeedOvenByRecipeId(stepSpeedOvenMySqlRepository);
};
exports.makeDbLoadStepSpeedOvenByRecipeId = makeDbLoadStepSpeedOvenByRecipeId;
