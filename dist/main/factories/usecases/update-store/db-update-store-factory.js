"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeDbUpdateStore = void 0;
const db_update_store_1 = require("../../../../data/usecases/update-store/db-update-store");
const store_mysql_repository_1 = require("../../../../infra/db/mysql/store/store-mysql-repository");
const makeDbUpdateStore = (pool) => {
    const storeMySqlRepository = new store_mysql_repository_1.StoreMySqlRepository(pool);
    return new db_update_store_1.DbUpdateStore(storeMySqlRepository, storeMySqlRepository);
};
exports.makeDbUpdateStore = makeDbUpdateStore;
