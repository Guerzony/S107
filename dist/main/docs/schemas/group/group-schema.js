"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.groupSchema = void 0;
exports.groupSchema = {
    type: 'object',
    properties: {
        id: {
            type: 'integer'
        },
        menuId: {
            type: 'integer'
        },
        groupName: {
            type: 'string'
        },
        groupPosition: {
            type: 'number'
        },
        groupImage: {
            type: 'string'
        },
        preHeat: {
            type: 'number'
        },
        creationDate: {
            type: 'integer',
            format: 'date-time'
        },
        lastUpdate: {
            type: 'string'
        }
    },
    required: ['id', 'menuId', 'groupName', 'groupPosition', 'groupImage', 'preHeat', 'creationDate', 'lastUpdate']
};
