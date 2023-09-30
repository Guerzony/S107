"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbUpdateStore = void 0;
class DbUpdateStore {
    constructor(updateStoreRepository, loadStoreByIdRepository) {
        this.updateStoreRepository = updateStoreRepository;
        this.loadStoreByIdRepository = loadStoreByIdRepository;
    }
    async updateStore(id, store) {
        await this.updateStoreRepository.updateStore(id, store);
        const recipeResult = await this.loadStoreByIdRepository.loadStoreById(id);
        return recipeResult;
    }
}
exports.DbUpdateStore = DbUpdateStore;
