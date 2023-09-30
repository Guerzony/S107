"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatingRecipeError = void 0;
class CreatingRecipeError extends Error {
    constructor() {
        super('Error creating recipe');
        this.name = 'CreatingRecipeError';
    }
}
exports.CreatingRecipeError = CreatingRecipeError;
