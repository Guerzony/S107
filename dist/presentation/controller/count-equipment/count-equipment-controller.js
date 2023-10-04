"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CountUserController = void 0;
const errors_1 = require("../../errors");
const http_helper_1 = require("../../helpers/http-helper");
class CountUserController {
    constructor(validation, db) {
        this.validation = validation;
        this.db = db;
    }
    async handle(httpRequest) {
        try {
            const { where } = httpRequest.query;
            if (where) {
                const validationError = this.validation.validate(where);
                if (validationError)
                    return (0, http_helper_1.badRequest)(new errors_1.InvalidParamError(Object.keys(where)[0]));
            }
            const count = await this.db.count(where);
            return (0, http_helper_1.ok)(count);
        }
        catch (error) {
            return (0, http_helper_1.serverError)(new errors_1.ServerError(error.stack));
        }
    }
}
exports.CountUserController = CountUserController;
