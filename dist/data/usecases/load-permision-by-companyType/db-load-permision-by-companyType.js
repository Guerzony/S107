"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbLoadPermissionByCompanyType = void 0;
class DbLoadPermissionByCompanyType {
    constructor(repository) {
        this.repository = repository;
    }
    async loadPermission(companyTypeId, userTypeId) {
        return this.repository.loadPermissionTypesByCompanyType(companyTypeId, userTypeId);
    }
}
exports.DbLoadPermissionByCompanyType = DbLoadPermissionByCompanyType;
