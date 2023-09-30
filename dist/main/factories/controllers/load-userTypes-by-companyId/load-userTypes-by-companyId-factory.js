"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeLoadUserTypesByCompanyIdController = void 0;
const log_mysql_repository_1 = require("../../../../infra/db/mysql/log/log-mysql-repository");
const log_controller_decorator_1 = require("../../../decorators/log-controller-decorator");
const load_userTypes_by_companyId_validation_factory_1 = require("./load-userTypes-by-companyId-validation-factory");
const db_load_userTypes_by_companyId_factory_1 = require("../../usecases/load-userTypes-by-companyId/db-load-userTypes-by-companyId-factory");
const load_userType_by_companyId_controller_1 = require("../../../../presentation/controller/load-userType-by-companyId/load-userType-by-companyId-controller");
const makeLoadUserTypesByCompanyIdController = (pool) => {
    const logMysqlRepository = new log_mysql_repository_1.LogMysqlRepository(pool);
    const loadUserTypesController = new load_userType_by_companyId_controller_1.LoadUserTypeByCompanyIdController((0, db_load_userTypes_by_companyId_factory_1.makeDbLoadUserTypesByCompanyId)(pool), (0, load_userTypes_by_companyId_validation_factory_1.makeLoadUserTypesByCompanyIdValidation)());
    return new log_controller_decorator_1.LogControllerDecorator(loadUserTypesController, logMysqlRepository);
};
exports.makeLoadUserTypesByCompanyIdController = makeLoadUserTypesByCompanyIdController;
