"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeSignUpRecoverController = void 0;
const log_controller_decorator_1 = require("../../../decorators/log-controller-decorator");
const log_mysql_repository_1 = require("../../../../infra/db/mysql/log/log-mysql-repository");
const signup_user_validation_factory_1 = require("./signup-user-validation-factory");
const db_add_user_factory_1 = require("../../usecases/add-user/db-add-user-factory");
const db_add_company_factory_1 = require("../../usecases/add-company/db-add-company-factory");
const signup_company_validation_factory_1 = require("./signup-company-validation-factory");
const send_email_adapter_1 = require("../../../../utils/send-email-adapter");
const db_add_configs_factory_1 = require("../../usecases/add-configs-factory/db-add-configs-factory");
const singup_recover_account_controller_1 = require("../../../../presentation/controller/signup-recover-account/singup-recover-account-controller");
const db_load_user_by_corporateName_factory_1 = require("../../usecases/load-user-by-corporateName/db-load-user-by-corporateName-factory");
const makeSignUpRecoverController = (pool) => {
    const logMysqlRepository = new log_mysql_repository_1.LogMysqlRepository(pool);
    const signUpRecoverController = new singup_recover_account_controller_1.SignupRecoverAccountController((0, db_add_user_factory_1.makeDbAddUser)(pool), (0, db_add_company_factory_1.makeDbAddCompany)(pool), (0, db_add_configs_factory_1.makeDbAddConfigs)(pool), (0, signup_user_validation_factory_1.makeSignUpUserValidation)(), (0, signup_company_validation_factory_1.makeSignUpCompanyValidation)(), new send_email_adapter_1.MailService(), (0, db_load_user_by_corporateName_factory_1.makeDbLoadUser)(pool));
    return new log_controller_decorator_1.LogControllerDecorator(signUpRecoverController, logMysqlRepository);
};
exports.makeSignUpRecoverController = makeSignUpRecoverController;
