"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenerationValidation = void 0;
const errors_1 = require("../../errors");
class GenerationValidation {
    validate(input) {
        const generation = input.generation;
        if (typeof generation === 'string' && (generation === 'A' || generation === 'B'))
            return null;
        else
            return new errors_1.InvalidParamError('generation');
    }
}
exports.GenerationValidation = GenerationValidation;
