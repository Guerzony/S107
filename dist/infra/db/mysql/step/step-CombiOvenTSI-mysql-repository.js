"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StepCombiOvenTSIMySqlRepository = void 0;
const step_CombiOvenTSI_mysql_repository_helper_1 = require("./step-CombiOvenTSI-mysql-repository-helper");
const mysql_helper_1 = require("../mysql-helper");
class StepCombiOvenTSIMySqlRepository {
    constructor(pool) {
        this.connectionPool = pool;
    }
    async addStepCombiOvenTSI(stepCombiOvenTSIData) {
        const result = await (0, mysql_helper_1.insertOne)(this.connectionPool, 'stepCombiOvenTSI', stepCombiOvenTSIData);
        return (0, step_CombiOvenTSI_mysql_repository_helper_1.mapCreatedStepCombiOvenTSI)(stepCombiOvenTSIData, result.insertId);
    }
    async deleteStepCombiOvenTSI(id) {
        const result = await (0, mysql_helper_1.deleteById)(this.connectionPool, 'stepCombiOvenTSI', 'id', id);
        if (result.affectedRows === 0)
            return false;
        return true;
    }
    async loadStepCombiOvenTSI(idRecipe) {
        const result = await (0, mysql_helper_1.getOne)(this.connectionPool, 'stepCombiOvenTSI', 'recipeId', idRecipe);
        return result;
    }
    async updateStepCombiOvenTSI(id, stepCombiOvenTSIData) {
        const setFields = Object.entries(stepCombiOvenTSIData)
            .map(value => `${value[0]} = ${isNaN(value[1]) ? `"${value[1]}"` : value[1]}`)
            .join(', ');
        const result = await (0, mysql_helper_1.updateAll)(this.connectionPool, 'stepCombiOvenTSI', setFields, id);
        return result;
    }
}
exports.StepCombiOvenTSIMySqlRepository = StepCombiOvenTSIMySqlRepository;
