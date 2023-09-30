"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeEditUserByAdmController = void 0;
const log_controller_decorator_1 = require("../../../decorators/log-controller-decorator");
const log_mysql_repository_1 = require("../../../../infra/db/mysql/log/log-mysql-repository");
const db_update_user_data_factory_1 = require("../../usecases/db-update-user-data/db-update-user-data-factory");
const update_user_data_validation_factory_1 = require("./update-user-data-validation-factory");
const update_user_controller_1 = require("../../../../presentation/controller/update-user/update-user-controller");
const db_update_user_belong_store_factory_1 = require("../../usecases/db-update-user-belong-store/db-update-user-belong-store-factory");
const makeEditUserByAdmController = (pool) => {
    const logMysqlRepository = new log_mysql_repository_1.LogMysqlRepository(pool);
    const editUserDataController = new update_user_controller_1.EditUserController((0, update_user_data_validation_factory_1.makeEditUserDataValidation)(), (0, db_update_user_data_factory_1.makeDbEditUserData)(pool), (0, db_update_user_belong_store_factory_1.makeDbEditUserBelongStore)(pool));
    return new log_controller_decorator_1.LogControllerDecorator(editUserDataController, logMysqlRepository);
};
exports.makeEditUserByAdmController = makeEditUserByAdmController;
