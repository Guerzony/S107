"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequiredUpdateFieldValidaton = void 0;
const errors_1 = require("../../errors");
class RequiredUpdateFieldValidaton {
    validate(input) {
        const fields = Object.keys(input);
        for (const field of fields) {
            if (input[field] === undefined || input[field] === null) {
                return new errors_1.MissingParamError(field);
            }
        }
    }
}
exports.RequiredUpdateFieldValidaton = RequiredUpdateFieldValidaton;
