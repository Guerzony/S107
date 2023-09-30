"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeSendEmailResetPasswordController = void 0;
const log_controller_decorator_1 = require("../../../decorators/log-controller-decorator");
const log_mysql_repository_1 = require("../../../../infra/db/mysql/log/log-mysql-repository");
const send_email_reset_password_validation_factory_1 = require("./send-email-reset-password-validation-factory");
const send_email_adapter_1 = require("../../../../utils/send-email-adapter");
const send_email_reset_password_controller_1 = require("../../../../presentation/controller/send-email-reset-password/send-email-reset-password-controller");
const db_load_user_by_email_factory_1 = require("../../usecases/load-user-by-email/db-load-user-by-email-factory");
const makeSendEmailResetPasswordController = (pool) => {
    const logMysqlRepository = new log_mysql_repository_1.LogMysqlRepository(pool);
    const signUpController = new send_email_reset_password_controller_1.SendEmailResetPasswordController((0, db_load_user_by_email_factory_1.makeDbLoadUserByEmail)(pool), (0, send_email_reset_password_validation_factory_1.makeSendEmailResetPasswordValidation)(), new send_email_adapter_1.MailService());
    return new log_controller_decorator_1.LogControllerDecorator(signUpController, logMysqlRepository);
};
exports.makeSendEmailResetPasswordController = makeSendEmailResetPasswordController;
