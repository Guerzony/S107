"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeUpdateConfigsController = void 0;
const log_controller_decorator_1 = require("../../../decorators/log-controller-decorator");
const log_mysql_repository_1 = require("../../../../infra/db/mysql/log/log-mysql-repository");
const update_configs_controller_1 = require("../../../../presentation/controller/update-configs/update-configs-controller");
const db_update_configs_factory_1 = require("../../usecases/update-configs/db-update-configs-factory");
const update_configs_validation_factory_1 = require("./update-configs-validation-factory");
const makeUpdateConfigsController = (pool) => {
    const logMysqlRepository = new log_mysql_repository_1.LogMysqlRepository(pool);
    const updateConfigsController = new update_configs_controller_1.UpdateConfigsController((0, update_configs_validation_factory_1.makeUpdateConfigsValidation)(), (0, db_update_configs_factory_1.makeDbUpdateConfigs)(pool));
    return new log_controller_decorator_1.LogControllerDecorator(updateConfigsController, logMysqlRepository);
};
exports.makeUpdateConfigsController = makeUpdateConfigsController;
