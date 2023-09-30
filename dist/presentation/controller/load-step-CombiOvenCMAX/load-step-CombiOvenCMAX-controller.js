"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoadStepCombiOvenCMAXController = void 0;
const http_helper_1 = require("../../helpers/http-helper");
class LoadStepCombiOvenCMAXController {
    constructor(loadStepCombiOvenCMAX, validation) {
        this.loadStepCombiOvenCMAX = loadStepCombiOvenCMAX;
        this.validation = validation;
    }
    async handle(httpRequest) {
        try {
            const error = this.validation.validate(httpRequest.params);
            if (error)
                return (0, http_helper_1.badRequest)(error);
            const { recipeId, stepFrom } = httpRequest.params;
            const response = await this.loadStepCombiOvenCMAX.loadStepCombiOvenCMAX(recipeId);
            if (!response) {
                return (0, http_helper_1.noContent)();
            }
            const filterSteps = response.filter((step) => {
                return step.stepFrom === stepFrom;
            });
            console.table(filterSteps);
            return (0, http_helper_1.ok)({ stepsCombiOvenCMAX: response });
        }
        catch (error) {
            return (0, http_helper_1.serverError)(error);
        }
    }
}
exports.LoadStepCombiOvenCMAXController = LoadStepCombiOvenCMAXController;
