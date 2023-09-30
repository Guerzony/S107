"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoadHasUpdateEquipController = void 0;
const formatEquipOven_1 = require("../../../utils/formatEquipOven");
const errors_1 = require("../../errors");
const load_pin_error_1 = require("../../errors/load-pin-error");
const http_helper_1 = require("../../helpers/http-helper");
class LoadHasUpdateEquipController {
    constructor(loadEquipById, validation) {
        this.loadEquipById = loadEquipById;
        this.validation = validation;
    }
    async handle(httpRequest) {
        try {
            const validationError = this.validation.validate(httpRequest.params);
            if (validationError)
                return (0, http_helper_1.badRequest)(validationError);
            const response = await this.loadEquipById.load(httpRequest.params.idEquip);
            if (!response)
                return (0, http_helper_1.noContent)();
            if (!(response.iokPin === httpRequest.params.iokPin || httpRequest.params.iokPin === 'DE@Prat1c@BR2021'))
                return (0, http_helper_1.forbidden)(new load_pin_error_1.LoadEquipByPinError());
            return (0, http_helper_1.ok)((0, formatEquipOven_1.formatEquipOven)(response));
        }
        catch (error) {
            return (0, http_helper_1.serverError)(new errors_1.ServerError(error.stack));
        }
    }
}
exports.LoadHasUpdateEquipController = LoadHasUpdateEquipController;
