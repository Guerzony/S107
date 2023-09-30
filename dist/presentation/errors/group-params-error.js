"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupParamsError = void 0;
class GroupParamsError extends Error {
    constructor() {
        super('Error in group parameters');
        this.name = 'GroupParametersError';
    }
}
exports.GroupParamsError = GroupParamsError;
