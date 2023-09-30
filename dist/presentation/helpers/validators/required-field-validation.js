"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequiredFieldValidaton = void 0;
const errors_1 = require("../../errors");
class RequiredFieldValidaton {
    constructor(fieldName) {
        this.fieldName = fieldName;
    }
    validate(input) {
        if (input[this.fieldName] === undefined || input[this.fieldName] === null) {
            return new errors_1.MissingParamError(this.fieldName);
        }
    }
}
exports.RequiredFieldValidaton = RequiredFieldValidaton;
