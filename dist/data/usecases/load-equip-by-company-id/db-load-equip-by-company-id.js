"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbLoadUserByCompanyId = void 0;
class DbLoadUserByCompanyId {
    constructor(repository, loadUserByUserIdRepository) {
        this.repository = repository;
        this.loadUserByUserIdRepository = loadUserByUserIdRepository;
    }
    async load(companyId, userId, userPrivilegeUser) {
        if (userPrivilegeUser === '1') {
            return this.repository.loadUserByCompanyId(companyId);
        }
        else {
            return this.loadUserByUserIdRepository.loadUserByUserId(userId);
        }
    }
}
exports.DbLoadUserByCompanyId = DbLoadUserByCompanyId;
