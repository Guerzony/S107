"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorSchema = void 0;
exports.errorSchema = {
    type: 'object',
    properties: {
        error: {
            type: 'string'
        }
    },
    required: ['error']
};
