"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoadStoreByIdController = void 0;
const http_helper_1 = require("../../helpers/http-helper");
class LoadStoreByIdController {
    constructor(loadStoreById, validation) {
        this.loadStoreById = loadStoreById;
        this.validation = validation;
    }
    async handle(httpRequest) {
        try {
            const error = this.validation.validate(httpRequest.params);
            if (error) {
                return (0, http_helper_1.badRequest)(error);
            }
            const { id } = httpRequest.params;
            const store = await this.loadStoreById.loadStoreById(id);
            if (!store)
                return (0, http_helper_1.noContent)();
            return (0, http_helper_1.ok)(store);
        }
        catch (error) {
            return (0, http_helper_1.serverError)(error);
        }
    }
}
exports.LoadStoreByIdController = LoadStoreByIdController;
