"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbUpdateUserBelongStore = void 0;
class DbUpdateUserBelongStore {
    constructor(loadStoresByUserRepository, addUserBelongStoreRepository, deleteUserBelongStoreRepository) {
        this.loadStoresByUserRepository = loadStoresByUserRepository;
        this.addUserBelongStoreRepository = addUserBelongStoreRepository;
        this.deleteUserBelongStoreRepository = deleteUserBelongStoreRepository;
    }
    async editUserBelongStoreData(idUser, idStore) {
        const store = await this.loadStoresByUserRepository.loadStoresByUser(idUser);
        for (const id of idStore) {
            if (!store.find(x => x.id === id)) {
                await this.addUserBelongStoreRepository.addUserBelongStore({ idUser: idUser, idStore: id });
            }
        }
        for (const storeItem of store) {
            if (!idStore.find(x => x === storeItem.id)) {
                await this.deleteUserBelongStoreRepository.DeleteUserBelongStore(idUser, storeItem.id);
            }
        }
    }
}
exports.DbUpdateUserBelongStore = DbUpdateUserBelongStore;
