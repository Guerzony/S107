"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeLoadStoresByCompanyIdController = void 0;
const log_mysql_repository_1 = require("../../../../infra/db/mysql/log/log-mysql-repository");
const load_store_by_company_id_controller_1 = require("../../../../presentation/controller/load-store-by-company-id/load-store-by-company-id-controller");
const log_controller_decorator_1 = require("../../../decorators/log-controller-decorator");
const db_load_store_by_company_id_factory_1 = require("../../usecases/load-store-by-company-id/db-load-store-by-company-id-factory");
const load_stores_by_company_id_validation_factory_1 = require("./load-stores-by-company-id-validation-factory");
const makeLoadStoresByCompanyIdController = (pool) => {
    const logMysqlRepository = new log_mysql_repository_1.LogMysqlRepository(pool);
    const loadStoresByCompanyIdController = new load_store_by_company_id_controller_1.LoadStoresByCompanyIdController((0, db_load_store_by_company_id_factory_1.makeDbLoadStoreByCompanyId)(pool), (0, load_stores_by_company_id_validation_factory_1.makeLoadStoresByCompanyIdValidation)());
    return new log_controller_decorator_1.LogControllerDecorator(loadStoresByCompanyIdController, logMysqlRepository);
};
exports.makeLoadStoresByCompanyIdController = makeLoadStoresByCompanyIdController;
