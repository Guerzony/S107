"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoadRecipeCookbookController = void 0;
const http_helper_1 = require("../../helpers/http-helper");
class LoadRecipeCookbookController {
    constructor(loadRecipeValidation, loadRecipeCookbook) {
        this.loadRecipeValidation = loadRecipeValidation;
        this.loadRecipeCookbook = loadRecipeCookbook;
    }
    async handle(httpRequest) {
        try {
            const error = this.loadRecipeValidation.validate(httpRequest.params);
            if (error)
                return (0, http_helper_1.badRequest)(error);
            const { id } = httpRequest.params;
            const response = await this.loadRecipeCookbook.loadRecipeCookbook(id);
            if (!response)
                return (0, http_helper_1.noContent)();
            return (0, http_helper_1.ok)({
                recipes: response
            });
        }
        catch (error) {
            return (0, http_helper_1.serverError)(error);
        }
    }
}
exports.LoadRecipeCookbookController = LoadRecipeCookbookController;
