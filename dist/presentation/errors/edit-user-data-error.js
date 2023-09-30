"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EditUserDataError = void 0;
class EditUserDataError extends Error {
    constructor() {
        super('Unable to edit the user data');
        this.name = 'EditUserDataError';
    }
}
exports.EditUserDataError = EditUserDataError;
