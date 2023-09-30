"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateMenuError = void 0;
class CreateMenuError extends Error {
    constructor() {
        super('Error creating menu');
        this.name = 'CreateMenuError';
    }
}
exports.CreateMenuError = CreateMenuError;
