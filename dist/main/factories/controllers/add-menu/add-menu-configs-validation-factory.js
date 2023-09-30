"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeAddMenuConfigsValidation = void 0;
const validator_composite_1 = require("../../../../presentation/helpers/validators/validator-composite");
const required_field_validation_1 = require("../../../../presentation/helpers/validators/required-field-validation");
const makeAddMenuConfigsValidation = () => {
    const validations = [];
    const fields = ['preHeat1', 'preHeat2', 'preHeat2Enabled', 'stabilizationTime', 'dateFormat', 'timeFormat', 'manualModeEnabled', 'favoritesEnabled', 'repeatRecipeEnabled', 'heatBrownMoreEnabled', 'temperatureUnit', 'weightUnit', 'theme', 'introduction', 'combiOvenEnabled', 'multipleCookingEnabled', 'technicookRecipesEnabled', 'editGroupsEnabled', 'operatorModeEnabled', 'turboGrillEnabled', 'enableRecipePreRunMessage', 'enableAutoImport'];
    for (const field of fields) {
        validations.push(new required_field_validation_1.RequiredFieldValidaton(field));
    }
    return new validator_composite_1.ValidationComposite(validations);
};
exports.makeAddMenuConfigsValidation = makeAddMenuConfigsValidation;
