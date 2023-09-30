"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeDbDeleteStepSpeedOven = void 0;
const db_delete_step_SpeedOven_1 = require("../../../../data/usecases/delete-step-SpeedOven/db-delete-step-SpeedOven");
const step_SpeedOven_mysql_repository_1 = require("../../../../infra/db/mysql/step/step-SpeedOven-mysql-repository");
const makeDbDeleteStepSpeedOven = (pool) => {
    const stepSpeedOvenMySqlRepository = new step_SpeedOven_mysql_repository_1.StepSpeedOvenMySqlRepository(pool);
    return new db_delete_step_SpeedOven_1.DbDeleteStepSpeedOven(stepSpeedOvenMySqlRepository);
};
exports.makeDbDeleteStepSpeedOven = makeDbDeleteStepSpeedOven;
