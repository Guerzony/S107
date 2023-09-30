"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbAddStore = void 0;
class DbAddStore {
    constructor(addStoreRepository) {
        this.addStoreRepository = addStoreRepository;
    }
    async addStore(store, userId) {
        const storeResult = await this.addStoreRepository.addStore(store, userId);
        return storeResult;
    }
}
exports.DbAddStore = DbAddStore;
