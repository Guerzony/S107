"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapCreatedRecipe = void 0;
const mapCreatedRecipe = (addedRecipe, addedRecipeId) => {
    return Object.assign({}, addedRecipe, { id: addedRecipeId });
};
exports.mapCreatedRecipe = mapCreatedRecipe;
