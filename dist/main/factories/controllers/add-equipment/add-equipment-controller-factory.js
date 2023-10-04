"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeAddUserController = void 0;
const add_user_validation_factory_1 = require("./add-user-validation-factory");
const db_add_user_factory_1 = require("../../usecases/add-user/db-add-user-factory");
const log_mysql_repository_1 = require("../../../../infra/db/mysql/log/log-mysql-repository");
const add_user_controller_1 = require("../../../../presentation/controller/add-user/add-user-controller");
const log_controller_decorator_1 = require("../../../decorators/log-controller-decorator");
const makeAddUserController = (pool) => {
    const logMysqlRepository = new log_mysql_repository_1.LogMysqlRepository(pool);
    const addUserController = new add_user_controller_1.AddUserController((0, add_user_validation_factory_1.makeAddUserValidation)(), (0, db_add_user_factory_1.makeDbAddUser)(pool));
    return new log_controller_decorator_1.LogControllerDecorator(addUserController, logMysqlRepository);
};
exports.makeAddUserController = makeAddUserController;
