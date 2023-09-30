"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoadStepsSpeedOvenByRecipeIdController = void 0;
const http_helper_1 = require("../../helpers/http-helper");
class LoadStepsSpeedOvenByRecipeIdController {
    constructor(loadStepsSpeedOvenByRecipeId, validation) {
        this.loadStepsSpeedOvenByRecipeId = loadStepsSpeedOvenByRecipeId;
        this.validation = validation;
    }
    async handle(httpRequest) {
        try {
            const error = this.validation.validate(httpRequest.params);
            if (error)
                return (0, http_helper_1.badRequest)(error);
            const { recipeId, stepFrom } = httpRequest.params;
            const response = await this.loadStepsSpeedOvenByRecipeId.loadStepsSpeedOvenByRecipeId(recipeId);
            if (!response) {
                return (0, http_helper_1.noContent)();
            }
            const filterSteps = response.filter((step) => {
                return step.stepFrom === stepFrom;
            });
            return (0, http_helper_1.ok)({ stepsSpeedOven: filterSteps });
        }
        catch (error) {
            return (0, http_helper_1.serverError)(error);
        }
    }
}
exports.LoadStepsSpeedOvenByRecipeIdController = LoadStepsSpeedOvenByRecipeIdController;
