"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserMySqlRepository = void 0;
const mysql_helper_1 = require("../mysql-helper");
const user_mysql_repository_helper_1 = require("./user-mysql-repository-helper");
const mysql_1 = __importDefault(require("mysql"));
const env_1 = __importDefault(require("../../../../main/config/env"));
const query_helpers_1 = require("../query-helpers");
class UserMySqlRepository {
    constructor(pool) {
        this.connectionPool = pool;
    }
    async DeleteUserBelongStore(idUser, idStore) {
        const result = await (0, mysql_helper_1.customDelete)(this.connectionPool, `DELETE FROM UserBelongStore WHERE idStore = ${idStore} AND idUser = ${idUser};`);
        if (result.affectedRows === 0)
            return false;
        return true;
    }
    async addUserBelongStore(relationData) {
        await (0, mysql_helper_1.insertOne)(this.connectionPool, 'UserBelongStore', relationData);
        return relationData;
    }
    async deleteUser(id) {
        const result = await (0, mysql_helper_1.deleteById)(this.connectionPool, 'User', 'id', id);
        if (result.affectedRows === 0)
            return false;
        return true;
    }
    async loadByCompany(id) {
        const result = await (0, mysql_helper_1.customGet)(this.connectionPool, `SELECT U.*, UT.userType
    FROM bancopraticaiok_new.User U
    JOIN bancopraticaiok_new.userType UT ON U.userTypeId = UT.id
    WHERE U.companyId = ${id};`);
        return result;
    }
    async add(userData) {
        const result = await (0, mysql_helper_1.insertOne)(this.connectionPool, 'User', userData);
        return (0, user_mysql_repository_helper_1.mapCreatedUser)(userData, result.insertId);
    }
    async loadByEmail(email) {
        const result = await (0, mysql_helper_1.getOne)(this.connectionPool, 'User', 'email', email);
        if (result.length === 0)
            return null;
        return result[0];
    }
    async updateAccessToken(id, accessToken) {
        await (0, mysql_helper_1.updateById)(this.connectionPool, 'User', 'accessToken', id, accessToken);
    }
    async loadByToken(token, role) {
        const result = await (0, mysql_helper_1.getOne)(this.connectionPool, 'User', 'accessToken', token);
        if (!role || role === result[0].userTypeId) {
            return result[0];
        }
        return null;
    }
    async updateActivateToken(id, emailVerified) {
        await (0, mysql_helper_1.updateById)(this.connectionPool, 'User', 'emailVerified', id, true);
    }
    async loadByActivation(activateToken) {
        const result = await (0, mysql_helper_1.getOne)(this.connectionPool, 'User', 'activateToken', activateToken);
        return result[0];
    }
    async loadById(id) {
        const result = await (0, mysql_helper_1.getOne)(this.connectionPool, 'User', 'id', id);
        const userType = await (0, mysql_helper_1.getOne)(this.connectionPool, 'userType', 'id', result[0].userTypeId);
        return Object.assign(result[0], { userType: userType[0].userType });
    }
    async editUserData(userData) {
        const setFields = Object.entries(userData)
            .map(value => `${value[0]} = ${isNaN(value[1]) ? `"${value[1]}"` : value[1]}`)
            .join(', ');
        const user = await (0, mysql_helper_1.updateAll)(this.connectionPool, 'User', setFields, userData.id);
        return user;
    }
    async loadUserOldByEmail(email) {
        const previousConnection = mysql_1.default.createPool(env_1.default.previousDb);
        const result = await (0, mysql_helper_1.getOne)(previousConnection, 'User', 'email', email);
        previousConnection.end();
        return result[0];
    }
    async loadUserByCorporateName(corporateName) {
        const sql = (0, query_helpers_1.loadUserByCorporateNameSQL)(corporateName);
        const result = await (0, mysql_helper_1.customGet)(this.connectionPool, sql);
        if (result.length === 0)
            return null;
        return result[0];
    }
}
exports.UserMySqlRepository = UserMySqlRepository;
