"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.notFound = exports.download = exports.created = exports.noContent = exports.forbidden = exports.ok = exports.serverError = exports.unauthorized = exports.badRequest = void 0;
const errors_1 = require("../errors");
const resource_not_found_error_1 = require("../errors/resource-not-found-error");
const badRequest = (error) => ({
    statusCode: 400,
    body: error
});
exports.badRequest = badRequest;
const unauthorized = () => ({
    statusCode: 401,
    body: new errors_1.UnauthorizedError()
});
exports.unauthorized = unauthorized;
const serverError = (error) => ({
    statusCode: 500,
    body: new errors_1.ServerError(error.stack)
});
exports.serverError = serverError;
const ok = (data) => ({
    statusCode: 200,
    body: data
});
exports.ok = ok;
const forbidden = (error) => ({
    statusCode: 403,
    body: error
});
exports.forbidden = forbidden;
const noContent = () => ({
    statusCode: 204,
    body: null
});
exports.noContent = noContent;
const created = (data) => ({
    statusCode: 201,
    body: data
});
exports.created = created;
const download = (path, file) => ({
    statusCode: 200,
    body: null,
    download: path,
    file
});
exports.download = download;
const notFound = (resource) => ({
    statusCode: 404,
    body: new resource_not_found_error_1.ResourceNotFoundError(resource)
});
exports.notFound = notFound;
