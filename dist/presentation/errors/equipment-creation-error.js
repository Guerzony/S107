"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreationError = void 0;
class UserCreationError extends Error {
    constructor() {
        super('User creation error.');
        this.name = 'UserCreationError';
    }
}
exports.UserCreationError = UserCreationError;
