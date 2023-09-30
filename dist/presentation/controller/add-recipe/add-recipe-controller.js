"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddRecipeController = void 0;
const recipe_params_error_1 = require("../../errors/recipe-params-error");
const http_helper_1 = require("../../helpers/http-helper");
class AddRecipeController {
    constructor(recipeValidation, recipeCmaxValidation, addRecipe, addRecipeCMAX) {
        this.recipeValidation = recipeValidation;
        this.recipeCmaxValidation = recipeCmaxValidation;
        this.addRecipe = addRecipe;
        this.addRecipeCMAX = addRecipeCMAX;
    }
    async handle(httpRequest) {
        try {
            if (!httpRequest.body.recipe)
                return (0, http_helper_1.badRequest)(new recipe_params_error_1.RecipeParamsError());
            const recipeRequest = httpRequest.body.recipe;
            const recipeArrayResult = [];
            if (recipeRequest[0].equipTypeId !== 4) {
                for (const recipe of recipeRequest) {
                    const error = this.recipeValidation.validate(recipe);
                    if (error) {
                        return (0, http_helper_1.badRequest)(error);
                    }
                    recipeArrayResult.push(await this.addRecipe.addRecipe(recipe));
                }
                return (0, http_helper_1.created)(recipeArrayResult);
            }
            else {
                for (const recipe of recipeRequest) {
                    const error = this.recipeCmaxValidation.validate(recipe);
                    if (error) {
                        return (0, http_helper_1.badRequest)(error);
                    }
                    recipeArrayResult.push(await this.addRecipeCMAX.addRecipeCMAX(recipe));
                }
                return (0, http_helper_1.created)(recipeArrayResult);
            }
        }
        catch (error) {
            return (0, http_helper_1.serverError)(error);
        }
    }
}
exports.AddRecipeController = AddRecipeController;
