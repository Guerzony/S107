"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeDbAddStore = void 0;
const db_add_store_1 = require("../../../../data/usecases/add-store/db-add-store");
const store_mysql_repository_1 = require("../../../../infra/db/mysql/store/store-mysql-repository");
const makeDbAddStore = (pool) => {
    const storeMySqlRepository = new store_mysql_repository_1.StoreMySqlRepository(pool);
    return new db_add_store_1.DbAddStore(storeMySqlRepository);
};
exports.makeDbAddStore = makeDbAddStore;
