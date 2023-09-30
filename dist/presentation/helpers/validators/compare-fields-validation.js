"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompareFieldsValidation = void 0;
const errors_1 = require("../../errors");
class CompareFieldsValidation {
    constructor(fieldName, fieldConfirmationName) {
        this.fieldName = fieldName;
        this.fieldConfirmationName = fieldConfirmationName;
    }
    validate(input) {
        if (input[this.fieldName] !== input[this.fieldConfirmationName]) {
            return new errors_1.InvalidParamError(this.fieldConfirmationName);
        }
    }
}
exports.CompareFieldsValidation = CompareFieldsValidation;
