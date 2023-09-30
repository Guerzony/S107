"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeLoadUserByEmailDataController = void 0;
const log_mysql_repository_1 = require("../../../../infra/db/mysql/log/log-mysql-repository");
const log_controller_decorator_1 = require("../../../decorators/log-controller-decorator");
const load_userOld_by_email_controller_1 = require("../../../../presentation/controller/load-userOld-by-email/load-userOld-by-email-controller");
const db_load_userOld_by_email_factory_1 = require("../../usecases/load-userOld-by-email/db-load-userOld-by-email-factory");
const db_load_user_by_email_factory_1 = require("../../usecases/load-user-by-email/db-load-user-by-email-factory");
const makeLoadUserByEmailDataController = (pool) => {
    const logMysqlRepository = new log_mysql_repository_1.LogMysqlRepository(pool);
    const loadUserDataController = new load_userOld_by_email_controller_1.LoadUserByEmailController((0, db_load_userOld_by_email_factory_1.makeDbLoadUserOld)(pool), (0, db_load_user_by_email_factory_1.makeDbLoadUserByEmail)(pool));
    return new log_controller_decorator_1.LogControllerDecorator(loadUserDataController, logMysqlRepository);
};
exports.makeLoadUserByEmailDataController = makeLoadUserByEmailDataController;
