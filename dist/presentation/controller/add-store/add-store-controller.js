"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddStoreController = void 0;
const create_store_error_1 = require("../../errors/create-store-error");
const store_params_error_1 = require("../../errors/store-params-error");
const http_helper_1 = require("../../helpers/http-helper");
class AddStoreController {
    constructor(storeValidation, addStore) {
        this.storeValidation = storeValidation;
        this.addStore = addStore;
    }
    async handle(httpRequest) {
        try {
            if (!httpRequest.body.store)
                return (0, http_helper_1.badRequest)(new store_params_error_1.StoreParamsError());
            const storeRequest = httpRequest.body.store;
            console.log(httpRequest.body);
            const error = this.storeValidation.validate(storeRequest);
            if (error) {
                return (0, http_helper_1.badRequest)(error);
            }
            const store = await this.addStore.addStore(storeRequest, Number(httpRequest.body.idUser));
            return (0, http_helper_1.created)(store);
        }
        catch (error) {
            return (0, http_helper_1.serverError)(new create_store_error_1.CreateStoreError());
        }
    }
}
exports.AddStoreController = AddStoreController;
