"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteRecipeSchema = void 0;
exports.deleteRecipeSchema = {
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
