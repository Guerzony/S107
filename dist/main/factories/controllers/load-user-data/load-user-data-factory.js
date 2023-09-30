"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeLoadUserDataController = void 0;
const log_mysql_repository_1 = require("../../../../infra/db/mysql/log/log-mysql-repository");
const load_user_data_controller_1 = require("../../../../presentation/controller/load-user-data/load-user-data-controller");
const log_controller_decorator_1 = require("../../../decorators/log-controller-decorator");
const db_load_user_by_id_factory_1 = require("../../usecases/load-user-by-id/db-load-user-by-id-factory");
const db_load_company_by_id_factory_1 = require("../../usecases/load-company-by-id/db-load-company-by-id-factory");
const db_load_configs_by_user_id_factory_1 = require("../../usecases/load-configs-by-user-id/db-load-configs-by-user-id-factory");
const makeLoadUserDataController = (pool) => {
    const logMysqlRepository = new log_mysql_repository_1.LogMysqlRepository(pool);
    const loadUserDataController = new load_user_data_controller_1.LoadUserDataController((0, db_load_user_by_id_factory_1.makeDbLoadUser)(pool), (0, db_load_configs_by_user_id_factory_1.makeDbLoadCompany)(pool), (0, db_load_company_by_id_factory_1.makeDbLoadConfigsByUserId)(pool));
    return new log_controller_decorator_1.LogControllerDecorator(loadUserDataController, logMysqlRepository);
};
exports.makeLoadUserDataController = makeLoadUserDataController;
