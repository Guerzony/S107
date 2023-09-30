"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeDeleteUserController = void 0;
const log_mysql_repository_1 = require("../../../../infra/db/mysql/log/log-mysql-repository");
const log_controller_decorator_1 = require("../../../decorators/log-controller-decorator");
const delete_user_validation_factory_1 = require("./delete-user-validation-factory");
const delete_user_controller_1 = require("../../../../presentation/controller/delete-user/delete-user-controller");
const db_delete_user_factory_1 = require("../../usecases/delete-user/db-delete-user-factory");
const makeDeleteUserController = (pool) => {
    const logMysqlRepository = new log_mysql_repository_1.LogMysqlRepository(pool);
    const deleteUserController = new delete_user_controller_1.DeleteUserController((0, delete_user_validation_factory_1.makeDeleteUserValidation)(), (0, db_delete_user_factory_1.makeDeleteUser)(pool));
    return new log_controller_decorator_1.LogControllerDecorator(deleteUserController, logMysqlRepository);
};
exports.makeDeleteUserController = makeDeleteUserController;
