"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeDbUpdateCookbook = void 0;
const db_update_cookbook_1 = require("../../../../data/usecases/update-cookbook/db-update-cookbook");
const cookbook_mysql_repository_1 = require("../../../../infra/db/mysql/cookbook/cookbook-mysql-repository");
const makeDbUpdateCookbook = (pool) => {
    const repository = new cookbook_mysql_repository_1.CookbookMySqlRepository(pool);
    return new db_update_cookbook_1.DbUpdateCookbook(repository);
};
exports.makeDbUpdateCookbook = makeDbUpdateCookbook;
