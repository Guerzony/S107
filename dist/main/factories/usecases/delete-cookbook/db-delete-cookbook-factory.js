"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeDeleteCookbook = void 0;
const db_delete_cookbook_1 = require("../../../../data/usecases/delete-cookbook/db-delete-cookbook");
const cookbook_mysql_repository_1 = require("../../../../infra/db/mysql/cookbook/cookbook-mysql-repository");
const recipe_mysql_repository_1 = require("../../../../infra/db/mysql/recipe/recipe-mysql-repository");
const makeDeleteCookbook = (pool) => {
    const cookbookSqlRepository = new cookbook_mysql_repository_1.CookbookMySqlRepository(pool);
    const recipeSqlRepository = new recipe_mysql_repository_1.RecipeMySqlRepository(pool);
    return new db_delete_cookbook_1.DbDeleteCookbook(cookbookSqlRepository, recipeSqlRepository, recipeSqlRepository, recipeSqlRepository);
};
exports.makeDeleteCookbook = makeDeleteCookbook;
