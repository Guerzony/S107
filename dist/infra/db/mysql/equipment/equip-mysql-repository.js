"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserMySqlRepository = void 0;
const mysql_helper_1 = require("../mysql-helper");
const query_helpers_1 = require("../query-helpers");
class UserMySqlRepository {
    constructor(pool) {
        this.connectionPool = pool;
    }
    async loadUserByCompanyIdRemoteAccess(companyIdRemoteAccess) {
        const sql = (0, query_helpers_1.loadUserByCompanyIdRemoteAccessSQL)(companyIdRemoteAccess);
        return await (0, mysql_helper_1.customGet)(this.connectionPool, sql);
    }
    async addRecoverUser(user) {
        const result = await (0, mysql_helper_1.insertOne)(this.connectionPool, 'user', user);
        const userResponse = await (0, mysql_helper_1.getOne)(this.connectionPool, 'user', 'id', result.insertId);
        return userResponse[0];
    }
    async loadUserByUserId(userId) {
        const sql = (0, query_helpers_1.loadUserByUserIdSQL)(userId);
        return await (0, mysql_helper_1.customGet)(this.connectionPool, sql);
    }
    async loadUserBySerialNumber(serialNumber) {
        const result = await (0, mysql_helper_1.getOne)(this.connectionPool, 'user', 'serialNumber', serialNumber);
        return result[0];
    }
    async addUser(user) {
        const result = await (0, mysql_helper_1.insertOne)(this.connectionPool, 'user', user);
        const userResponse = await (0, mysql_helper_1.getOne)(this.connectionPool, 'user', 'id', result.insertId);
        return userResponse[0];
    }
    async loadByUserMenu(menuId) {
        const result = await (0, mysql_helper_1.getOne)(this.connectionPool, 'user', 'sentMenu', menuId);
        return result;
    }
    async loadByUserPin(IOKPin) {
        const result = await (0, mysql_helper_1.getOne)(this.connectionPool, 'user', 'iokPin', IOKPin);
        return result[0];
    }
    async registerUser(idUser, idCompany) {
        await (0, mysql_helper_1.updateById)(this.connectionPool, 'user', 'companyId', idUser, idCompany);
    }
    async loadUserByCompanyId(companyId) {
        const sql = (0, query_helpers_1.loadUserByCompanyIdSQL)(companyId);
        return await (0, mysql_helper_1.customGet)(this.connectionPool, sql);
    }
    async loadUserById(id) {
        const sql = (0, query_helpers_1.loadUserByIdSQL)(id);
        const result = await (0, mysql_helper_1.customGet)(this.connectionPool, sql);
        if (result.length === 0)
            return null;
        return result[0];
    }
    async updateUser(id, user) {
        const setFields = Object.entries(user)
            .map(value => `${value[0]} = ${isNaN(value[1]) ? `"${value[1]}"` : value[1]}`)
            .join(', ');
        const result = await (0, mysql_helper_1.updateAll)(this.connectionPool, 'user', setFields, id);
        if (result.affectedRows === 0)
            return false;
        return true;
    }
    async deleteUser(id) {
        const result = await (0, mysql_helper_1.deleteById)(this.connectionPool, 'user', 'id', id);
        if (result.affectedRows === 0)
            return false;
        return true;
    }
    async countUser(where) {
        const sql = (0, query_helpers_1.countUserSQL)(where);
        const result = await (0, mysql_helper_1.customGet)(this.connectionPool, sql);
        return result[0];
    }
}
exports.UserMySqlRepository = UserMySqlRepository;
