"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeAuthenticationPasswordController = void 0;
const authentication_password_validation_factory_1 = require("./authentication-password-validation-factory");
const log_controller_decorator_1 = require("../../../decorators/log-controller-decorator");
const log_mysql_repository_1 = require("../../../../infra/db/mysql/log/log-mysql-repository");
const db_authentication_password_factory_1 = require("../../usecases/authentication-password/db-authentication-password-factory");
const authentication_password_controller_1 = require("../../../../presentation/controller/authenticationPassword/authentication-password-controller");
const makeAuthenticationPasswordController = (pool) => {
    const authenticationPasswordController = new authentication_password_controller_1.AuthenticationPasswordController((0, db_authentication_password_factory_1.makeDbauthenticationPassword)(pool), (0, authentication_password_validation_factory_1.makeAuthenticationPasswordValidation)());
    const logMysqlRepository = new log_mysql_repository_1.LogMysqlRepository(pool);
    return new log_controller_decorator_1.LogControllerDecorator(authenticationPasswordController, logMysqlRepository);
};
exports.makeAuthenticationPasswordController = makeAuthenticationPasswordController;
