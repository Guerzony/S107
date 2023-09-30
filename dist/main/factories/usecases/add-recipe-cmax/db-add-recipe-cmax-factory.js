"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeDbAddRecipeCmax = void 0;
const db_add_recipe_cmax_1 = require("../../../../data/usecases/add-recipe-cmax/db-add-recipe-cmax");
const recipe_mysql_repository_1 = require("../../../../infra/db/mysql/recipe/recipe-mysql-repository");
const makeDbAddRecipeCmax = (pool) => {
    const recipeSqlRepository = new recipe_mysql_repository_1.RecipeMySqlRepository(pool);
    return new db_add_recipe_cmax_1.DbAddRecipeCMAX(recipeSqlRepository);
};
exports.makeDbAddRecipeCmax = makeDbAddRecipeCmax;
