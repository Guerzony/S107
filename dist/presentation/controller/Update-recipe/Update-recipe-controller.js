"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateRecipeController = void 0;
const Update_recipe_error_1 = require("../../errors/Update-recipe-error");
const http_helper_1 = require("../../helpers/http-helper");
const errors_1 = require("../../errors");
class UpdateRecipeController {
    constructor(recipeValidation, recipeCmaxValidation, updateRecipe, updateRecipeCMAX) {
        this.recipeValidation = recipeValidation;
        this.recipeCmaxValidation = recipeCmaxValidation;
        this.updateRecipe = updateRecipe;
        this.updateRecipeCMAX = updateRecipeCMAX;
    }
    async handle(httpRequest) {
        try {
            if (!httpRequest.body.recipe)
                return (0, http_helper_1.badRequest)(new errors_1.MissingParamError('recipe'));
            const recipe = httpRequest.body.recipe;
            if (recipe.equipTypeId !== 4) {
                const error = this.recipeValidation.validate(httpRequest.body.recipe);
                if (error)
                    return (0, http_helper_1.badRequest)(error);
                const recipeResult = await this.updateRecipe.updateRecipe(recipe);
                if (!recipeResult)
                    return (0, http_helper_1.forbidden)(new Update_recipe_error_1.UpdateRecipeError());
                return (0, http_helper_1.ok)({});
            }
            else {
                const error = this.recipeCmaxValidation.validate(httpRequest.body.recipe);
                if (error)
                    return (0, http_helper_1.badRequest)(error);
                const recipeCmax = await this.updateRecipeCMAX.updateRecipeCMAX(recipe);
                if (!recipeCmax)
                    return (0, http_helper_1.forbidden)(new Update_recipe_error_1.UpdateRecipeError());
                return (0, http_helper_1.ok)({});
            }
        }
        catch (error) {
            return (0, http_helper_1.serverError)(error);
        }
    }
}
exports.UpdateRecipeController = UpdateRecipeController;
