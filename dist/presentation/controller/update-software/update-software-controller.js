"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateSoftwareController = void 0;
const errors_1 = require("../../errors");
const load_pin_error_1 = require("../../errors/load-pin-error");
const http_helper_1 = require("../../helpers/http-helper");
class UpdateSoftwareController {
    constructor(updateSoftware, validation, loadEquipByPin) {
        this.updateSoftware = updateSoftware;
        this.validation = validation;
        this.loadEquipByPin = loadEquipByPin;
    }
    async handle(httpRequest) {
        try {
            const validationError = this.validation.validate(httpRequest.params);
            if (validationError)
                return (0, http_helper_1.badRequest)(validationError);
            const equip = await this.loadEquipByPin.load(httpRequest.params.iokPin);
            if (!equip) {
                return (0, http_helper_1.forbidden)(new load_pin_error_1.LoadEquipByPinError());
            }
            const response = await this.updateSoftware.load(httpRequest.params.ovenModel, httpRequest.params.iokPin);
            if (!response)
                return (0, http_helper_1.noContent)();
            return (0, http_helper_1.download)(response);
        }
        catch (error) {
            return (0, http_helper_1.serverError)(new errors_1.ServerError(error.stack));
        }
    }
}
exports.UpdateSoftwareController = UpdateSoftwareController;
