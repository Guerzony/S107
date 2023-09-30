"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeLoadPermissionTypesValidation = void 0;
const required_field_validation_1 = require("../../../../presentation/helpers/validators/required-field-validation");
const validator_composite_1 = require("../../../../presentation/helpers/validators/validator-composite");
const makeLoadPermissionTypesValidation = () => {
    const validations = [];
    const fields = ['companyTypeId', 'userTypeId'];
    for (const field of fields) {
        validations.push(new required_field_validation_1.RequiredFieldValidaton(field));
    }
    return new validator_composite_1.ValidationComposite(validations);
};
exports.makeLoadPermissionTypesValidation = makeLoadPermissionTypesValidation;
