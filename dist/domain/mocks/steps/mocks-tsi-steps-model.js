"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mockTsiStepsModel = void 0;
const steps = [
    {
        endByTime: true,
        fanSpeed: 5,
        isActive: true,
        probeTargetTemp: 30,
        recipeId: 0,
        steamPercentage: 100,
        stepId: 1,
        stepInfo: 'anyStepInfo',
        stepMode: 'anyStepModel',
        stepPosition: 1,
        stepTemperature: 180,
        stepTime: 1
    },
    {
        endByTime: true,
        fanSpeed: 5,
        isActive: true,
        probeTargetTemp: 30,
        recipeId: 0,
        steamPercentage: 100,
        stepId: 2,
        stepInfo: 'anyStepInfo',
        stepMode: 'anyStepModel',
        stepPosition: 1,
        stepTemperature: 180,
        stepTime: 1
    }
];
const mockTsiStepsModel = (recipeId) => {
    return steps.map(step => ({ ...step, recipeId: recipeId !== null && recipeId !== void 0 ? recipeId : step.recipeId }));
};
exports.mockTsiStepsModel = mockTsiStepsModel;
