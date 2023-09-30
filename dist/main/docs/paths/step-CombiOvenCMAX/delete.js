"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteStepCombiOvenCMAX = void 0;
exports.deleteStepCombiOvenCMAX = {
    delete: {
        security: [{
                apiKeyAuth: []
            }],
        tags: ['StepCombiOvenCMAX'],
        summary: 'Delete a StepCombiOvenCMAX',
        requestBody: {
            required: true,
            content: {
                'application/json': {
                    schema: {
                        $ref: '#/schemas/deleteStepCombiOvenCMAX'
                    }
                }
            }
        },
        responses: {
            200: {
                description: 'StepCombiOvenCMAX deleted successfully',
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
