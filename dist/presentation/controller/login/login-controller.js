"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginController = void 0;
const http_helper_1 = require("../../helpers/http-helper");
class LoginController {
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
            const accessToken = await this.authentication.auth({
                email,
                password
            });
            if (accessToken === 'Error authentication') {
                return (0, http_helper_1.unauthorized)();
            }
            else if (accessToken === 'Error activate account') {
                return (0, http_helper_1.forbidden)({
                    name: 'activate',
                    message: 'Error activate account'
                });
            }
            return (0, http_helper_1.ok)({ accessToken });
        }
        catch (error) {
            return (0, http_helper_1.serverError)(error);
        }
    }
}
exports.LoginController = LoginController;
