"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeDbDeleteStepCombiOvenTSI = void 0;
const db_delete_step_CombiOvenTSI_1 = require("../../../../data/usecases/delete-step-CombiOvenTSI/db-delete-step-CombiOvenTSI");
const step_CombiOvenTSI_mysql_repository_1 = require("../../../../infra/db/mysql/step/step-CombiOvenTSI-mysql-repository");
const makeDbDeleteStepCombiOvenTSI = (pool) => {
    const stepCombiOvenTSIMySqlRepository = new step_CombiOvenTSI_mysql_repository_1.StepCombiOvenTSIMySqlRepository(pool);
    return new db_delete_step_CombiOvenTSI_1.DbDeleteStepCombiOvenTSI(stepCombiOvenTSIMySqlRepository);
};
exports.makeDbDeleteStepCombiOvenTSI = makeDbDeleteStepCombiOvenTSI;
