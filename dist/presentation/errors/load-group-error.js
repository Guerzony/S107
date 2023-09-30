"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoadGroupError = void 0;
class LoadGroupError extends Error {
    constructor() {
        super('There is no registered group');
        this.name = 'LoadGroupError';
    }
}
exports.LoadGroupError = LoadGroupError;
