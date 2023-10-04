"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeLoadUserByCompanyIdValidation = void 0;
const numeric_fields_validation_1 = require("../../../../presentation/helpers/validators/numeric-fields-validation");
const required_field_validation_1 = require("../../../../presentation/helpers/validators/required-field-validation");
const validator_composite_1 = require("../../../../presentation/helpers/validators/validator-composite");
const makeLoadUserByCompanyIdValidation = () => {
    const validations = [];
    const fields = ['companyId', 'userId'];
    for (const field of fields) {
        validations.push(new required_field_validation_1.RequiredFieldValidaton(field));
        validations.push(new numeric_fields_validation_1.NumericFieldValidation(field));
    }
    return new validator_composite_1.ValidationComposite(validations);
};
exports.makeLoadUserByCompanyIdValidation = makeLoadUserByCompanyIdValidation;
