"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeDbUpdateStepCombiOvenTSI = void 0;
const db_update_step_CombiOvenTSI_1 = require("../../../../data/usecases/update-step-CombiOvenTSI/db-update-step-CombiOvenTSI");
const step_CombiOvenTSI_mysql_repository_1 = require("../../../../infra/db/mysql/step/step-CombiOvenTSI-mysql-repository");
const makeDbUpdateStepCombiOvenTSI = (pool) => {
    const stepCombiOvenTSIMySqlRepository = new step_CombiOvenTSI_mysql_repository_1.StepCombiOvenTSIMySqlRepository(pool);
    return new db_update_step_CombiOvenTSI_1.DbUpdateStepCombiOvenTSI(stepCombiOvenTSIMySqlRepository);
};
exports.makeDbUpdateStepCombiOvenTSI = makeDbUpdateStepCombiOvenTSI;
