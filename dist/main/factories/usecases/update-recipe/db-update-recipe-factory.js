"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeDbUpdateRecipe = void 0;
const db_update_recipe_1 = require("../../../../data/usecases/update-recipe/db-update-recipe");
const recipe_mysql_repository_1 = require("../../../../infra/db/mysql/recipe/recipe-mysql-repository");
const makeDbUpdateRecipe = (pool) => {
    const RecipeSqlRepository = new recipe_mysql_repository_1.RecipeMySqlRepository(pool);
    return new db_update_recipe_1.DbUpdateRecipe(RecipeSqlRepository);
};
exports.makeDbUpdateRecipe = makeDbUpdateRecipe;
