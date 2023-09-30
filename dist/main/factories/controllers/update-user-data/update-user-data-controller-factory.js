"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeEditUserDataController = void 0;
const log_controller_decorator_1 = require("../../../decorators/log-controller-decorator");
const log_mysql_repository_1 = require("../../../../infra/db/mysql/log/log-mysql-repository");
const update_user_data_controller_1 = require("../../../../presentation/controller/update-user-data/update-user-data-controller");
const db_update_user_data_factory_1 = require("../../usecases/db-update-user-data/db-update-user-data-factory");
const update_user_data_validation_factory_1 = require("./update-user-data-validation-factory");
const makeEditUserDataController = (pool) => {
    const logMysqlRepository = new log_mysql_repository_1.LogMysqlRepository(pool);
    const editUserDataController = new update_user_data_controller_1.EditUserDataController((0, update_user_data_validation_factory_1.makeEditUserDataValidation)(), (0, db_update_user_data_factory_1.makeDbEditUserData)(pool));
    return new log_controller_decorator_1.LogControllerDecorator(editUserDataController, logMysqlRepository);
};
exports.makeEditUserDataController = makeEditUserDataController;
