"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateStepSpeedOvenController = void 0;
const http_helper_1 = require("../../helpers/http-helper");
const errors_1 = require("../../errors");
const no_rows_affected_error_1 = require("../../errors/no-rows-affected-error");
class UpdateStepSpeedOvenController {
    constructor(bodyValidation, paramsValidation, updateStepSpeedOven) {
        this.bodyValidation = bodyValidation;
        this.paramsValidation = paramsValidation;
        this.updateStepSpeedOven = updateStepSpeedOven;
    }
    async handle(httpRequest) {
        try {
            if (!httpRequest.body.stepSpeedOven)
                return (0, http_helper_1.badRequest)(new errors_1.MissingParamError('stepSpeedOven'));
            if (!httpRequest.params.id)
                return (0, http_helper_1.badRequest)(new errors_1.MissingParamError('id'));
            const validationParamsError = this.paramsValidation.validate(httpRequest.params);
            const validationBodyError = this.bodyValidation.validate(httpRequest.body.stepSpeedOven);
            if (validationParamsError)
                return (0, http_helper_1.badRequest)(validationParamsError);
            if (validationBodyError)
                return (0, http_helper_1.badRequest)(validationBodyError);
            const result = await this.updateStepSpeedOven.updateStepSpeedOven(httpRequest.params.id, httpRequest.body.stepSpeedOven);
            if (!result)
                return (0, http_helper_1.badRequest)(new no_rows_affected_error_1.NoRowsAffected(httpRequest.params.id));
            return (0, http_helper_1.ok)({});
        }
        catch (error) {
            return (0, http_helper_1.serverError)(error);
        }
    }
}
exports.UpdateStepSpeedOvenController = UpdateStepSpeedOvenController;
