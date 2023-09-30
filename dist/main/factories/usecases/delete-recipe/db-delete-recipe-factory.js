"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeDbDeleteRecipe = void 0;
const db_delete_recipe_1 = require("../../../../data/usecases/delete-recipe/db-delete-recipe");
const recipe_mysql_repository_1 = require("../../../../infra/db/mysql/recipe/recipe-mysql-repository");
const makeDbDeleteRecipe = (pool) => {
    const recipeSqlRepository = new recipe_mysql_repository_1.RecipeMySqlRepository(pool);
    return new db_delete_recipe_1.DbDeleteRecipe(recipeSqlRepository, recipeSqlRepository, recipeSqlRepository, recipeSqlRepository, recipeSqlRepository);
};
exports.makeDbDeleteRecipe = makeDbDeleteRecipe;
