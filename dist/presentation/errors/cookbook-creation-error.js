"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CookbookCreationError = void 0;
class CookbookCreationError extends Error {
    constructor() {
        super('Cookbook creation error.');
        this.name = 'CookbookCreationError';
    }
}
exports.CookbookCreationError = CookbookCreationError;
