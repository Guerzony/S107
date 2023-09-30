"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeLoadRecipeCookbookValidation = void 0;
const validator_composite_1 = require("../../../../presentation/helpers/validators/validator-composite");
const required_field_validation_1 = require("../../../../presentation/helpers/validators/required-field-validation");
const makeLoadRecipeCookbookValidation = () => {
    const validations = [];
    const fields = ['id'];
    for (const field of fields) {
        validations.push(new required_field_validation_1.RequiredFieldValidaton(field));
    }
    return new validator_composite_1.ValidationComposite(validations);
};
exports.makeLoadRecipeCookbookValidation = makeLoadRecipeCookbookValidation;
