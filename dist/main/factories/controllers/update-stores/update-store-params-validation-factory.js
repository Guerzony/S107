"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeUpdateStoreParamsValidation = void 0;
const validator_composite_1 = require("../../../../presentation/helpers/validators/validator-composite");
const required_field_validation_1 = require("../../../../presentation/helpers/validators/required-field-validation");
const numeric_fields_validation_1 = require("../../../../presentation/helpers/validators/numeric-fields-validation");
const makeUpdateStoreParamsValidation = () => {
    const validations = [];
    const fields = ['id'];
    for (const field of fields) {
        validations.push(new required_field_validation_1.RequiredFieldValidaton(field));
        validations.push(new numeric_fields_validation_1.NumericFieldValidation(field));
    }
    return new validator_composite_1.ValidationComposite(validations);
};
exports.makeUpdateStoreParamsValidation = makeUpdateStoreParamsValidation;
