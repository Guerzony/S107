"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCookbookController = void 0;
const http_helper_1 = require("../../helpers/http-helper");
const errors_1 = require("../../errors");
const no_rows_affected_error_1 = require("../../errors/no-rows-affected-error");
class UpdateCookbookController {
    constructor(paramsValidation, bodyValidation, dbUpdateCookbook) {
        this.paramsValidation = paramsValidation;
        this.bodyValidation = bodyValidation;
        this.dbUpdateCookbook = dbUpdateCookbook;
    }
    async handle(httpRequest) {
        try {
            if (!httpRequest.body.cookbook)
                return (0, http_helper_1.badRequest)(new errors_1.MissingParamError('user'));
            if (!httpRequest.params.id)
                return (0, http_helper_1.badRequest)(new errors_1.MissingParamError('id'));
            const validationParamsError = this.paramsValidation.validate(httpRequest.params);
            const validationBodyError = this.bodyValidation.validate(httpRequest.body.cookbook);
            if (validationParamsError)
                return (0, http_helper_1.badRequest)(validationParamsError);
            if (validationBodyError)
                return (0, http_helper_1.badRequest)(validationBodyError);
            const result = await this.dbUpdateCookbook.update(httpRequest.params.id, httpRequest.body.cookbook);
            if (!result)
                return (0, http_helper_1.badRequest)(new no_rows_affected_error_1.NoRowsAffected(httpRequest.params.id));
            return (0, http_helper_1.ok)({});
        }
        catch (error) {
            return (0, http_helper_1.serverError)(new errors_1.ServerError(error));
        }
    }
}
exports.UpdateCookbookController = UpdateCookbookController;
