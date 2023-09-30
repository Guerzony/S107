"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorToDelete = void 0;
class ErrorToDelete extends Error {
    constructor() {
        super('Error to delete');
        this.name = 'ErrorToDelete';
    }
}
exports.ErrorToDelete = ErrorToDelete;
