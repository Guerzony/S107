"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCookbookSchema = void 0;
exports.deleteCookbookSchema = {
    type: 'object',
    properties: {
        idArray: {
            type: 'array',
            items: {
                allOf: [{
                        type: 'number'
                    }]
            }
        }
    },
    required: ['idArray']
};
