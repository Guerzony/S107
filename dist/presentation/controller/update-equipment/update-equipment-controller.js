"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateEquipmentController = void 0;
const http_helper_1 = require("../../helpers/http-helper");
const http_helper_2 = require("./../../helpers/http-helper");
const errors_1 = require("../../errors");
const no_rows_affected_error_1 = require("../../errors/no-rows-affected-error");
const load_pin_error_1 = require("../../errors/load-pin-error");
class UpdateEquipmentController {
    constructor(paramsValidation, bodyValidation, dbUpdateEquipment, loadEquipByPin) {
        this.paramsValidation = paramsValidation;
        this.bodyValidation = bodyValidation;
        this.dbUpdateEquipment = dbUpdateEquipment;
        this.loadEquipByPin = loadEquipByPin;
    }
    async handle(httpRequest) {
        try {
            if (!httpRequest.body.equipment)
                return (0, http_helper_2.badRequest)(new errors_1.MissingParamError('equipment'));
            if (!httpRequest.params.id)
                return (0, http_helper_2.badRequest)(new errors_1.MissingParamError('id'));
            const validationParamsError = this.paramsValidation.validate(httpRequest.params);
            const validationBodyError = this.bodyValidation.validate(httpRequest.body.equipment);
            if (validationParamsError)
                return (0, http_helper_2.badRequest)(validationParamsError);
            if (validationBodyError)
                return (0, http_helper_2.badRequest)(validationBodyError);
            const equip = await this.loadEquipByPin.load(httpRequest.body.equipment.iokPin);
            if (!equip) {
                return (0, http_helper_1.forbidden)(new load_pin_error_1.LoadEquipByPinError());
            }
            const result = await this.dbUpdateEquipment.update(httpRequest.params.id, httpRequest.body.equipment);
            if (!result)
                return (0, http_helper_2.badRequest)(new no_rows_affected_error_1.NoRowsAffected(httpRequest.params.id));
            return (0, http_helper_1.ok)({});
        }
        catch (error) {
            return (0, http_helper_1.serverError)(new errors_1.ServerError(error));
        }
    }
}
exports.UpdateEquipmentController = UpdateEquipmentController;
