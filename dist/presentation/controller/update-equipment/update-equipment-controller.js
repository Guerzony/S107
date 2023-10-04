"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateUserController = void 0;
const http_helper_1 = require("../../helpers/http-helper");
const http_helper_2 = require("./../../helpers/http-helper");
const errors_1 = require("../../errors");
const no_rows_affected_error_1 = require("../../errors/no-rows-affected-error");
const load_pin_error_1 = require("../../errors/load-pin-error");
class UpdateUserController {
    constructor(paramsValidation, bodyValidation, dbUpdateUser, loadUserByPin) {
        this.paramsValidation = paramsValidation;
        this.bodyValidation = bodyValidation;
        this.dbUpdateUser = dbUpdateUser;
        this.loadUserByPin = loadUserByPin;
    }
    async handle(httpRequest) {
        try {
            if (!httpRequest.body.user)
                return (0, http_helper_2.badRequest)(new errors_1.MissingParamError('user'));
            if (!httpRequest.params.id)
                return (0, http_helper_2.badRequest)(new errors_1.MissingParamError('id'));
            const validationParamsError = this.paramsValidation.validate(httpRequest.params);
            const validationBodyError = this.bodyValidation.validate(httpRequest.body.user);
            if (validationParamsError)
                return (0, http_helper_2.badRequest)(validationParamsError);
            if (validationBodyError)
                return (0, http_helper_2.badRequest)(validationBodyError);
            const equip = await this.loadUserByPin.load(httpRequest.body.user.iokPin);
            if (!equip) {
                return (0, http_helper_1.forbidden)(new load_pin_error_1.LoadUserByPinError());
            }
            const result = await this.dbUpdateUser.update(httpRequest.params.id, httpRequest.body.user);
            if (!result)
                return (0, http_helper_2.badRequest)(new no_rows_affected_error_1.NoRowsAffected(httpRequest.params.id));
            return (0, http_helper_1.ok)({});
        }
        catch (error) {
            return (0, http_helper_1.serverError)(new errors_1.ServerError(error));
        }
    }
}
exports.UpdateUserController = UpdateUserController;
