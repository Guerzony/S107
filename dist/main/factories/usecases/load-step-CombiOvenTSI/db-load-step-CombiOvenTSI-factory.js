"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeDbLoadStepCombiOvenTSI = void 0;
const db_load_step_CombiOvenTSI_1 = require("../../../../data/usecases/load-step-CombiOvenTSI/db-load-step-CombiOvenTSI");
const step_CombiOvenTSI_mysql_repository_1 = require("../../../../infra/db/mysql/step/step-CombiOvenTSI-mysql-repository");
const makeDbLoadStepCombiOvenTSI = (pool) => {
    const stepCombiOvenTSIMySqlRepository = new step_CombiOvenTSI_mysql_repository_1.StepCombiOvenTSIMySqlRepository(pool);
    return new db_load_step_CombiOvenTSI_1.DbLoadStepCombiOvenTSI(stepCombiOvenTSIMySqlRepository);
};
exports.makeDbLoadStepCombiOvenTSI = makeDbLoadStepCombiOvenTSI;
