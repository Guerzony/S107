"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddStepCombiOvenTSIController = void 0;
const create_step_CombiOvenTSI_error_1 = require("../../errors/create-step-CombiOvenTSI-error");
const step_CombiOvenTSI_params_error_1 = require("../../errors/step-CombiOvenTSI-params-error");
const http_helper_1 = require("../../helpers/http-helper");
class AddStepCombiOvenTSIController {
    constructor(stepCombiOvenTSIValidation, addStepCombiOvenTSI) {
        this.stepCombiOvenTSIValidation = stepCombiOvenTSIValidation;
        this.addStepCombiOvenTSI = addStepCombiOvenTSI;
    }
    async handle(httpRequest) {
        try {
            if (!httpRequest.body.stepCombiOvenTSI)
                return (0, http_helper_1.badRequest)(new step_CombiOvenTSI_params_error_1.StepCombiOvenTSIParamsError());
            const stepCombiOvenTSIRequest = httpRequest.body.stepCombiOvenTSI;
            const error = this.stepCombiOvenTSIValidation.validate(stepCombiOvenTSIRequest);
            if (error) {
                return (0, http_helper_1.badRequest)(error);
            }
            const stepCombiOvenTSI = await this.addStepCombiOvenTSI.addStepCombiOvenTSI(stepCombiOvenTSIRequest);
            return (0, http_helper_1.created)(stepCombiOvenTSI);
        }
        catch (error) {
            return (0, http_helper_1.serverError)(new create_step_CombiOvenTSI_error_1.CreateStepCombiOvenTSIError());
        }
    }
}
exports.AddStepCombiOvenTSIController = AddStepCombiOvenTSIController;
