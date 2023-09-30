"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeLoadCompanyTypesController = void 0;
const log_mysql_repository_1 = require("../../../../infra/db/mysql/log/log-mysql-repository");
const load_companyTypes_controller_1 = require("../../../../presentation/controller/load-companyTypes/load-companyTypes.controller");
const log_controller_decorator_1 = require("../../../decorators/log-controller-decorator");
const load_companyTypes_validation_factory_1 = require("./load-companyTypes-validation-factory");
const db_load_companyTypes_factory_1 = require("../../usecases/load-companyTypes/db-load-companyTypes-factory");
const makeLoadCompanyTypesController = (pool) => {
    const logMysqlRepository = new log_mysql_repository_1.LogMysqlRepository(pool);
    const loadCompanyTypesController = new load_companyTypes_controller_1.LoadCompanyTypesController((0, db_load_companyTypes_factory_1.makeDbLoadCompanyTypes)(pool), (0, load_companyTypes_validation_factory_1.makeLoadCompanyTypesValidation)());
    return new log_controller_decorator_1.LogControllerDecorator(loadCompanyTypesController, logMysqlRepository);
};
exports.makeLoadCompanyTypesController = makeLoadCompanyTypesController;
