"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoadStepSpeedOvenByIdController = void 0;
const http_helper_1 = require("../../helpers/http-helper");
class LoadStepSpeedOvenByIdController {
    constructor(loadStepSpeedOvenById, validation) {
        this.loadStepSpeedOvenById = loadStepSpeedOvenById;
        this.validation = validation;
    }
    async handle(httpRequest) {
        try {
            const error = this.validation.validate(httpRequest.params);
            if (error) {
                return (0, http_helper_1.badRequest)(error);
            }
            const { id } = httpRequest.params;
            const stepSpeedOven = await this.loadStepSpeedOvenById.loadStepSpeedOvenById(id);
            if (!stepSpeedOven)
                return (0, http_helper_1.noContent)();
            return (0, http_helper_1.ok)(stepSpeedOven);
        }
        catch (error) {
            return (0, http_helper_1.serverError)(error);
        }
    }
}
exports.LoadStepSpeedOvenByIdController = LoadStepSpeedOvenByIdController;
