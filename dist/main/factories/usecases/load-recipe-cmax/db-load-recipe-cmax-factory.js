"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeLoadRecipeCMAX = void 0;
const recipe_mysql_repository_1 = require("../../../../infra/db/mysql/recipe/recipe-mysql-repository");
const db_load_recipe_cmax_1 = require("../../../../data/usecases/load-recipeCMAX/db-load-recipe-cmax");
const makeLoadRecipeCMAX = (pool) => {
    const loadRecipeCmax = new recipe_mysql_repository_1.RecipeMySqlRepository(pool);
    return new db_load_recipe_cmax_1.DbLoadRecipeCMAX(loadRecipeCmax);
};
exports.makeLoadRecipeCMAX = makeLoadRecipeCMAX;
