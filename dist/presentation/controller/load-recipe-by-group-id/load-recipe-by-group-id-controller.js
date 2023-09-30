"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoadRecipeController = void 0;
const http_helper_1 = require("../../helpers/http-helper");
class LoadRecipeController {
    constructor(loadRecipeValidation, loadRecipe) {
        this.loadRecipeValidation = loadRecipeValidation;
        this.loadRecipe = loadRecipe;
    }
    async handle(httpRequest) {
        try {
            const error = this.loadRecipeValidation.validate(httpRequest.params);
            if (error)
                return (0, http_helper_1.badRequest)(error);
            const { id } = httpRequest.params;
            const recipe = await this.loadRecipe.loadRecipe(id);
            if (!recipe)
                return (0, http_helper_1.noContent)();
            return (0, http_helper_1.ok)({
                recipes: recipe
            });
        }
        catch (error) {
            return (0, http_helper_1.serverError)(error);
        }
    }
}
exports.LoadRecipeController = LoadRecipeController;
