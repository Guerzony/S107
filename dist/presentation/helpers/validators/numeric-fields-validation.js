"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumericFieldValidation = void 0;
const errors_1 = require("../../errors");
class NumericFieldValidation {
    constructor(fieldName) {
        this.fieldName = fieldName;
    }
    validate(input) {
        if (isNaN(input[this.fieldName])) {
            return new errors_1.InvalidParamError(this.fieldName);
        }
    }
}
exports.NumericFieldValidation = NumericFieldValidation;
