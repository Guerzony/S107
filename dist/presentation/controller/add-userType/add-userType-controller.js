"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddUserTypeController = void 0;
const http_helper_1 = require("../../helpers/http-helper");
const user_creation_error_1 = require("../../errors/user-creation-error");
class AddUserTypeController {
    constructor(validation, addUserType) {
        this.validation = validation;
        this.addUserType = addUserType;
    }
    async handle(httpRequest) {
        try {
            if (!httpRequest.body)
                return (0, http_helper_1.badRequest)(new Error());
            const request = httpRequest.body;
            const validationError = this.validation.validate(request);
            if (validationError)
                return (0, http_helper_1.badRequest)(validationError);
            const userType = await this.addUserType.add(request);
            return (0, http_helper_1.created)(userType);
        }
        catch (error) {
            return (0, http_helper_1.serverError)(new user_creation_error_1.UserCreationError());
        }
    }
}
exports.AddUserTypeController = AddUserTypeController;
