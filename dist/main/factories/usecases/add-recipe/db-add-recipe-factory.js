"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeDbAddRecipe = void 0;
const db_add_recipe_1 = require("../../../../data/usecases/add-recipe/db-add-recipe");
const recipe_mysql_repository_1 = require("../../../../infra/db/mysql/recipe/recipe-mysql-repository");
const makeDbAddRecipe = (pool) => {
    const recipeSqlRepository = new recipe_mysql_repository_1.RecipeMySqlRepository(pool);
    return new db_add_recipe_1.DbAddRecipe(recipeSqlRepository);
};
exports.makeDbAddRecipe = makeDbAddRecipe;
