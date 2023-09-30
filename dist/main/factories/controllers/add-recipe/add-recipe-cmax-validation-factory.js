"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeAddRecipeCmaxValidation = void 0;
const validator_composite_1 = require("../../../../presentation/helpers/validators/validator-composite");
const required_field_validation_1 = require("../../../../presentation/helpers/validators/required-field-validation");
const makeAddRecipeCmaxValidation = () => {
    const validations = [];
    const fields = [
        'equipTypeId',
        'menuId',
        'recipeName',
        'recipePosition',
        'creationDate',
        'createdBy',
        'lastUpdate',
        'updatedBy',
        'preheatOn',
        'preheatTemp',
        'preheatFunction',
        'preheatSteamLevel',
        'weight',
        'entryTemp',
        'ingredientType',
        'dishType',
        'ingredients',
        'instructions',
        'origin'
    ];
    for (const field of fields) {
        validations.push(new required_field_validation_1.RequiredFieldValidaton(field));
    }
    return new validator_composite_1.ValidationComposite(validations);
};
exports.makeAddRecipeCmaxValidation = makeAddRecipeCmaxValidation;
