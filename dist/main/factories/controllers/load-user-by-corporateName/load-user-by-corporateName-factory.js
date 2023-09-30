"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeLoadUserByCorporateNameDataController = void 0;
const log_mysql_repository_1 = require("../../../../infra/db/mysql/log/log-mysql-repository");
const log_controller_decorator_1 = require("../../../decorators/log-controller-decorator");
const load_user_by_corporateName_controller_1 = require("../../../../presentation/controller/load-user-by-corporateName/load-user-by-corporateName-controller");
const db_load_user_by_corporateName_factory_1 = require("../../usecases/load-user-by-corporateName/db-load-user-by-corporateName-factory");
const makeLoadUserByCorporateNameDataController = (pool) => {
    const logMysqlRepository = new log_mysql_repository_1.LogMysqlRepository(pool);
    const loadUserDataController = new load_user_by_corporateName_controller_1.LoadUserByCorporateNameController((0, db_load_user_by_corporateName_factory_1.makeDbLoadUser)(pool));
    return new log_controller_decorator_1.LogControllerDecorator(loadUserDataController, logMysqlRepository);
};
exports.makeLoadUserByCorporateNameDataController = makeLoadUserByCorporateNameDataController;
