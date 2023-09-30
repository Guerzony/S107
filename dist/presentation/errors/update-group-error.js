"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateGroupError = void 0;
class UpdateGroupError extends Error {
    constructor() {
        super('Unable to Update the group');
        this.name = 'UpdateGroupError';
    }
}
exports.UpdateGroupError = UpdateGroupError;
