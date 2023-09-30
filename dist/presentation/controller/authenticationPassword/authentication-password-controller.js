"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthenticationPasswordController = void 0;
const http_helper_1 = require("../../helpers/http-helper");
class AuthenticationPasswordController {
    constructor(authentication, validation) {
        this.authentication = authentication;
        this.validation = validation;
    }
    async handle(httpRequest) {
        try {
            const error = this.validation.validate(httpRequest.body);
            if (error) {
                return (0, http_helper_1.badRequest)(error);
            }
            const { email, password } = httpRequest.body;
            const authenticationPassword = await this.authentication.auth({
                email,
                password
            });
            if (!authenticationPassword) {
                return (0, http_helper_1.unauthorized)();
            }
            return (0, http_helper_1.ok)({});
        }
        catch (error) {
            return (0, http_helper_1.serverError)(error);
        }
    }
}
exports.AuthenticationPasswordController = AuthenticationPasswordController;
