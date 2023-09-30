"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeDbLoadCMaxRecipesFactory = void 0;
const usecases_1 = require("../../../../data/usecases");
const mysql_1 = require("../../../../infra/db/mysql");
const makeDbLoadCMaxRecipesFactory = (pool) => {
    const repository = new mysql_1.RecipeMySqlRepository(pool);
    return new usecases_1.DbLoadCMaxRecipes(repository);
};
exports.makeDbLoadCMaxRecipesFactory = makeDbLoadCMaxRecipesFactory;
