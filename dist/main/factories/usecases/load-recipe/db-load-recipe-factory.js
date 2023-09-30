"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeLoadRecipe = void 0;
const db_load_recipe_1 = require("../../../../data/usecases/load-recipe/db-load-recipe");
const recipe_mysql_repository_1 = require("../../../../infra/db/mysql/recipe/recipe-mysql-repository");
const makeLoadRecipe = (pool) => {
    const loadRecipe = new recipe_mysql_repository_1.RecipeMySqlRepository(pool);
    return new db_load_recipe_1.DbLoadRecipe(loadRecipe);
};
exports.makeLoadRecipe = makeLoadRecipe;
