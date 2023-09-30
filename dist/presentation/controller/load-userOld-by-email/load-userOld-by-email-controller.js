"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoadUserByEmailController = void 0;
const http_helper_1 = require("../../helpers/http-helper");
class LoadUserByEmailController {
    constructor(loadUserOldByEmail, loadUserByEmail) {
        this.loadUserOldByEmail = loadUserOldByEmail;
        this.loadUserByEmail = loadUserByEmail;
    }
    async handle(httpRequest) {
        try {
            const { email } = httpRequest.params;
            const user = await this.loadUserByEmail.loadUser(email);
            if (user) {
                return (0, http_helper_1.ok)('existing account');
            }
            const response = await this.loadUserOldByEmail.loadUser(email);
            if (!response)
                return (0, http_helper_1.noContent)();
            return (0, http_helper_1.ok)({
                user: response
            });
        }
        catch (error) {
            return (0, http_helper_1.serverError)(error);
        }
    }
}
exports.LoadUserByEmailController = LoadUserByEmailController;
