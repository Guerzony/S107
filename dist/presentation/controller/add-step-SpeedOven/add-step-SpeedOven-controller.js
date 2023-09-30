"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddStepSpeedOvenController = void 0;
const create_step_SpeedOven_error_1 = require("../../errors/create-step-SpeedOven-error");
const step_SpeedOven_params_error_1 = require("../../errors/step-SpeedOven-params-error");
const http_helper_1 = require("../../helpers/http-helper");
class AddStepSpeedOvenController {
    constructor(stepSpeedOvenValidation, addStepSpeedOven) {
        this.stepSpeedOvenValidation = stepSpeedOvenValidation;
        this.addStepSpeedOven = addStepSpeedOven;
    }
    async handle(httpRequest) {
        try {
            if (!httpRequest.body.stepSpeedOven)
                return (0, http_helper_1.badRequest)(new step_SpeedOven_params_error_1.StepSpeedOvenParamsError());
            const stepSpeedOvenRequest = httpRequest.body.stepSpeedOven;
            const error = this.stepSpeedOvenValidation.validate(stepSpeedOvenRequest);
            if (error) {
                return (0, http_helper_1.badRequest)(error);
            }
            const stepSpeedOven = await this.addStepSpeedOven.addStepSpeedOven(stepSpeedOvenRequest);
            return (0, http_helper_1.created)(stepSpeedOven);
        }
        catch (error) {
            return (0, http_helper_1.serverError)(new create_step_SpeedOven_error_1.CreateStepSpeedOvenError());
        }
    }
}
exports.AddStepSpeedOvenController = AddStepSpeedOvenController;
