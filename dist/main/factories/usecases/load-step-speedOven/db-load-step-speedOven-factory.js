"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeStepSpeedOven = void 0;
const db_load_stepSpeedOven_1 = require("../../../../data/usecases/load-step-speedOven/db-load-stepSpeedOven");
const recipe_mysql_repository_1 = require("../../../../infra/db/mysql/recipe/recipe-mysql-repository");
const makeStepSpeedOven = (pool) => {
    const loadStepSpeedOven = new recipe_mysql_repository_1.RecipeMySqlRepository(pool);
    return new db_load_stepSpeedOven_1.DbLoadStepSpeedOven(loadStepSpeedOven);
};
exports.makeStepSpeedOven = makeStepSpeedOven;
