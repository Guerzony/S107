"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeDbLoadSpeedOvensRecipesFactory = void 0;
const usecases_1 = require("../../../../data/usecases");
const mysql_1 = require("../../../../infra/db/mysql");
const makeDbLoadSpeedOvensRecipesFactory = (pool) => {
    const repository = new mysql_1.RecipeMySqlRepository(pool);
    return new usecases_1.DbLoadSpeedOvensRecipes(repository);
};
exports.makeDbLoadSpeedOvensRecipesFactory = makeDbLoadSpeedOvensRecipesFactory;
