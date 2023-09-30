"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteRecipeCmaxSchema = void 0;
exports.deleteRecipeCmaxSchema = {
    type: 'object',
    properties: {
        idArray: {
            type: 'array',
            items: {
                allOf: [{
                        type: 'number'
                    }]
            }
        },
        equipType: {
            type: 'integer'
        },
    },
    required: ['idArray', 'equipType']
};
