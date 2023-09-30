"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeDbAddStepCombiOvenTSI = void 0;
const db_add_step_CombiOvenTSI_1 = require("../../../../data/usecases/add-step-CombiOvenTSI/db-add-step-CombiOvenTSI");
const step_CombiOvenTSI_mysql_repository_1 = require("../../../../infra/db/mysql/step/step-CombiOvenTSI-mysql-repository");
const makeDbAddStepCombiOvenTSI = (pool) => {
    const stepCombiOvenTSIMySqlRepository = new step_CombiOvenTSI_mysql_repository_1.StepCombiOvenTSIMySqlRepository(pool);
    return new db_add_step_CombiOvenTSI_1.DbAddStepCombiOvenTSI(stepCombiOvenTSIMySqlRepository);
};
exports.makeDbAddStepCombiOvenTSI = makeDbAddStepCombiOvenTSI;
