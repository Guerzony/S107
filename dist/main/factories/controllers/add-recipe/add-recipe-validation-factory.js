"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeAddRecipeValidation = void 0;
const validator_composite_1 = require("../../../../presentation/helpers/validators/validator-composite");
const required_field_validation_1 = require("../../../../presentation/helpers/validators/required-field-validation");
const makeAddRecipeValidation = () => {
    const validations = [];
    const fields = ['equipTypeId', 'groupId', 'menuId', 'recipeName', 'recipePosition', 'recipeImage', 'creationDate', 'createdBy', 'lastUpdate', 'updatedBy', 'isFavorite', 'heatMore', 'brownMore', 'heatBrownMore', 'ingredientType', 'dishType', 'ingredients', 'instructions', 'weight', 'entryTemp', 'preheatTemp', 'origin', 'preheatMode', 'preheatSteam', 'preheatType'];
    for (const field of fields) {
        validations.push(new required_field_validation_1.RequiredFieldValidaton(field));
    }
    return new validator_composite_1.ValidationComposite(validations);
};
exports.makeAddRecipeValidation = makeAddRecipeValidation;
