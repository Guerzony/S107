"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeDeleteRecuseUserController = void 0;
const log_mysql_repository_1 = require("../../../../infra/db/mysql/log/log-mysql-repository");
const log_controller_decorator_1 = require("../../../decorators/log-controller-decorator");
const delete_user_validation_factory_1 = require("./delete-user-validation-factory");
const db_delete_user_factory_1 = require("../../usecases/delete-user/db-delete-user-factory");
const delete_user_controller_1 = require("../../../../presentation/controller/delete-refuse-user/delete-user-controller");
const send_email_adapter_1 = require("../../../../utils/send-email-adapter");
const makeDeleteRecuseUserController = (pool) => {
    const logMysqlRepository = new log_mysql_repository_1.LogMysqlRepository(pool);
    const deleteUserController = new delete_user_controller_1.DeleteRecuseUserController((0, delete_user_validation_factory_1.makeDeleteUserValidation)(), (0, db_delete_user_factory_1.makeDeleteUser)(pool), new send_email_adapter_1.MailService());
    return new log_controller_decorator_1.LogControllerDecorator(deleteUserController, logMysqlRepository);
};
exports.makeDeleteRecuseUserController = makeDeleteRecuseUserController;
