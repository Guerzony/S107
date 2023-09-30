"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeUpdateStoreController = void 0;
const update_store_body_validation_factory_1 = require("./update-store-body-validation-factory");
const update_store_params_validation_factory_1 = require("./update-store-params-validation-factory");
const db_update_store_factory_1 = require("../../usecases/update-store/db-update-store-factory");
const log_mysql_repository_1 = require("../../../../infra/db/mysql/log/log-mysql-repository");
const update_store_controller_1 = require("../../../../presentation/controller/update-store/update-store-controller");
const log_controller_decorator_1 = require("../../../decorators/log-controller-decorator");
const makeUpdateStoreController = (pool) => {
    const logMysqlRepository = new log_mysql_repository_1.LogMysqlRepository(pool);
    const updateStoreController = new update_store_controller_1.UpdateStoreController((0, update_store_body_validation_factory_1.makeUpdateStoreBodyValidation)(), (0, update_store_params_validation_factory_1.makeUpdateStoreParamsValidation)(), (0, db_update_store_factory_1.makeDbUpdateStore)(pool));
    return new log_controller_decorator_1.LogControllerDecorator(updateStoreController, logMysqlRepository);
};
exports.makeUpdateStoreController = makeUpdateStoreController;
