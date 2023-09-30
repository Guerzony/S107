"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeLoadCompanyMenuController = void 0;
const log_mysql_repository_1 = require("../../../../infra/db/mysql/log/log-mysql-repository");
const log_controller_decorator_1 = require("../../../decorators/log-controller-decorator");
const load_menu_by_company_id_controller_1 = require("../../../../presentation/controller/load-menu-by-company-id/load-menu-by-company-id-controller");
const db_load_company_menu_factory_1 = require("../../usecases/load-company-menu/db-load-company-menu-factory");
const db_load_company_menu_config_factory_1 = require("../../usecases/load-company-menu-configs/db-load-company-menu-config-factory");
const makeLoadCompanyMenuController = (pool) => {
    const logMysqlRepository = new log_mysql_repository_1.LogMysqlRepository(pool);
    const loadCompanyMenuController = new load_menu_by_company_id_controller_1.LoadCompanyMenuController((0, db_load_company_menu_factory_1.makeLoadCompanyMenu)(pool), (0, db_load_company_menu_config_factory_1.makeLoadCompanyMenuConfigs)(pool));
    return new log_controller_decorator_1.LogControllerDecorator(loadCompanyMenuController, logMysqlRepository);
};
exports.makeLoadCompanyMenuController = makeLoadCompanyMenuController;
