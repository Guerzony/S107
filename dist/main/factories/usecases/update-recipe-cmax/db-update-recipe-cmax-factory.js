"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeDbUpdateRecipeCmax = void 0;
const db_update_recipe_cmax_1 = require("../../../../data/usecases/update-recipe-cmax/db-update-recipe-cmax");
const recipe_mysql_repository_1 = require("../../../../infra/db/mysql/recipe/recipe-mysql-repository");
const makeDbUpdateRecipeCmax = (pool) => {
    const RecipeSqlRepository = new recipe_mysql_repository_1.RecipeMySqlRepository(pool);
    return new db_update_recipe_cmax_1.DbUpdateRecipeCMAX(RecipeSqlRepository);
};
exports.makeDbUpdateRecipeCmax = makeDbUpdateRecipeCmax;
