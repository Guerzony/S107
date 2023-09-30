"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteRecipeController = void 0;
const errors_1 = require("../../errors");
const http_helper_1 = require("../../helpers/http-helper");
class DeleteRecipeController {
    constructor(recipeValidation, deleteRecipe) {
        this.recipeValidation = recipeValidation;
        this.deleteRecipe = deleteRecipe;
    }
    async handle(httpRequest) {
        try {
            const { idArray, equipType } = httpRequest.body;
            for (const id of idArray) {
                const error = this.recipeValidation.validate({ id, equipType });
                if (error)
                    return (0, http_helper_1.badRequest)(new errors_1.MissingParamError('id'));
                if (typeof (id) === 'undefined')
                    return (0, http_helper_1.badRequest)(new errors_1.InvalidParamError('id'));
                await this.deleteRecipe.deleteRecipe(id, equipType);
            }
            return (0, http_helper_1.ok)({});
        }
        catch (error) {
            return (0, http_helper_1.serverError)(error);
        }
    }
}
exports.DeleteRecipeController = DeleteRecipeController;
