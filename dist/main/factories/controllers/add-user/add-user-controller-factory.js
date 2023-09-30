"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeAddUserController = void 0;
const log_controller_decorator_1 = require("../../../decorators/log-controller-decorator");
const log_mysql_repository_1 = require("../../../../infra/db/mysql/log/log-mysql-repository");
const add_user_validation_factory_1 = require("./add-user-validation-factory");
const db_add_user_factory_1 = require("../../usecases/add-user/db-add-user-factory");
const send_email_adapter_1 = require("../../../../utils/send-email-adapter");
const db_add_configs_factory_1 = require("../../usecases/add-configs-factory/db-add-configs-factory");
const add_user_controller_1 = require("../../../../presentation/controller/add-user/add-user-controller");
const db_add_user_belong_store_factory_1 = require("../../usecases/add-user-belong-store/db-add-user-belong-store-factory");
const makeAddUserController = (pool) => {
    const logMysqlRepository = new log_mysql_repository_1.LogMysqlRepository(pool);
    const addUserController = new add_user_controller_1.AddUserController((0, db_add_user_factory_1.makeDbAddUser)(pool), (0, db_add_configs_factory_1.makeDbAddConfigs)(pool), (0, add_user_validation_factory_1.makeAddUserValidation)(), new send_email_adapter_1.MailService(), (0, db_add_user_belong_store_factory_1.makeDbAddUserBelongStore)(pool));
    return new log_controller_decorator_1.LogControllerDecorator(addUserController, logMysqlRepository);
};
exports.makeAddUserController = makeAddUserController;
