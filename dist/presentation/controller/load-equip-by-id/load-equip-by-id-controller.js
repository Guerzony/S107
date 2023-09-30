"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoadEquipByIdController = void 0;
const errors_1 = require("../../errors");
const http_helper_1 = require("../../helpers/http-helper");
class LoadEquipByIdController {
    constructor(loadEquipById, validation) {
        this.loadEquipById = loadEquipById;
        this.validation = validation;
    }
    async handle(httpRequest) {
        try {
            const validationError = this.validation.validate(httpRequest.params);
            if (validationError)
                return (0, http_helper_1.badRequest)(validationError);
            const response = await this.loadEquipById.load(httpRequest.params.id);
            if (!response)
                return (0, http_helper_1.noContent)();
            return (0, http_helper_1.ok)(response);
        }
        catch (error) {
            return (0, http_helper_1.serverError)(new errors_1.ServerError(error.stack));
        }
    }
}
exports.LoadEquipByIdController = LoadEquipByIdController;
