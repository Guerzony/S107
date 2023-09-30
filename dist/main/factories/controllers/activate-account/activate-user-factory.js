"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeActivateUserController = void 0;
const log_mysql_repository_1 = require("../../../../infra/db/mysql/log/log-mysql-repository");
const activate_user_controller_1 = require("../../../../presentation/controller/activate-user/activate-user-controller");
const db_activate_user_factory_1 = require("../../usecases/activate-user/db-activate-user-factory");
const activate_user_validation_factory_1 = require("./activate-user-validation-factory");
const log_controller_decorator_1 = require("../../../decorators/log-controller-decorator");
const makeActivateUserController = (pool) => {
    const logMysqlRepository = new log_mysql_repository_1.LogMysqlRepository(pool);
    const activateUserController = new activate_user_controller_1.ActivateUserController((0, activate_user_validation_factory_1.makeActivateUserValidation)(), (0, db_activate_user_factory_1.makeDbActivateUser)(pool));
    return new log_controller_decorator_1.LogControllerDecorator(activateUserController, logMysqlRepository);
};
exports.makeActivateUserController = makeActivateUserController;
