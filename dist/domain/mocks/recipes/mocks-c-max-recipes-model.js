"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mockCMaxRecipesModel = void 0;
const steps_1 = require("../steps");
const recipes = [
    {
        id: 0,
        enablePreHeat: true,
        preHeatTemperature: 180,
        preHeatFunction: false,
        preHeatHumidityLevel: 0,
        name: 'anyName',
        position: 0,
        createdAt: 'anyCreateAt',
        menuId: 0,
        steps: (0, steps_1.mockCMaxStepsModel)()
    }
];
const mockCMaxRecipesModel = () => recipes;
exports.mockCMaxRecipesModel = mockCMaxRecipesModel;
