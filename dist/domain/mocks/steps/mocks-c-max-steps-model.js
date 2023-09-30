"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mockCMaxStepsModel = void 0;
const steps = [
    {
        id: 0,
        isEnable: true,
        chamberTemperature: 180,
        probeTemperature: 50,
        stepTime: 60,
        isProbeControl: false,
        function: false,
        humidityLevel: 0,
        injectionTime: 0,
        enableDumper: false,
        position: 0,
        createdAt: 'anyCreatedAtS',
        recipeId: 0
    }
];
const mockCMaxStepsModel = () => steps;
exports.mockCMaxStepsModel = mockCMaxStepsModel;
