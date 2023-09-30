"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StepSpeedOvenMySqlRepository = void 0;
const step_SpeedOven_mysql_repository_helper_1 = require("./step-SpeedOven-mysql-repository-helper");
const mysql_helper_1 = require("../mysql-helper");
class StepSpeedOvenMySqlRepository {
    constructor(pool) {
        this.connectionPool = pool;
    }
    async addStepSpeedOven(stepSpeedOvenData) {
        const result = await (0, mysql_helper_1.insertOne)(this.connectionPool, 'stepSpeedOven', stepSpeedOvenData);
        return (0, step_SpeedOven_mysql_repository_helper_1.mapCreatedStepSpeedOven)(stepSpeedOvenData, result.insertId);
    }
    async deleteStepSpeedOven(id) {
        const result = await (0, mysql_helper_1.deleteById)(this.connectionPool, 'stepSpeedOven', 'id', id);
        if (result.affectedRows === 0)
            return false;
        return true;
    }
    async loadStepSpeedOvenById(id) {
        const result = await (0, mysql_helper_1.getOne)(this.connectionPool, 'stepSpeedOven', 'id', id);
        return result[0];
    }
    async loadStepsSpeedOvenByRecipeId(idRecipe) {
        const result = await (0, mysql_helper_1.getOne)(this.connectionPool, 'stepSpeedOven', 'recipeId', idRecipe);
        return result;
    }
    async updateStepSpeedOven(id, stepSpeedOvenData) {
        const setFields = Object.entries(stepSpeedOvenData)
            .map(value => `${value[0]} = ${isNaN(value[1]) ? `"${value[1]}"` : value[1]}`)
            .join(', ');
        const result = await (0, mysql_helper_1.updateAll)(this.connectionPool, 'stepSpeedOven', setFields, id);
        return result;
    }
}
exports.StepSpeedOvenMySqlRepository = StepSpeedOvenMySqlRepository;
