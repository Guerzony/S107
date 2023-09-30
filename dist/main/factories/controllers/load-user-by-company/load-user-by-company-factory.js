"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeLoadUserByCompanyController = void 0;
const log_mysql_repository_1 = require("../../../../infra/db/mysql/log/log-mysql-repository");
const log_controller_decorator_1 = require("../../../decorators/log-controller-decorator");
const load_user_by_company_validation_factory_1 = require("./load-user-by-company-validation-factory");
const db_load_user_by_company_factory_1 = require("../../usecases/load-user-by-company/db-load-user-by-company-factory");
const load_user_by_company_controller_1 = require("../../../../presentation/controller/load-user-by-company/load-user-by-company-controller");
const makeLoadUserByCompanyController = (pool) => {
    const logMysqlRepository = new log_mysql_repository_1.LogMysqlRepository(pool);
    const loadUserDataController = new load_user_by_company_controller_1.LoadUserByCompanyController((0, load_user_by_company_validation_factory_1.makeLoadUserByCompanyValidation)(), (0, db_load_user_by_company_factory_1.makeDbLoadUserByCompany)(pool));
    return new log_controller_decorator_1.LogControllerDecorator(loadUserDataController, logMysqlRepository);
};
exports.makeLoadUserByCompanyController = makeLoadUserByCompanyController;
