"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeSignUpUserValidation = void 0;
const compare_fields_validation_1 = require("../../../../presentation/helpers/validators/compare-fields-validation");
const validator_composite_1 = require("../../../../presentation/helpers/validators/validator-composite");
const required_field_validation_1 = require("../../../../presentation/helpers/validators/required-field-validation");
const email_valdiation_1 = require("../../../../presentation/helpers/validators/email-valdiation");
const email_validator_adapter_1 = require("../../../../utils/email-validator-adapter");
const makeSignUpUserValidation = () => {
    const validations = [];
    const fields = ['userName', 'email', 'phone', 'password', 'passwordConfirmation', 'creationDate', 'language'];
    for (const field of fields) {
        validations.push(new required_field_validation_1.RequiredFieldValidaton(field));
    }
    validations.push(new compare_fields_validation_1.CompareFieldsValidation('password', 'passwordConfirmation'));
    validations.push(new email_valdiation_1.EmailValidaton(new email_validator_adapter_1.EmailValidatorAdapter(), 'email'));
    return new validator_composite_1.ValidationComposite(validations);
};
exports.makeSignUpUserValidation = makeSignUpUserValidation;
