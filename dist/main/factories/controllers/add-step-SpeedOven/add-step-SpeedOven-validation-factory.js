"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeAddStepSpeedOvenValidation = void 0;
const validator_composite_1 = require("../../../../presentation/helpers/validators/validator-composite");
const required_field_validation_1 = require("../../../../presentation/helpers/validators/required-field-validation");
const makeAddStepSpeedOvenValidation = () => {
    const validations = [];
    const fields = ['recipeId', 'menuId', 'equipTypeId', 'stepPosition', 'isActive', 'stepTemperature', 'tempIsPreheat', 'stepTime', 'hotAirSpeed', 'microwaves', 'internalResistance', 'stepInfo'];
    for (const field of fields) {
        validations.push(new required_field_validation_1.RequiredFieldValidaton(field));
    }
    return new validator_composite_1.ValidationComposite(validations);
};
exports.makeAddStepSpeedOvenValidation = makeAddStepSpeedOvenValidation;
