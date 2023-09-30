"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mockSpeedOvensLegacyStepsModel = void 0;
const steps = [
    {
        id: 0,
        equipTypeId: 0,
        hotAirSpeed: 0,
        internalResistance: 0,
        isActive: true,
        microwaves: 0,
        menuId: 0,
        recipeId: 0,
        stepFrom: 'anyStepFrom',
        stepInfo: 'anyStepInfo',
        stepPosition: 0,
        stepTemperature: 0,
        stepTime: 'anyStepTime',
        tempIsPreheat: true
    }
];
const mockSpeedOvensLegacyStepsModel = () => steps;
exports.mockSpeedOvensLegacyStepsModel = mockSpeedOvensLegacyStepsModel;
