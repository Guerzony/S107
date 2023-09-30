"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addMenuSchema = void 0;
exports.addMenuSchema = {
    type: 'object',
    properties: {
        id: {
            type: 'integer',
            readOnly: true
        },
        equipTypeId: {
            type: 'integer'
        },
        companyId: {
            type: 'integer'
        },
        menuName: {
            type: 'string'
        },
        creationDate: {
            type: 'string',
            format: 'date-time'
        },
        lastUpdate: {
            type: 'string',
            format: 'date-time'
        },
        menuVersion: {
            type: 'number'
        },
        deletionDate: {
            type: 'integer',
            format: 'date-time'
        },
        userId: {
            type: 'integer'
        },
        deletedBy: {
            type: 'string'
        },
        language: {
            type: 'string'
        }
    },
    required: ['menuName', 'equipTypeId', 'companyId', 'creationDate', 'lastUpdate', 'menuVersion', 'deletionDate', 'userId', 'deletedBy', 'language']
};
