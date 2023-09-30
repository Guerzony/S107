"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuConfigParametersError = void 0;
class MenuConfigParametersError extends Error {
    constructor() {
        super('Error in menu config parameters');
        this.name = 'MenuConfigParametersError';
    }
}
exports.MenuConfigParametersError = MenuConfigParametersError;
