"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeLoadUserByCompanyIdController = void 0;
const log_mysql_repository_1 = require("../../../../infra/db/mysql/log/log-mysql-repository");
const load_equip_by_company_id_controller_1 = require("../../../../presentation/controller/load-equip-by-company-id/load-equip-by-company-id-controller");
const log_controller_decorator_1 = require("../../../decorators/log-controller-decorator");
const db_load_equip_by_company_id_1 = require("../../usecases/load-equip-by-company-id/db-load-equip-by-company-id");
const load_equip_by_company_id_validation_factory_1 = require("./load-equip-by-company-id-validation-factory");
const makeLoadUserByCompanyIdController = (pool) => {
    const logMysqlRepository = new log_mysql_repository_1.LogMysqlRepository(pool);
    const loadUserByCompanyIdController = new load_equip_by_company_id_controller_1.LoadUserByCompanyIdController((0, db_load_equip_by_company_id_1.makeDbLoadUserByCompanyId)(pool), (0, load_equip_by_company_id_validation_factory_1.makeLoadUserByCompanyIdValidation)());
    return new log_controller_decorator_1.LogControllerDecorator(loadUserByCompanyIdController, logMysqlRepository);
};
exports.makeLoadUserByCompanyIdController = makeLoadUserByCompanyIdController;
