"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuParamsError = void 0;
class MenuParamsError extends Error {
    constructor() {
        super('Error in menu parameters');
        this.name = 'MenuParametersError';
    }
}
exports.MenuParamsError = MenuParamsError;
