"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = void 0;
exports.deleteUser = {
    delete: {
        security: [{
            apiKeyAuth: []
        }],
        tags: ['User'],
        summary: 'Delete an user',
        parameters: [{
            name: 'id',
            in: 'path',
            required: true,
            description: 'Id of the user',
            schema: {
                type: 'integer',
                format: 'int64',
                minimum: 1
            }
        }],
        responses: {
            200: {
                description: 'User created successfully',
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
