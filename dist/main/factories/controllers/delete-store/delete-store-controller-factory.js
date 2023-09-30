"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeDeleteStoreController = void 0;
const log_controller_decorator_1 = require("../../../decorators/log-controller-decorator");
const log_mysql_repository_1 = require("../../../../infra/db/mysql/log/log-mysql-repository");
const delete_store_validation_factory_1 = require("./delete-store-validation-factory");
const delete_store_controller_1 = require("../../../../presentation/controller/delete-store/delete-store-controller");
const db_delete_store_factory_1 = require("../../usecases/delete-store/db-delete-store-factory");
const makeDeleteStoreController = (pool) => {
    const logMysqlRepository = new log_mysql_repository_1.LogMysqlRepository(pool);
    const storeController = new delete_store_controller_1.DeleteStoreController((0, delete_store_validation_factory_1.makeDeleteStoreValidation)(), (0, db_delete_store_factory_1.makeDbDeleteStore)(pool));
    return new log_controller_decorator_1.LogControllerDecorator(storeController, logMysqlRepository);
};
exports.makeDeleteStoreController = makeDeleteStoreController;
