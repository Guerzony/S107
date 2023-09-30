"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeLoadCompanyByCompanyTypeController = void 0;
const log_mysql_repository_1 = require("../../../../infra/db/mysql/log/log-mysql-repository");
const log_controller_decorator_1 = require("../../../decorators/log-controller-decorator");
const load_company_pratica_distributor_controller_1 = require("../../../../presentation/controller/load-company-by-pratica-distributor/load-company-pratica-distributor-controller");
const db_load_company_by_companyType_factory_1 = require("../../usecases/load-company-by-companyType/db-load-company-by-companyType-factory");
const makeLoadCompanyByCompanyTypeController = (pool) => {
    const logMysqlRepository = new log_mysql_repository_1.LogMysqlRepository(pool);
    const loadUserDataController = new load_company_pratica_distributor_controller_1.LoadCompanyByPraticaDistributorController((0, db_load_company_by_companyType_factory_1.makeDbLoadCompanyByCompanyType)(pool));
    return new log_controller_decorator_1.LogControllerDecorator(loadUserDataController, logMysqlRepository);
};
exports.makeLoadCompanyByCompanyTypeController = makeLoadCompanyByCompanyTypeController;
