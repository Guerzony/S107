"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddUserController = void 0;
const http_helper_1 = require("../../helpers/http-helper");
const user_creation_error_1 = require("../../errors/user-creation-error");
class AddUserController {
    constructor(validation, addUser) {
        this.validation = validation;
        this.addUser = addUser;
    }
    async handle(httpRequest) {
        try {
            if (!httpRequest.body)
                return (0, http_helper_1.badRequest)(new Error());
            const requestUser = httpRequest.body;
            const validationError = this.validation.validate(requestUser);
            if (validationError)
                return (0, http_helper_1.badRequest)(validationError);
            const user = await this.addUser.add(requestUser);
            return (0, http_helper_1.created)(user);
        }
        catch (error) {
            return (0, http_helper_1.serverError)(new user_creation_error_1.UserCreationError());
        }
    }
}
exports.AddUserController = AddUserController;
