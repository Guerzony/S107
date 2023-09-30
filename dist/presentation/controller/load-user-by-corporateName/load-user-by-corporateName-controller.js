"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoadUserByCorporateNameController = void 0;
const http_helper_1 = require("../../helpers/http-helper");
class LoadUserByCorporateNameController {
    constructor(loadUserByCorporateName) {
        this.loadUserByCorporateName = loadUserByCorporateName;
    }
    async handle(httpRequest) {
        try {
            const { corporateName } = httpRequest.params;
            const response = await this.loadUserByCorporateName.loadUser(corporateName);
            console.log(response);
            if (!response || response == null)
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
exports.LoadUserByCorporateNameController = LoadUserByCorporateNameController;
