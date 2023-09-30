"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbLoadUserByCompany = void 0;
class DbLoadUserByCompany {
    constructor(loadUserByCompanyRepository, loadStoresByUserRepository) {
        this.loadUserByCompanyRepository = loadUserByCompanyRepository;
        this.loadStoresByUserRepository = loadStoresByUserRepository;
    }
    async loadUser(id) {
        const users = await this.loadUserByCompanyRepository.loadByCompany(id);
        if (users) {
            for (const user of users) {
                const store = await this.loadStoresByUserRepository.loadStoresByUser(user.id);
                const storeOption = store.map((store) => ({ value: store.id, label: store.storeName }));
                Object.assign(user, { stores: storeOption });
            }
            return users;
        }
        return null;
    }
}
exports.DbLoadUserByCompany = DbLoadUserByCompany;
