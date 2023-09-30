"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeDbLoadStepCombiOvenCMAX = void 0;
const db_load_step_CombiOvenCMAX_1 = require("../../../../data/usecases/load-step-CombiOvenCMAX/db-load-step-CombiOvenCMAX");
const step_CombiOvenCMAX_mysql_repository_1 = require("../../../../infra/db/mysql/step/step-CombiOvenCMAX-mysql-repository");
const makeDbLoadStepCombiOvenCMAX = (pool) => {
    const stepCombiOvenCMAXMySqlRepository = new step_CombiOvenCMAX_mysql_repository_1.StepCombiOvenCMAXMySqlRepository(pool);
    return new db_load_step_CombiOvenCMAX_1.DbLoadStepCombiOvenCMAX(stepCombiOvenCMAXMySqlRepository);
};
exports.makeDbLoadStepCombiOvenCMAX = makeDbLoadStepCombiOvenCMAX;
