"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeDbLoadStoreById = void 0;
const db_load_store_by_id_1 = require("../../../../data/usecases/load-store-by-id/db-load-store-by-id");
const store_mysql_repository_1 = require("../../../../infra/db/mysql/store/store-mysql-repository");
const makeDbLoadStoreById = (pool) => {
    const storeMySqlRepository = new store_mysql_repository_1.StoreMySqlRepository(pool);
    return new db_load_store_by_id_1.DbLoadStoreById(storeMySqlRepository);
};
exports.makeDbLoadStoreById = makeDbLoadStoreById;
