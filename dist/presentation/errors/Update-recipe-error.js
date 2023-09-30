"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateRecipeError = void 0;
class UpdateRecipeError extends Error {
    constructor() {
        super('Error Updateing recipe');
        this.name = 'UpdateRecipeError';
    }
}
exports.UpdateRecipeError = UpdateRecipeError;
