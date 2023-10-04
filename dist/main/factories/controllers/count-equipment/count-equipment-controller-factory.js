"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeCountUserController = void 0;
const log_mysql_repository_1 = require("../../../../infra/db/mysql/log/log-mysql-repository");
const count_user_controller_1 = require("../../../../presentation/controller/count-user/count-user-controller");
const log_controller_decorator_1 = require("../../../decorators/log-controller-decorator");
const db_count_user_factory_1 = require("../../usecases/count-user/db-count-user-factory");
const count_user_validation_factory_1 = require("./count-user-validation-factory");
const makeCountUserController = (pool) => {
    const logMysqlRepository = new log_mysql_repository_1.LogMysqlRepository(pool);
    const controller = new count_user_controller_1.CountUserController((0, count_user_validation_factory_1.makeCountUserValidation)(), (0, db_count_user_factory_1.makeDbCountUser)(pool));
    return new log_controller_decorator_1.LogControllerDecorator(controller, logMysqlRepository);
};
exports.makeCountUserController = makeCountUserController;
