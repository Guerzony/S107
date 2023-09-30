"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActivateUserController = void 0;
const http_helper_1 = require("../../helpers/http-helper");
class ActivateUserController {
    constructor(validation, activation) {
        this.validation = validation;
        this.activation = activation;
    }
    async handle(httpRequest) {
        try {
            const error = this.validation.validate(httpRequest.body);
            if (error) {
                return (0, http_helper_1.badRequest)(error);
            }
            const { activateToken } = httpRequest.body;
            const active = await this.activation.updateActivationCode(activateToken);
            if (!active) {
                return (0, http_helper_1.badRequest)({
                    name: 'activate',
                    message: 'Error activate account',
                    stack: 'Descrição do erro'
                });
            }
            return (0, http_helper_1.noContent)();
        }
        catch (error) {
            return (0, http_helper_1.serverError)(error);
        }
    }
}
exports.ActivateUserController = ActivateUserController;
