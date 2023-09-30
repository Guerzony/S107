"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteEquipment = void 0;
exports.deleteEquipment = {
    delete: {
        security: [{
                apiKeyAuth: []
            }],
        tags: ['Equipment'],
        summary: 'Delete an equipment',
        parameters: [{
                name: 'id',
                in: 'path',
                required: true,
                description: 'Id of the equipment',
                schema: {
                    type: 'integer',
                    format: 'int64',
                    minimum: 1
                }
            }],
        responses: {
            200: {
                description: 'Equipment created successfully',
                content: {
                    'application/json': {
                        schema: {}
                    }
                }
            },
            400: {
                $ref: '#/components/badRequest'
            },
            403: {
                $ref: '#/components/forbidden'
            },
            500: {
                $ref: '#/components/serverError'
            }
        }
    }
};
