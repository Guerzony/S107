"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeLoadEquipByCompanyIdController = void 0;
const log_mysql_repository_1 = require("../../../../infra/db/mysql/log/log-mysql-repository");
const load_equip_by_company_id_controller_1 = require("../../../../presentation/controller/load-equip-by-company-id/load-equip-by-company-id-controller");
const log_controller_decorator_1 = require("../../../decorators/log-controller-decorator");
const db_load_equip_by_company_id_1 = require("../../usecases/load-equip-by-company-id/db-load-equip-by-company-id");
const load_equip_by_company_id_validation_factory_1 = require("./load-equip-by-company-id-validation-factory");
const makeLoadEquipByCompanyIdController = (pool) => {
    const logMysqlRepository = new log_mysql_repository_1.LogMysqlRepository(pool);
    const loadEquipByCompanyIdController = new load_equip_by_company_id_controller_1.LoadEquipByCompanyIdController((0, db_load_equip_by_company_id_1.makeDbLoadEquipByCompanyId)(pool), (0, load_equip_by_company_id_validation_factory_1.makeLoadEquipByCompanyIdValidation)());
    return new log_controller_decorator_1.LogControllerDecorator(loadEquipByCompanyIdController, logMysqlRepository);
};
exports.makeLoadEquipByCompanyIdController = makeLoadEquipByCompanyIdController;
