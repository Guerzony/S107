"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeDbLoadStepSpeedOvenById = void 0;
const db_load_step_SpeedOven_by_id_1 = require("../../../../data/usecases/load-step-SpeedOven-by-id/db-load-step-SpeedOven-by-id");
const step_SpeedOven_mysql_repository_1 = require("../../../../infra/db/mysql/step/step-SpeedOven-mysql-repository");
const makeDbLoadStepSpeedOvenById = (pool) => {
    const stepSpeedOvenMySqlRepository = new step_SpeedOven_mysql_repository_1.StepSpeedOvenMySqlRepository(pool);
    return new db_load_step_SpeedOven_by_id_1.DbLoadStepSpeedOvenById(stepSpeedOvenMySqlRepository);
};
exports.makeDbLoadStepSpeedOvenById = makeDbLoadStepSpeedOvenById;
