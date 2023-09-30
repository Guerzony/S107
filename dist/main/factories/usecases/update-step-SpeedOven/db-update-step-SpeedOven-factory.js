"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeDbUpdateStepSpeedOven = void 0;
const db_update_step_SpeedOven_1 = require("../../../../data/usecases/update-step-SpeedOven/db-update-step-SpeedOven");
const step_SpeedOven_mysql_repository_1 = require("../../../../infra/db/mysql/step/step-SpeedOven-mysql-repository");
const makeDbUpdateStepSpeedOven = (pool) => {
    const stepSpeedOvenMySqlRepository = new step_SpeedOven_mysql_repository_1.StepSpeedOvenMySqlRepository(pool);
    return new db_update_step_SpeedOven_1.DbUpdateStepSpeedOven(stepSpeedOvenMySqlRepository);
};
exports.makeDbUpdateStepSpeedOven = makeDbUpdateStepSpeedOven;
