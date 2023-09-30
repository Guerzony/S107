"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StoreParamsError = void 0;
class StoreParamsError extends Error {
    constructor() {
        super('Error in store parameters');
        this.name = 'StoreParametersError';
    }
}
exports.StoreParamsError = StoreParamsError;
