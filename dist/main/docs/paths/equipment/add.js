"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addUser = void 0;
exports.addUser = {
    post: {
        tags: ['User'],
        summary: 'Create an user(oven)',
        parameters: [{
            name: 'pin',
            in: 'path',
            required: true,
            description: 'Pin security',
            schema: {
                type: 'string'
            }
        }],
        requestBody: {
            required: true,
            content: {
                'application/json': {
                    schema: {
                        $ref: '#/schemas/addUserRequest'
                    }
                }
            }
        },
        responses: {
            201: {
                description: 'User created successfully',
                content: {
                    'application/json': {
                        schema: {
                            $ref: '#/schemas/addUserResponse'
                        }
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
