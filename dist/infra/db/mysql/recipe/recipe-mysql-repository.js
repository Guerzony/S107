"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecipeMySqlRepository = void 0;
const recipe_mysql_repository_helper_1 = require("./recipe-mysql-repository-helper");
const recipeCMAX_mysql_repository_helper_1 = require("./recipeCMAX-mysql-repository-helper");
const mysql_helper_1 = require("../mysql-helper");
const query_helpers_1 = require("../query-helpers");
class RecipeMySqlRepository {
    constructor(pool) {
        this.connectionPool = pool;
    }
    async loadCMaxRecipes(menuId) {
        const recipesResult = await (0, mysql_helper_1.customGet)(this.connectionPool, (0, query_helpers_1.loadCMaxRecipesQuery)(menuId));
        const stepsResult = await (0, mysql_helper_1.customGet)(this.connectionPool, (0, query_helpers_1.loadCMaxStepsQuery)(menuId));
        const recipes = recipesResult.map((recipe) => ({
            ...recipe,
            steps: stepsResult.filter((step) => step.recipeId === recipe.id)
        }));
        return recipes;
    }
    async loadRecipeCMAXById(id) {
        const result = await (0, mysql_helper_1.getOne)(this.connectionPool, 'cmaxRecipe', 'id', id);
        return result[0];
    }
    async loadRecipeById(id) {
        const result = await (0, mysql_helper_1.getOne)(this.connectionPool, 'recipe', 'id', id);
        return result[0];
    }
    async updateRecipeCMAX(recipeData) {
        const setFields = Object.entries(recipeData)
            .map(value => `${value[0]} = ${value[1] ? `"${value[1]}"` : value[1]}`)
            .join(', ');
        const recipeCmax = await (0, mysql_helper_1.updateAll)(this.connectionPool, 'cmaxRecipe', setFields, recipeData.id);
        return recipeCmax;
    }
    async updateRecipe(recipeData) {
        const setFields = Object.entries(recipeData)
            .map(value => `${value[0]} = ${isNaN(value[1]) ? `"${value[1]}"` : value[1]}`)
            .join(', ');
        const recipe = await (0, mysql_helper_1.updateAll)(this.connectionPool, 'recipe', setFields, recipeData.id);
        return recipe;
    }
    async addRecipeCMAX(recipeData) {
        const result = await (0, mysql_helper_1.insertOne)(this.connectionPool, 'cmaxRecipe', recipeData);
        return (0, recipeCMAX_mysql_repository_helper_1.mapCreatedRecipeCMAX)(recipeData, result.insertId);
    }
    async addRecipe(recipeData) {
        const result = await (0, mysql_helper_1.insertOne)(this.connectionPool, 'recipe', recipeData);
        return (0, recipe_mysql_repository_helper_1.mapCreatedRecipe)(recipeData, result.insertId);
    }
    async deleteRecipeCMAX(id) {
        await (0, mysql_helper_1.deleteById)(this.connectionPool, 'cmaxRecipe', 'id', id);
    }
    async loadRecipeCMAX(idMenu) {
        const result = await (0, mysql_helper_1.getOne)(this.connectionPool, 'cmaxRecipe', 'menuId', idMenu);
        for (let i = 0; i < result.length; i++) {
            const recipeCount = await (0, mysql_helper_1.customGet)(this.connectionPool, `SELECT COUNT(*) as count FROM stepCombiOvenCMAX WHERE isActive = true && recipeId = ${result[i].id}`);
            const temp = { stepCount: recipeCount[0].count + 1 };
            Object.assign(result[i], temp);
        }
        return result;
    }
    async loadRecipe(idGroup) {
        const result = await (0, mysql_helper_1.getOne)(this.connectionPool, 'recipe', 'groupId', idGroup);
        return result;
    }
    async loadStepCombiOvenCMAX(idRecipe) {
        const result = await (0, mysql_helper_1.getOne)(this.connectionPool, 'stepCombiOvenCMAX', 'recipeId', idRecipe);
        return result;
    }
    async loadStepCombiOvenTSI(idRecipe) {
        const result = await (0, mysql_helper_1.getOne)(this.connectionPool, 'stepCombiOvenTSI', 'recipeId', idRecipe);
        return result;
    }
    async loadStepSpeedOven(idRecipe) {
        const result = await (0, mysql_helper_1.getOne)(this.connectionPool, 'stepSpeedOven', 'recipeId', idRecipe);
        return result;
    }
    async deleteRecipe(id) {
        await (0, mysql_helper_1.deleteById)(this.connectionPool, 'recipe', 'id', id);
    }
    async deleteCombiOvenCMAX(id) {
        await (0, mysql_helper_1.deleteById)(this.connectionPool, 'stepCombiOvenCMAX', 'recipeId', id);
    }
    async deleteCombiOvenTSI(id) {
        await (0, mysql_helper_1.deleteById)(this.connectionPool, 'stepCombiOvenTSI', 'recipeId', id);
    }
    async deleteSpeedOven(id) {
        await (0, mysql_helper_1.deleteById)(this.connectionPool, 'stepSpeedOven', 'recipeId', id);
    }
    async loadSpeedOvensRecipes(menuId) {
        const recipeQuery = (0, query_helpers_1.loadSpeedOvensRecipesQuery)(menuId);
        const recipesResult = await (0, mysql_helper_1.customGet)(this.connectionPool, recipeQuery);
        const stepsQuery = (0, query_helpers_1.loadSpeedOvensStepsQuery)(menuId);
        const stepsResult = await (0, mysql_helper_1.customGet)(this.connectionPool, stepsQuery);
        const recipes = recipesResult.map((recipe) => ({
            ...recipe,
            passos: stepsResult.filter((step) => step.recipeId === recipe.id)
        }));
        return recipes;
    }
}
exports.RecipeMySqlRepository = RecipeMySqlRepository;
