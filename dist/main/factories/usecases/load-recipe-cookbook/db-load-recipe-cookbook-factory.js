"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeLoadRecipeCookbook = void 0;
const db_load_cookbook_1 = require("../../../../data/usecases/load-cookbook/db-load-cookbook");
const cookbook_mysql_repository_1 = require("../../../../infra/db/mysql/cookbook/cookbook-mysql-repository");
const makeLoadRecipeCookbook = (pool) => {
    const loadRecipeCookbook = new cookbook_mysql_repository_1.CookbookMySqlRepository(pool);
    return new db_load_cookbook_1.DbLoadRecipeCookbook(loadRecipeCookbook);
};
exports.makeLoadRecipeCookbook = makeLoadRecipeCookbook;
