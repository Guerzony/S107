"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoadUserDataController = void 0;
const errors_1 = require("../../errors");
const http_helper_1 = require("../../helpers/http-helper");
class LoadUserDataController {
    constructor(loadUserById, loadCompanyById, loadConfigsByUserId) {
        this.loadUserById = loadUserById;
        this.loadCompanyById = loadCompanyById;
        this.loadConfigsByUserId = loadConfigsByUserId;
    }
    async handle(httpRequest) {
        try {
            const { idUser } = httpRequest.body;
            const user = await this.loadUserById.load(idUser);
            if (!user) {
                return (0, http_helper_1.badRequest)(new errors_1.UserNotFoundError());
            }
            const company = await this.loadCompanyById.load(user.companyId);
            if (!company) {
                return (0, http_helper_1.badRequest)(new errors_1.CompanyNotFoundError());
            }
            const configs = await this.loadConfigsByUserId.load(user.id);
            if (!configs) {
                return (0, http_helper_1.badRequest)(new errors_1.ConfigsNotFoundError());
            }
            return (0, http_helper_1.ok)({
                user: user,
                company: company,
                configs: configs
            });
        }
        catch (error) {
            return (0, http_helper_1.serverError)(error);
        }
    }
}
exports.LoadUserDataController = LoadUserDataController;
