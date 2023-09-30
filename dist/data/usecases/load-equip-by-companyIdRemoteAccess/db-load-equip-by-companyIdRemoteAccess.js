"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbLoadEquipByCompanyIdRemoteAccess = void 0;
class DbLoadEquipByCompanyIdRemoteAccess {
    constructor(repository) {
        this.repository = repository;
    }
    async load(companyIdRemoteAccess) {
        return this.repository.loadEquipByCompanyIdRemoteAccess(companyIdRemoteAccess);
    }
}
exports.DbLoadEquipByCompanyIdRemoteAccess = DbLoadEquipByCompanyIdRemoteAccess;
