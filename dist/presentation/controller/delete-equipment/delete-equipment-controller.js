"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteEquipmentController = void 0;
const errors_1 = require("../../errors");
const no_rows_affected_error_1 = require("../../errors/no-rows-affected-error");
const http_helper_1 = require("../../helpers/http-helper");
class DeleteEquipmentController {
    constructor(paramsValidation, dbDeleteEquipment) {
        this.paramsValidation = paramsValidation;
        this.dbDeleteEquipment = dbDeleteEquipment;
    }
    async handle(httpRequest) {
        try {
            if (!httpRequest.params.id)
                return (0, http_helper_1.badRequest)(new errors_1.MissingParamError('id'));
            const validationError = this.paramsValidation.validate(httpRequest.params);
            if (validationError)
                return (0, http_helper_1.badRequest)(new errors_1.MissingParamError('id'));
            const deleteIsOk = await this.dbDeleteEquipment.delete(httpRequest.params.id);
            if (!deleteIsOk)
                return (0, http_helper_1.badRequest)(new no_rows_affected_error_1.NoRowsAffected(httpRequest.params.id));
            return (0, http_helper_1.ok)({});
        }
        catch (error) {
            return (0, http_helper_1.serverError)(new errors_1.ServerError(error.stack));
        }
    }
}
exports.DeleteEquipmentController = DeleteEquipmentController;
