"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResourceNotFoundError = void 0;
class ResourceNotFoundError extends Error {
    constructor(resource) {
        super(`Resource ${resource.name} = ${resource.value} was not found`);
        this.name = 'ResourceNotFoundError';
    }
}
exports.ResourceNotFoundError = ResourceNotFoundError;
