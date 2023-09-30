"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mockSpeedOvensLegacyRecipeModel = void 0;
const mocks_speed_ovens_legacy_steps_model_1 = require("../steps/mocks-speed-ovens-legacy-steps-model");
const recipes = [
    {
        brownMore: 0,
        createdBy: 0,
        creationDate: 'anyCreationData',
        dishType: 0,
        entryTemp: 0,
        equipTypeId: 0,
        groupId: 0,
        heatBrownMore: 0,
        heatMore: 0,
        id: 0,
        ingredients: 'anyIngredients',
        ingredientType: 0,
        instructions: 'anyInstructions',
        isFavorite: false,
        lastUpdate: 'anyLastUpdate',
        menuId: 0,
        origin: 'anyOrigin',
        preheatMode: 'anyPreHeatMode',
        preheatSteam: 0,
        preheatTemp: 0,
        preheatType: 'anyPreHeatType',
        recipeImage: 'anyRecipeImage',
        recipeName: 'anyRecipeName',
        recipePosition: 0,
        updatedBy: 0,
        weight: 0,
        steps: (0, mocks_speed_ovens_legacy_steps_model_1.mockSpeedOvensLegacyStepsModel)()
    }
];
const mockSpeedOvensLegacyRecipeModel = () => recipes;
exports.mockSpeedOvensLegacyRecipeModel = mockSpeedOvensLegacyRecipeModel;
