"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeLoadPermissionTypesByCompanyIdController = void 0;
const log_mysql_repository_1 = require("../../../../infra/db/mysql/log/log-mysql-repository");
const log_controller_decorator_1 = require("../../../decorators/log-controller-decorator");
const load_permissionTypes_by_companyTypeId_validation_factory_1 = require("./load-permissionTypes-by-companyTypeId-validation-factory");
const load_permission_by_companyType_controller_1 = require("../../../../presentation/controller/load-permission-by-companyType/load-permission-by-companyType-controller");
const db_load_permissionTypes_by_companyId_factory_1 = require("../../usecases/load-permissionTypes-by-companyId/db-load-permissionTypes-by-companyId-factory");
const makeLoadPermissionTypesByCompanyIdController = (pool) => {
    const logMysqlRepository = new log_mysql_repository_1.LogMysqlRepository(pool);
    const loadPermissionTypesController = new load_permission_by_companyType_controller_1.LoadPermissionByCompanyTypeController((0, db_load_permissionTypes_by_companyId_factory_1.makeDbLoadPermissionTypesByCompanyTypeId)(pool), (0, load_permissionTypes_by_companyTypeId_validation_factory_1.makeLoadPermissionTypesValidation)());
    return new log_controller_decorator_1.LogControllerDecorator(loadPermissionTypesController, logMysqlRepository);
};
exports.makeLoadPermissionTypesByCompanyIdController = makeLoadPermissionTypesByCompanyIdController;
