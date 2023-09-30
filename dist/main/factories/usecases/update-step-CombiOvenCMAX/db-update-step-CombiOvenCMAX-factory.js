"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeDbUpdateStepCombiOvenCMAX = void 0;
const db_update_step_CombiOvenCMAX_1 = require("../../../../data/usecases/update-step-CombiOvenCMAX/db-update-step-CombiOvenCMAX");
const step_CombiOvenCMAX_mysql_repository_1 = require("../../../../infra/db/mysql/step/step-CombiOvenCMAX-mysql-repository");
const makeDbUpdateStepCombiOvenCMAX = (pool) => {
    const stepCombiOvenCMAXMySqlRepository = new step_CombiOvenCMAX_mysql_repository_1.StepCombiOvenCMAXMySqlRepository(pool);
    return new db_update_step_CombiOvenCMAX_1.DbUpdateStepCombiOvenCMAX(stepCombiOvenCMAXMySqlRepository);
};
exports.makeDbUpdateStepCombiOvenCMAX = makeDbUpdateStepCombiOvenCMAX;
