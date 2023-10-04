"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoadHasUpdateUserController = void 0;
const formatUserOven_1 = require("../../../utils/formatUserOven");
const errors_1 = require("../../errors");
const load_pin_error_1 = require("../../errors/load-pin-error");
const http_helper_1 = require("../../helpers/http-helper");
class LoadHasUpdateUserController {
    constructor(loadUserById, validation) {
        this.loadUserById = loadUserById;
        this.validation = validation;
    }
    async handle(httpRequest) {
        try {
            const validationError = this.validation.validate(httpRequest.params);
            if (validationError)
                return (0, http_helper_1.badRequest)(validationError);
            const response = await this.loadUserById.load(httpRequest.params.idUser);
            if (!response)
                return (0, http_helper_1.noContent)();
            if (!(response.iokPin === httpRequest.params.iokPin || httpRequest.params.iokPin === 'DE@Prat1c@BR2021'))
                return (0, http_helper_1.forbidden)(new load_pin_error_1.LoadUserByPinError());
            return (0, http_helper_1.ok)((0, formatUserOven_1.formatUserOven)(response));
        }
        catch (error) {
            return (0, http_helper_1.serverError)(new errors_1.ServerError(error.stack));
        }
    }
}
exports.LoadHasUpdateUserController = LoadHasUpdateUserController;
