"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateGroupError = void 0;
class CreateGroupError extends Error {
    constructor() {
        super('Error creating group');
        this.name = 'CreateGroupError';
    }
}
exports.CreateGroupError = CreateGroupError;
