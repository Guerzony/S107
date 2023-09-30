"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateStoreController = void 0;
const http_helper_1 = require("../../helpers/http-helper");
const errors_1 = require("../../errors");
const no_rows_affected_error_1 = require("../../errors/no-rows-affected-error");
class UpdateStoreController {
    constructor(bodyValidation, paramsValidation, updateStore) {
        this.bodyValidation = bodyValidation;
        this.paramsValidation = paramsValidation;
        this.updateStore = updateStore;
    }
    async handle(httpRequest) {
        try {
            if (!httpRequest.body.store)
                return (0, http_helper_1.badRequest)(new errors_1.MissingParamError('store'));
            if (!httpRequest.params.id)
                return (0, http_helper_1.badRequest)(new errors_1.MissingParamError('id'));
            const validationParamsError = this.paramsValidation.validate(httpRequest.params);
            const validationBodyError = this.bodyValidation.validate(httpRequest.body.store);
            if (validationParamsError)
                return (0, http_helper_1.badRequest)(validationParamsError);
            if (validationBodyError)
                return (0, http_helper_1.badRequest)(validationBodyError);
            const result = await this.updateStore.updateStore(httpRequest.params.id, httpRequest.body.store);
            if (!result)
                return (0, http_helper_1.badRequest)(new no_rows_affected_error_1.NoRowsAffected(httpRequest.params.id));
            return (0, http_helper_1.ok)({});
        }
        catch (error) {
            return (0, http_helper_1.serverError)(error);
        }
    }
}
exports.UpdateStoreController = UpdateStoreController;
