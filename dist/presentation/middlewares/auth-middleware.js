"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthMiddleware = void 0;
const errors_1 = require("../errors");
const http_helper_1 = require("../helpers/http-helper");
class AuthMiddleware {
    constructor(loadAccountByToken, role) {
        this.loadAccountByToken = loadAccountByToken;
        this.role = role;
    }
    async handle(httpRequest) {
        var _a;
        try {
            const accessToken = (_a = httpRequest.headers) === null || _a === void 0 ? void 0 : _a['x-access-token'];
            if (accessToken) {
                const user = await this.loadAccountByToken.load(accessToken, this.role);
                if (user) {
                    return (0, http_helper_1.ok)({ idUser: user.id });
                }
            }
            return (0, http_helper_1.forbidden)(new errors_1.AccessDeniedError());
        }
        catch (error) {
            return (0, http_helper_1.forbidden)(error);
        }
    }
}
exports.AuthMiddleware = AuthMiddleware;
