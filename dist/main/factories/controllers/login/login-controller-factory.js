"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeLoginController = void 0;
const login_controller_1 = require("../../../../presentation/controller/login/login-controller");
const login_validation_factory_1 = require("./login-validation-factory");
const log_controller_decorator_1 = require("../../../decorators/log-controller-decorator");
const log_mysql_repository_1 = require("../../../../infra/db/mysql/log/log-mysql-repository");
const db_authentication_factory_1 = require("../../usecases/authentication/db-authentication-factory");
const makeLoginController = (pool) => {
    const loginController = new login_controller_1.LoginController((0, db_authentication_factory_1.makeDbAutehntication)(pool), (0, login_validation_factory_1.makeLoginValidation)());
    const logMysqlRepository = new log_mysql_repository_1.LogMysqlRepository(pool);
    return new log_controller_decorator_1.LogControllerDecorator(loginController, logMysqlRepository);
};
exports.makeLoginController = makeLoginController;
