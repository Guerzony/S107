"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeDbLoadStoreByCompanyId = void 0;
const db_load_store_by_company_id_1 = require("../../../../data/usecases/load-store-by-company-id/db-load-store-by-company-id");
const store_mysql_repository_1 = require("../../../../infra/db/mysql/store/store-mysql-repository");
const makeDbLoadStoreByCompanyId = (pool) => {
    const storeMySqlRepository = new store_mysql_repository_1.StoreMySqlRepository(pool);
    return new db_load_store_by_company_id_1.DbLoadStoresByCompanyId(storeMySqlRepository, storeMySqlRepository);
};
exports.makeDbLoadStoreByCompanyId = makeDbLoadStoreByCompanyId;
