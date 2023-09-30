"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExportSpeedOvensFile = void 0;
exports.ExportSpeedOvensFile = {
    get: {
        // security: [{
        //   apiKeyAuth: []
        // }],
        tags: ['ExportFile'],
        summary: 'Retorna um arquivo BRAVO.zip para download conforme o modelo',
        parameters: [{
                name: 'equipmentModel',
                in: 'path',
                description: 'Modelo do equipamento',
                required: true,
                schema: {
                    type: 'string',
                    enum: ['COPA', 'ROCKET', 'FIT', 'FORZA', 'COPA SM']
                }
            }, {
                name: 'menuId',
                in: 'path',
                required: true,
                description: 'ID do menu',
                schema: {
                    type: 'integer',
                    format: 'int64',
                    minimum: 1
                }
            }],
        responses: {
            200: {
                description: 'Arquivo baixado com sucesso',
                content: {
                    'application/octet-stream': {
                        schema: {
                            type: 'string',
                            format: 'binary'
                        }
                    }
                }
            },
            400: {
                $ref: '#/components/badRequest'
            },
            404: {
                $ref: '#/components/noFound'
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
