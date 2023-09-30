"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeAddCookbookBodyValidation = void 0;
const validator_composite_1 = require("../../../../presentation/helpers/validators/validator-composite");
const required_field_validation_1 = require("../../../../presentation/helpers/validators/required-field-validation");
const makeAddCookbookBodyValidation = () => {
    const validations = [];
    const fields = [
        'equipTypeId',
        'recipeName',
        'recipeImage',
        'creationDate',
        'createdBy',
        'lastUpdate',
        'updatedBy',
        'ingredientType',
        'dishType',
        'ingredients',
        'instructions',
        'weight',
        'entryTemp',
        'companyId',
        'menuId',
        'language',
        'origin',
        'preheatTemp',
        'preheatMode',
        'preheatSteam',
        'preheatType'
    ];
    for (const field of fields) {
        validations.push(new required_field_validation_1.RequiredFieldValidaton(field));
    }
    return new validator_composite_1.ValidationComposite(validations);
};
exports.makeAddCookbookBodyValidation = makeAddCookbookBodyValidation;
