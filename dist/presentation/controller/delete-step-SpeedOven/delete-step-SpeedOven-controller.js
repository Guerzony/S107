"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteStepSpeedOvenController = void 0;
const errors_1 = require("../../errors");
const http_helper_1 = require("../../helpers/http-helper");
class DeleteStepSpeedOvenController {
    constructor(stepSpeedOvenValidation, deleteStepSpeedOven) {
        this.stepSpeedOvenValidation = stepSpeedOvenValidation;
        this.deleteStepSpeedOven = deleteStepSpeedOven;
    }
    async handle(httpRequest) {
        try {
            const error = this.stepSpeedOvenValidation.validate(httpRequest.params);
            if (error)
                return (0, http_helper_1.badRequest)(new errors_1.MissingParamError('id'));
            const { id } = httpRequest.params;
            if (typeof (id) === 'undefined') {
                return (0, http_helper_1.badRequest)(new errors_1.InvalidParamError('id'));
            }
            else {
                await this.deleteStepSpeedOven.deleteStepSpeedOven(id);
                return (0, http_helper_1.ok)({});
            }
        }
        catch (error) {
            return (0, http_helper_1.serverError)(error);
        }
    }
}
exports.DeleteStepSpeedOvenController = DeleteStepSpeedOvenController;
