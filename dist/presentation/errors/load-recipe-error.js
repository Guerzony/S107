"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoadRecipeError = void 0;
class LoadRecipeError extends Error {
    constructor() {
        super('There is no registered recipe');
        this.name = 'LoadRecipeError';
    }
}
exports.LoadRecipeError = LoadRecipeError;
