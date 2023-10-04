"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeLoadStoreByIdController = void 0;
const log_mysql_repository_1 = require("../../../../infra/db/mysql/log/log-mysql-repository");
const load_store_by_id_controller_1 = require("../../../../presentation/controller/load-store-by-id/load-store-by-id-controller");
const log_controller_decorator_1 = require("../../../decorators/log-controller-decorator");
const db_load_store_by_id_factory_1 = require("../../usecases/load-store-by-id/db-load-store-by-id-factory");
const load_store_by_id_validation_factory_1 = require("./load-store-by-id-validation-factory");
const makeLoadStoreByIdController = (pool) => {
    const logMysqlRepository = new log_mysql_repository_1.LogMysqlRepository(pool);
    const loadUserByIdController = new load_store_by_id_controller_1.LoadStoreByIdController((0, db_load_store_by_id_factory_1.makeDbLoadStoreById)(pool), (0, load_store_by_id_validation_factory_1.makeLoadStoreByIdValidation)());
    return new log_controller_decorator_1.LogControllerDecorator(loadUserByIdController, logMysqlRepository);
};
exports.makeLoadStoreByIdController = makeLoadStoreByIdController;
