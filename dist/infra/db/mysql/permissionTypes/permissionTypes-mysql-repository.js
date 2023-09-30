"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PermissionTypesMySqlRepository = void 0;
const mysql_helper_1 = require("../mysql-helper");
class PermissionTypesMySqlRepository {
    constructor(pool) {
        this.connectionPool = pool;
    }
    async loadPermissionTypesByCompanyType(companyTypeId, userTypeId) {
        const result = await (0, mysql_helper_1.customGet)(this.connectionPool, `
    SELECT P.* 
    FROM bancopraticaiok_new.permissionType P 
    INNER JOIN bancopraticaiok_new.userType_permissionType UP ON P.id = UP.permissionTypeId 
    WHERE UP.companyTypeId = ${companyTypeId} && UP.userTypeId = ${userTypeId};`);
        if (result.length === 0)
            return null;
        return result;
    }
}
exports.PermissionTypesMySqlRepository = PermissionTypesMySqlRepository;
