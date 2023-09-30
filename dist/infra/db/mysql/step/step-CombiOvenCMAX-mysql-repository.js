"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StepCombiOvenCMAXMySqlRepository = void 0;
const step_CombiOvenCMAX_mysql_repository_helper_1 = require("./step-CombiOvenCMAX-mysql-repository-helper");
const mysql_helper_1 = require("../mysql-helper");
class StepCombiOvenCMAXMySqlRepository {
    constructor(pool) {
        this.connectionPool = pool;
    }
    async addStepCombiOvenCMAX(stepCombiOvenCMAXData) {
        const result = await (0, mysql_helper_1.insertOne)(this.connectionPool, 'stepCombiOvenCMAX', stepCombiOvenCMAXData);
        return (0, step_CombiOvenCMAX_mysql_repository_helper_1.mapCreatedStepCombiOvenCMAX)(stepCombiOvenCMAXData, result.insertId);
    }
    async deleteStepCombiOvenCMAX(id) {
        const result = await (0, mysql_helper_1.deleteById)(this.connectionPool, 'stepCombiOvenCMAX', 'id', id);
        if (result.affectedRows === 0)
            return false;
        return true;
    }
    async loadStepCombiOvenCMAX(idRecipe) {
        const result = await (0, mysql_helper_1.getOne)(this.connectionPool, 'stepCombiOvenCMAX', 'recipeId', idRecipe);
        return result;
    }
    async updateStepCombiOvenCMAX(id, stepCombiOvenCMAXData) {
        const setFields = Object.entries(stepCombiOvenCMAXData)
            .map(value => `${value[0]} = ${isNaN(value[1]) ? `"${value[1]}"` : value[1]}`)
            .join(', ');
        const result = await (0, mysql_helper_1.updateAll)(this.connectionPool, 'stepCombiOvenCMAX', setFields, id);
        return result;
    }
}
exports.StepCombiOvenCMAXMySqlRepository = StepCombiOvenCMAXMySqlRepository;
