"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbLoadStoreById = void 0;
class DbLoadStoreById {
    constructor(loadStoreByIdRepository) {
        this.loadStoreByIdRepository = loadStoreByIdRepository;
    }
    async loadStoreById(id) {
        const store = await this.loadStoreByIdRepository.loadStoreById(id);
        if (store) {
            return store;
        }
        return null;
    }
}
exports.DbLoadStoreById = DbLoadStoreById;
