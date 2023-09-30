"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mockTsiRecipeModel = void 0;
const mocks_tsi_steps_model_1 = require("../steps/mocks-tsi-steps-model");
const recipes = [
    {
        fromPlatform: true,
        groupId: 0,
        imageBase64: null,
        imageId: 0,
        isFavorite: true,
        preheatMode: 'anyPreheatMode',
        preheatSteam: 0,
        preheatTemp: 0,
        preheatType: 'anyPreheatType',
        recipeCounter: 0,
        recipeId: 0,
        recipeName: 'anyRecipeName',
        recipePosition: 1,
        steps: []
    }
];
const mockTsiRecipeModel = (groupId, recipeId) => {
    return recipes.map(recipe => ({
        ...recipe,
        recipeId: recipeId !== null && recipeId !== void 0 ? recipeId : recipe.recipeId,
        groupId: groupId !== null && groupId !== void 0 ? groupId : recipe.groupId,
        steps: (0, mocks_tsi_steps_model_1.mockTsiStepsModel)(recipeId !== null && recipeId !== void 0 ? recipeId : recipe.recipeId)
    }));
};
exports.mockTsiRecipeModel = mockTsiRecipeModel;
