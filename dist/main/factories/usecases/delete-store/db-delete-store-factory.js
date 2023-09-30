"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeDbDeleteStore = void 0;
const db_delete_store_1 = require("../../../../data/usecases/delete-store/db-delete-store");
const store_mysql_repository_1 = require("../../../../infra/db/mysql/store/store-mysql-repository");
const makeDbDeleteStore = (pool) => {
    const storeMySqlRepository = new store_mysql_repository_1.StoreMySqlRepository(pool);
    return new db_delete_store_1.DbDeleteStore(storeMySqlRepository, storeMySqlRepository);
};
exports.makeDbDeleteStore = makeDbDeleteStore;
