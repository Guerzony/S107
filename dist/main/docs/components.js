"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const schemas_1 = require("./schemas/");
const components_1 = require("./components/");
exports.default = {
    securitySchemes: {
        apiKeyAuth: schemas_1.apiKeyAuthSchema
    },
    badRequest: components_1.badRequest,
    serverError: components_1.serverError,
    unauthorized: components_1.unauthorized,
    notFound: components_1.notFound,
    forbidden: components_1.forbidden
};
