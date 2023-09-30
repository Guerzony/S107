"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbLoadStoresByCompanyId = void 0;
class DbLoadStoresByCompanyId {
    constructor(loadStoresByCompanyIdRepository, loadStoresByUserRepository) {
        this.loadStoresByCompanyIdRepository = loadStoresByCompanyIdRepository;
        this.loadStoresByUserRepository = loadStoresByUserRepository;
    }
    async loadStoresByCompanyId(companyId, userId, userPrivilegeUser) {
        let result = [];
        if (userPrivilegeUser === 'admCli') {
            result = await this.loadStoresByCompanyIdRepository.loadStoresByCompanyId(companyId);
        }
        else {
            result = await this.loadStoresByUserRepository.loadStoresByUser(userId);
        }
        return result;
    }
}
exports.DbLoadStoresByCompanyId = DbLoadStoresByCompanyId;
