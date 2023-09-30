"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecipeParametersError = void 0;
class RecipeParametersError extends Error {
    constructor() {
        super('Error in recipe parameters');
        this.name = 'RecipeParametersError';
    }
}
exports.RecipeParametersError = RecipeParametersError;
