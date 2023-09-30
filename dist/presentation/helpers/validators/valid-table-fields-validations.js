"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidTableFieldValidation = void 0;
const errors_1 = require("../../errors");
class ValidTableFieldValidation {
    constructor(tableField) {
        this.tableFields = tableField;
    }
    validate(input) {
        const fieldName = Object.keys(input)[0];
        if (!this.tableFields.includes(fieldName)) {
            return new errors_1.InvalidParamError(fieldName);
        }
    }
}
exports.ValidTableFieldValidation = ValidTableFieldValidation;
