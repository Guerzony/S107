"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteStepCombiOvenTSIController = void 0;
const errors_1 = require("../../errors");
const http_helper_1 = require("../../helpers/http-helper");
class DeleteStepCombiOvenTSIController {
    constructor(stepCombiOvenTSIValidation, deleteStepCombiOvenTSI) {
        this.stepCombiOvenTSIValidation = stepCombiOvenTSIValidation;
        this.deleteStepCombiOvenTSI = deleteStepCombiOvenTSI;
    }
    async handle(httpRequest) {
        try {
            const error = this.stepCombiOvenTSIValidation.validate(httpRequest.params);
            if (error)
                return (0, http_helper_1.badRequest)(new errors_1.MissingParamError('id'));
            const { id } = httpRequest.params;
            if (typeof (id) === 'undefined') {
                return (0, http_helper_1.badRequest)(new errors_1.InvalidParamError('id'));
            }
            else {
                await this.deleteStepCombiOvenTSI.deleteStepCombiOvenTSI(id);
                return (0, http_helper_1.ok)({});
            }
        }
        catch (error) {
            return (0, http_helper_1.serverError)(error);
        }
    }
}
exports.DeleteStepCombiOvenTSIController = DeleteStepCombiOvenTSIController;
