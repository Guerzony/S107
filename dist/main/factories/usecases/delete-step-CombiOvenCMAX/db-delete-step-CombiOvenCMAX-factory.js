"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeDbDeleteStepCombiOvenCMAX = void 0;
const db_delete_step_CombiOvenCMAX_1 = require("../../../../data/usecases/delete-step-CombiOvenCMAX/db-delete-step-CombiOvenCMAX");
const step_CombiOvenCMAX_mysql_repository_1 = require("../../../../infra/db/mysql/step/step-CombiOvenCMAX-mysql-repository");
const makeDbDeleteStepCombiOvenCMAX = (pool) => {
    const stepCombiOvenCMAXMySqlRepository = new step_CombiOvenCMAX_mysql_repository_1.StepCombiOvenCMAXMySqlRepository(pool);
    return new db_delete_step_CombiOvenCMAX_1.DbDeleteStepCombiOvenCMAX(stepCombiOvenCMAXMySqlRepository);
};
exports.makeDbDeleteStepCombiOvenCMAX = makeDbDeleteStepCombiOvenCMAX;
