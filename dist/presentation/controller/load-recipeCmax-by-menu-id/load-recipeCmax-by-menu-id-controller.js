"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoadRecipeCmaxController = void 0;
const http_helper_1 = require("../../helpers/http-helper");
class LoadRecipeCmaxController {
    constructor(loadRecipeValidation, loadRecipeCMAX) {
        this.loadRecipeValidation = loadRecipeValidation;
        this.loadRecipeCMAX = loadRecipeCMAX;
    }
    async handle(httpRequest) {
        try {
            const error = this.loadRecipeValidation.validate(httpRequest.params);
            if (error)
                return (0, http_helper_1.badRequest)(error);
            const { id } = httpRequest.params;
            const recipeCMAX = await this.loadRecipeCMAX.loadRecipeCMAX(id);
            if (!recipeCMAX)
                return (0, http_helper_1.noContent)();
            return (0, http_helper_1.ok)({
                recipes: recipeCMAX
            });
        }
        catch (error) {
            return (0, http_helper_1.serverError)(error);
        }
    }
}
exports.LoadRecipeCmaxController = LoadRecipeCmaxController;
