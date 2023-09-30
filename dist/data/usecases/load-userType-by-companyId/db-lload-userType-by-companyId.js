"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbLoadUserTypeByCompanyId = void 0;
class DbLoadUserTypeByCompanyId {
    constructor(repository) {
        this.repository = repository;
    }
    async loadUserTypes(companyId) {
        return this.repository.loadUserTypesByCompanyId(companyId);
    }
}
exports.DbLoadUserTypeByCompanyId = DbLoadUserTypeByCompanyId;
