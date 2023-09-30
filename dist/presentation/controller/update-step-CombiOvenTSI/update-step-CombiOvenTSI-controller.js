"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateStepCombiOvenTSIController = void 0;
const http_helper_1 = require("../../helpers/http-helper");
const errors_1 = require("../../errors");
const no_rows_affected_error_1 = require("../../errors/no-rows-affected-error");
class UpdateStepCombiOvenTSIController {
    constructor(bodyValidation, paramsValidation, updateStepCombiOvenTSI) {
        this.bodyValidation = bodyValidation;
        this.paramsValidation = paramsValidation;
        this.updateStepCombiOvenTSI = updateStepCombiOvenTSI;
    }
    async handle(httpRequest) {
        try {
            if (!httpRequest.body.stepCombiOvenTSI)
                return (0, http_helper_1.badRequest)(new errors_1.MissingParamError('stepCombiOvenTSI'));
            if (!httpRequest.params.id)
                return (0, http_helper_1.badRequest)(new errors_1.MissingParamError('id'));
            const validationParamsError = this.paramsValidation.validate(httpRequest.params);
            const validationBodyError = this.bodyValidation.validate(httpRequest.body.stepCombiOvenTSI);
            if (validationParamsError)
                return (0, http_helper_1.badRequest)(validationParamsError);
            if (validationBodyError)
                return (0, http_helper_1.badRequest)(validationBodyError);
            const result = await this.updateStepCombiOvenTSI.updateStepCombiOvenTSI(httpRequest.params.id, httpRequest.body.stepCombiOvenTSI);
            if (!result)
                return (0, http_helper_1.badRequest)(new no_rows_affected_error_1.NoRowsAffected(httpRequest.params.id));
            return (0, http_helper_1.ok)({});
        }
        catch (error) {
            return (0, http_helper_1.serverError)(error);
        }
    }
}
exports.UpdateStepCombiOvenTSIController = UpdateStepCombiOvenTSIController;
