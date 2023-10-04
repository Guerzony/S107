"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUser = void 0;
exports.updateUser = {
    put: {
        security: [{
            apiKeyAuth: []
        }],
        tags: ['User'],
        summary: 'Update an user',
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
        requestBody: {
            required: true,
            content: {
                'application/json': {
                    schema: {
                        type: 'object',
                        properties: {
                            user: {
                                $ref: '#/schemas/user'
                            }
                        }
                    }
                }
            }
        },
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
