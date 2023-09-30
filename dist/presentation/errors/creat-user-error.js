"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserError = void 0;
class CreateUserError extends Error {
    constructor() {
        super('Error creating user');
        this.name = 'CreateUserError';
    }
}
exports.CreateUserError = CreateUserError;
