"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiKeyAuthSchema = void 0;
exports.apiKeyAuthSchema = {
    type: 'apiKey',
    in: 'header',
    name: 'x-access-token'
};
