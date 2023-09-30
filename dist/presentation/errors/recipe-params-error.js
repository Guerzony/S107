"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecipeParamsError = void 0;
class RecipeParamsError extends Error {
    constructor() {
        super('Error in recipe parameters');
        this.name = 'RecipeParametersError';
    }
}
exports.RecipeParamsError = RecipeParamsError;
