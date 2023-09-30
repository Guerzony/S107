"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteStoreController = void 0;
const errors_1 = require("../../errors");
const http_helper_1 = require("../../helpers/http-helper");
class DeleteStoreController {
    constructor(storeValidation, deleteStore) {
        this.storeValidation = storeValidation;
        this.deleteStore = deleteStore;
    }
    async handle(httpRequest) {
        try {
            const error = this.storeValidation.validate(httpRequest.params);
            if (error)
                return (0, http_helper_1.badRequest)(new errors_1.MissingParamError('id'));
            const { id } = httpRequest.params;
            if (typeof (id) === 'undefined') {
                return (0, http_helper_1.badRequest)(new errors_1.InvalidParamError('id'));
            }
            else {
                await this.deleteStore.deleteStore(id);
                return (0, http_helper_1.ok)({});
            }
        }
        catch (error) {
            return (0, http_helper_1.serverError)(error);
        }
    }
}
exports.DeleteStoreController = DeleteStoreController;
