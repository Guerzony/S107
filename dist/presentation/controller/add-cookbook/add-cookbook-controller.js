"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddCookbookController = void 0;
const http_helper_1 = require("../../helpers/http-helper");
const cookbook_creation_error_1 = require("../../errors/cookbook-creation-error");
class AddCookbookController {
    constructor(validation, addCookbook) {
        this.validation = validation;
        this.addCookbook = addCookbook;
    }
    async handle(httpRequest) {
        try {
            if (!httpRequest.body.cookbook)
                return (0, http_helper_1.badRequest)(new Error());
            const requestCookbook = httpRequest.body.cookbook;
            const validationError = this.validation.validate(requestCookbook);
            if (validationError)
                return (0, http_helper_1.badRequest)(validationError);
            const cookbook = await this.addCookbook.addCookbook(requestCookbook);
            return (0, http_helper_1.created)(cookbook);
        }
        catch (error) {
            return (0, http_helper_1.serverError)(new cookbook_creation_error_1.CookbookCreationError());
        }
    }
}
exports.AddCookbookController = AddCookbookController;
