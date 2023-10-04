"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeLoadHasUpdateUserValidation = void 0;
const required_field_validation_1 = require("../../../../presentation/helpers/validators/required-field-validation");
const validator_composite_1 = require("../../../../presentation/helpers/validators/validator-composite");
const makeLoadHasUpdateUserValidation = () => {
    const validations = [];
    const fields = ['idUser', 'iokPin'];
    for (const field of fields) {
        validations.push(new required_field_validation_1.RequiredFieldValidaton(field));
    }
    return new validator_composite_1.ValidationComposite(validations);
};
exports.makeLoadHasUpdateUserValidation = makeLoadHasUpdateUserValidation;
