"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serverError = void 0;
exports.serverError = {
    description: 'Erro interno no servidor',
    content: {
        'application/json': {
            schema: {
                $ref: '#/schemas/error'
            }
        }
    }
};
