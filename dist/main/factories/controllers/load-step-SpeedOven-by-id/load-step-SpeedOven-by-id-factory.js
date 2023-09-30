"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeLoadStepSpeedOvenByIdController = void 0;
const log_mysql_repository_1 = require("../../../../infra/db/mysql/log/log-mysql-repository");
const load_step_SpeedOven_by_id_controller_1 = require("../../../../presentation/controller/load-step-by-id/load-step-SpeedOven-by-id-controller");
const log_controller_decorator_1 = require("../../../decorators/log-controller-decorator");
const db_load_step_SpeedOven_by_id_factory_1 = require("../../usecases/load-step-SpeedOven-by-id/db-load-step-SpeedOven-by-id-factory");
const load_step_SpeedOven_by_id_validation_factory_1 = require("./load-step-SpeedOven-by-id-validation-factory");
const makeLoadStepSpeedOvenByIdController = (pool) => {
    const logMysqlRepository = new log_mysql_repository_1.LogMysqlRepository(pool);
    const loadStepSpeedOvenByIdController = new load_step_SpeedOven_by_id_controller_1.LoadStepSpeedOvenByIdController((0, db_load_step_SpeedOven_by_id_factory_1.makeDbLoadStepSpeedOvenById)(pool), (0, load_step_SpeedOven_by_id_validation_factory_1.makeLoadStepSpeedOvenByIdValidation)());
    return new log_controller_decorator_1.LogControllerDecorator(loadStepSpeedOvenByIdController, logMysqlRepository);
};
exports.makeLoadStepSpeedOvenByIdController = makeLoadStepSpeedOvenByIdController;
