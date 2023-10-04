"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeLoadUserByCompanyIdRemoteAccessController = void 0;
const log_mysql_repository_1 = require("../../../../infra/db/mysql/log/log-mysql-repository");
const log_controller_decorator_1 = require("../../../decorators/log-controller-decorator");
const load_equip_by_companyIdRemoteAccess_validation_factory_1 = require("./load-equip-by-companyIdRemoteAccess-validation-factory");
const load_equip_by_companyIdRemoteAccess_controller_1 = require("../../../../presentation/controller/load-equip-by-companyIdRemoteAccess/load-equip-by-companyIdRemoteAccess-controller");
const db_load_equip_by_companyIdRemoteAccess_1 = require("../../usecases/load-equip-by-companyIdRemoteAccess/db-load-equip-by-companyIdRemoteAccess");
const makeLoadUserByCompanyIdRemoteAccessController = (pool) => {
    const logMysqlRepository = new log_mysql_repository_1.LogMysqlRepository(pool);
    const loadUserByIdController = new load_equip_by_companyIdRemoteAccess_controller_1.LoadUserByCompanyIdRemoteAccessController((0, db_load_equip_by_companyIdRemoteAccess_1.makeDbLoadUserByCompanyIdRemoteAccess)(pool), (0, load_equip_by_companyIdRemoteAccess_validation_factory_1.makeLoadUserByCompanyIdRemoteAccessValidation)());
    return new log_controller_decorator_1.LogControllerDecorator(loadUserByIdController, logMysqlRepository);
};
exports.makeLoadUserByCompanyIdRemoteAccessController = makeLoadUserByCompanyIdRemoteAccessController;
