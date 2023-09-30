"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeAddStoreController = void 0;
const add_store_controller_1 = require("../../../../presentation/controller/add-store/add-store-controller");
const log_controller_decorator_1 = require("../../../decorators/log-controller-decorator");
const log_mysql_repository_1 = require("../../../../infra/db/mysql/log/log-mysql-repository");
const db_add_store_factory_1 = require("../../usecases/add-store/db-add-store-factory");
const add_store_validation_factory_1 = require("./add-store-validation-factory");
const makeAddStoreController = (pool) => {
    const logMysqlRepository = new log_mysql_repository_1.LogMysqlRepository(pool);
    const addStoreController = new add_store_controller_1.AddStoreController((0, add_store_validation_factory_1.makeAddStoreValidation)(), (0, db_add_store_factory_1.makeDbAddStore)(pool));
    return new log_controller_decorator_1.LogControllerDecorator(addStoreController, logMysqlRepository);
};
exports.makeAddStoreController = makeAddStoreController;
