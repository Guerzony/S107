"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteCookbookController = void 0;
const errors_1 = require("../../errors");
const no_rows_affected_error_1 = require("../../errors/no-rows-affected-error");
const http_helper_1 = require("../../helpers/http-helper");
class DeleteCookbookController {
    constructor(paramsValidation, dbDeleteCookbook) {
        this.paramsValidation = paramsValidation;
        this.dbDeleteCookbook = dbDeleteCookbook;
    }
    async handle(httpRequest) {
        try {
            const { cookbook } = httpRequest.body;
            for (const deleteCookbook of cookbook) {
                const validationError = this.paramsValidation.validate(deleteCookbook);
                if (validationError)
                    return (0, http_helper_1.badRequest)(new errors_1.MissingParamError('id'));
                const deleteIsOk = await this.dbDeleteCookbook.deleteCookbook(deleteCookbook.id, deleteCookbook.equipType);
                if (!deleteIsOk)
                    return (0, http_helper_1.badRequest)(new no_rows_affected_error_1.NoRowsAffected(deleteCookbook.id));
            }
            return (0, http_helper_1.ok)({});
        }
        catch (error) {
            return (0, http_helper_1.serverError)(new errors_1.ServerError(error.stack));
        }
    }
}
exports.DeleteCookbookController = DeleteCookbookController;
