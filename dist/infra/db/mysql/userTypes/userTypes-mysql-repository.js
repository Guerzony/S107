"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserTypesMySqlRepository = void 0;
const mysql_helper_1 = require("../mysql-helper");
class UserTypesMySqlRepository {
    constructor(pool) {
        this.connectionPool = pool;
    }
    async addUserTypesPermissionType(userTypesPermissionType) {
        const result = await (0, mysql_helper_1.insertOne)(this.connectionPool, 'userType_permissionType', userTypesPermissionType);
        return { ...userTypesPermissionType, id: result.insertId };
    }
    async addUserTypes(userTypes) {
        const result = await (0, mysql_helper_1.insertOne)(this.connectionPool, 'userType', userTypes);
        return { ...userTypes, id: result.insertId };
    }
    async loadUserTypesByCompanyId(companyId) {
        const result = await (0, mysql_helper_1.customGet)(this.connectionPool, `SELECT * FROM userType WHERE companyId = ${companyId} || companyId = 0`);
        if (result.length === 0)
            return null;
        return result;
    }
}
exports.UserTypesMySqlRepository = UserTypesMySqlRepository;
