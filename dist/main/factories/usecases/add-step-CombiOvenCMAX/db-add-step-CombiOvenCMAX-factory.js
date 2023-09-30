"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeDbAddStepCombiOvenCMAX = void 0;
const db_add_step_CombiOvenCMAX_1 = require("../../../../data/usecases/add-step-CombiOvenCMAX/db-add-step-CombiOvenCMAX");
const step_CombiOvenCMAX_mysql_repository_1 = require("../../../../infra/db/mysql/step/step-CombiOvenCMAX-mysql-repository");
const makeDbAddStepCombiOvenCMAX = (pool) => {
    const stepCombiOvenCMAXMySqlRepository = new step_CombiOvenCMAX_mysql_repository_1.StepCombiOvenCMAXMySqlRepository(pool);
    return new db_add_step_CombiOvenCMAX_1.DbAddStepCombiOvenCMAX(stepCombiOvenCMAXMySqlRepository);
};
exports.makeDbAddStepCombiOvenCMAX = makeDbAddStepCombiOvenCMAX;
