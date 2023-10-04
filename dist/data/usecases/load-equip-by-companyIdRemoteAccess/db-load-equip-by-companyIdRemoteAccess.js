"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbLoadUserByCompanyIdRemoteAccess = void 0;
class DbLoadUserByCompanyIdRemoteAccess {
    constructor(repository) {
        this.repository = repository;
    }
    async load(companyIdRemoteAccess) {
        return this.repository.loadUserByCompanyIdRemoteAccess(companyIdRemoteAccess);
    }
}
exports.DbLoadUserByCompanyIdRemoteAccess = DbLoadUserByCompanyIdRemoteAccess;
