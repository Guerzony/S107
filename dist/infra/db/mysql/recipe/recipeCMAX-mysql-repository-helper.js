"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapCreatedRecipeCMAX = void 0;
const mapCreatedRecipeCMAX = (addedRecipe, addedRecipeId) => {
    return Object.assign({}, addedRecipe, { id: addedRecipeId });
};
exports.mapCreatedRecipeCMAX = mapCreatedRecipeCMAX;
