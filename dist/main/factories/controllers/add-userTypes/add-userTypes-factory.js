"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeAddUserTypesController = void 0;
const log_mysql_repository_1 = require("../../../../infra/db/mysql/log/log-mysql-repository");
const log_controller_decorator_1 = require("../../../decorators/log-controller-decorator");
const add_userTypes_validation_factory_1 = require("./add-userTypes-validation-factory");
const add_userType_controller_1 = require("../../../../presentation/controller/add-userType/add-userType-controller");
const db_load_userTypes_by_companyId_factory_1 = require("../../usecases/load-userTypes-by-companyId copy/db-load-userTypes-by-companyId-factory");
const makeAddUserTypesController = (pool) => {
    const logMysqlRepository = new log_mysql_repository_1.LogMysqlRepository(pool);
    const loadUserTypesController = new add_userType_controller_1.AddUserTypeController((0, add_userTypes_validation_factory_1.makeAddUserTypesValidation)(), (0, db_load_userTypes_by_companyId_factory_1.makeDbAddUserTypes)(pool));
    return new log_controller_decorator_1.LogControllerDecorator(loadUserTypesController, logMysqlRepository);
};
exports.makeAddUserTypesController = makeAddUserTypesController;
