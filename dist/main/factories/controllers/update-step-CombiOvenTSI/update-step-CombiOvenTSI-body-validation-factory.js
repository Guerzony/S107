"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeUpdateStepCombiOvenTSIBodyValidation = void 0;
const validator_composite_1 = require("../../../../presentation/helpers/validators/validator-composite");
const required_field_validation_1 = require("../../../../presentation/helpers/validators/required-field-validation");
const makeUpdateStepCombiOvenTSIBodyValidation = () => {
    const validations = [];
    const fields = ['recipeId', 'menuId', 'equipTypeId', 'stepPosition', 'isActive', 'stepTemperature', 'steamPercentage', 'fanSpeed', 'steamInjection', 'endByTime', 'stepTime', 'stepInfo', 'probeTargetTemp', 'stepMode', 'stepsTurboGrill'];
    for (const field of fields) {
        validations.push(new required_field_validation_1.RequiredFieldValidaton(field));
    }
    return new validator_composite_1.ValidationComposite(validations);
};
exports.makeUpdateStepCombiOvenTSIBodyValidation = makeUpdateStepCombiOvenTSIBodyValidation;
