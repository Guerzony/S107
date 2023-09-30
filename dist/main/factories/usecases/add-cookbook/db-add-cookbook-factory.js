"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeDbAddCookbook = void 0;
const cookbook_mysql_repository_1 = require("../../../../infra/db/mysql/cookbook/cookbook-mysql-repository");
const db_add_cookbook_1 = require("../../../../data/usecases/add-cookbook/db-add-cookbook");
const makeDbAddCookbook = (pool) => {
    const repository = new cookbook_mysql_repository_1.CookbookMySqlRepository(pool);
    return new db_add_cookbook_1.DbAddCookbook(repository);
};
exports.makeDbAddCookbook = makeDbAddCookbook;
