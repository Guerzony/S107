"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeDbAddStepSpeedOven = void 0;
const db_add_step_SpeedOven_1 = require("../../../../data/usecases/add-step-SpeedOven/db-add-step-SpeedOven");
const step_SpeedOven_mysql_repository_1 = require("../../../../infra/db/mysql/step/step-SpeedOven-mysql-repository");
const makeDbAddStepSpeedOven = (pool) => {
    const stepSpeedOvenMySqlRepository = new step_SpeedOven_mysql_repository_1.StepSpeedOvenMySqlRepository(pool);
    return new db_add_step_SpeedOven_1.DbAddStepSpeedOven(stepSpeedOvenMySqlRepository);
};
exports.makeDbAddStepSpeedOven = makeDbAddStepSpeedOven;
