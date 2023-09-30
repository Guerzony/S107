"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbDeleteStore = void 0;
class DbDeleteStore {
    constructor(deleteStoreRepository, loadStoreRepository) {
        this.deleteStoreRepository = deleteStoreRepository;
        this.loadStoreRepository = loadStoreRepository;
    }
    async deleteStore(id) {
        await this.deleteStoreRepository.deleteStore(id);
        const store = await this.loadStoreRepository.loadStoreById(id);
        if (store) {
            return false;
        }
        return true;
    }
}
exports.DbDeleteStore = DbDeleteStore;
