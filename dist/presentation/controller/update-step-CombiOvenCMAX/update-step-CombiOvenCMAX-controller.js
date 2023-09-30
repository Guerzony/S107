"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateStepCombiOvenCMAXController = void 0;
const http_helper_1 = require("../../helpers/http-helper");
const errors_1 = require("../../errors");
const no_rows_affected_error_1 = require("../../errors/no-rows-affected-error");
class UpdateStepCombiOvenCMAXController {
    constructor(bodyValidation, paramsValidation, updateStepCombiOvenCMAX) {
        this.bodyValidation = bodyValidation;
        this.paramsValidation = paramsValidation;
        this.updateStepCombiOvenCMAX = updateStepCombiOvenCMAX;
    }
    async handle(httpRequest) {
        try {
            if (!httpRequest.body.stepCombiOvenCMAX)
                return (0, http_helper_1.badRequest)(new errors_1.MissingParamError('stepCombiOvenCMAX'));
            if (!httpRequest.params.id)
                return (0, http_helper_1.badRequest)(new errors_1.MissingParamError('id'));
            const validationParamsError = this.paramsValidation.validate(httpRequest.params);
            const validationBodyError = this.bodyValidation.validate(httpRequest.body.stepCombiOvenCMAX);
            if (validationParamsError)
                return (0, http_helper_1.badRequest)(validationParamsError);
            if (validationBodyError)
                return (0, http_helper_1.badRequest)(validationBodyError);
            const result = await this.updateStepCombiOvenCMAX.updateStepCombiOvenCMAX(httpRequest.params.id, httpRequest.body.stepCombiOvenCMAX);
            if (!result)
                return (0, http_helper_1.badRequest)(new no_rows_affected_error_1.NoRowsAffected(httpRequest.params.id));
            return (0, http_helper_1.ok)({});
        }
        catch (error) {
            return (0, http_helper_1.serverError)(error);
        }
    }
}
exports.UpdateStepCombiOvenCMAXController = UpdateStepCombiOvenCMAXController;
