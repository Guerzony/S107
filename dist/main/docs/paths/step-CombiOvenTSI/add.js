"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addStepCombiOvenTSI = void 0;
exports.addStepCombiOvenTSI = {
    post: {
        security: [{
                apiKeyAuth: []
            }],
        tags: ['StepCombiOvenTSI'],
        summary: 'Create a StepCombiOvenTSI',
        requestBody: {
            required: true,
            content: {
                'application/json': {
                    schema: {
                        type: 'object',
                        properties: {
                            stepCombiOvenTSI: {
                                $ref: '#/schemas/stepCombiOvenTSI'
                            }
                        }
                    }
                }
            }
        },
        responses: {
            201: {
                description: 'StepCombiOvenTSI created successfully',
                content: {
                    'application/json': {
                        schema: {
                            $ref: '#/schemas/stepCombiOvenTSI'
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
