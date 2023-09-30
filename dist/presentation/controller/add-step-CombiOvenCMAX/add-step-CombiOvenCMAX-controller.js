"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddStepCombiOvenCMAXController = void 0;
const create_step_CombiOvenCMAX_error_1 = require("../../errors/create-step-CombiOvenCMAX-error");
const step_CombiOvenCMAX_params_error_1 = require("../../errors/step-CombiOvenCMAX-params-error");
const http_helper_1 = require("../../helpers/http-helper");
class AddStepCombiOvenCMAXController {
    constructor(stepCombiOvenCMAXValidation, addStepCombiOvenCMAX) {
        this.stepCombiOvenCMAXValidation = stepCombiOvenCMAXValidation;
        this.addStepCombiOvenCMAX = addStepCombiOvenCMAX;
    }
    async handle(httpRequest) {
        try {
            if (!httpRequest.body.stepCombiOvenCMAX)
                return (0, http_helper_1.badRequest)(new step_CombiOvenCMAX_params_error_1.StepCombiOvenCMAXParamsError());
            const stepCombiOvenCMAXRequest = httpRequest.body.stepCombiOvenCMAX;
            const error = this.stepCombiOvenCMAXValidation.validate(stepCombiOvenCMAXRequest);
            if (error) {
                return (0, http_helper_1.badRequest)(error);
            }
            const stepCombiOvenCMAX = await this.addStepCombiOvenCMAX.addStepCombiOvenCMAX(stepCombiOvenCMAXRequest);
            return (0, http_helper_1.created)(stepCombiOvenCMAX);
        }
        catch (error) {
            return (0, http_helper_1.serverError)(new create_step_CombiOvenCMAX_error_1.CreateStepCombiOvenCMAXError());
        }
    }
}
exports.AddStepCombiOvenCMAXController = AddStepCombiOvenCMAXController;
