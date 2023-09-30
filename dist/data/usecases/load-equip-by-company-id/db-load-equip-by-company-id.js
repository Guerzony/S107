"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbLoadEquipByCompanyId = void 0;
class DbLoadEquipByCompanyId {
    constructor(repository, loadEquipByUserIdRepository) {
        this.repository = repository;
        this.loadEquipByUserIdRepository = loadEquipByUserIdRepository;
    }
    async load(companyId, userId, userPrivilegeUser) {
        if (userPrivilegeUser === '1') {
            return this.repository.loadEquipByCompanyId(companyId);
        }
        else {
            return this.loadEquipByUserIdRepository.loadEquipByUserId(userId);
        }
    }
}
exports.DbLoadEquipByCompanyId = DbLoadEquipByCompanyId;
