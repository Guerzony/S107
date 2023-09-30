"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mockReturnUserTypePermissionType = exports.mockAddUserTypePermissionType = exports.mockAddUserTypeRequest = exports.mockLoadUserTypeRequest = exports.mockReturnUserType = exports.mockUpdateUserType = exports.mockAddUserType = exports.mockInsertUserType = exports.mockUserTypesModel = void 0;
/* eslint-disable no-undef */
const mysql_helper_1 = require("../../../infra/db/mysql/mysql-helper");
const env_1 = __importDefault(require("../../../main/config/env"));
const mysql_1 = __importDefault(require("mysql"));
const user_1 = require("../user");
afterAll(() => {
    testConnection.end();
});
const testConnection = mysql_1.default.createPool(env_1.default.dbTest);
const mockUserTypesModel = (companyId) => ({
    companyId: companyId,
    userType: 'Prática'
});
exports.mockUserTypesModel = mockUserTypesModel;
const mockInsertUserType = async () => {
    const company = await (0, user_1.mockInsertCompany)();
    await (0, mysql_helper_1.deleteAll)(testConnection, 'userType');
    const result = await (0, mysql_helper_1.insertOne)(testConnection, 'userType', (0, exports.mockUserTypesModel)(company.idCompany));
    return { idUserType: result.insertId, companyId: company.idCompany };
};
exports.mockInsertUserType = mockInsertUserType;
const mockAddUserType = async () => {
    const company = await (0, user_1.mockInsertCompany)();
    const result = {
        userType: 'cozinheiro',
        companyId: company.idCompany,
        companyTypeId: 'Prática',
        permissionTypeId: [1, 2]
    };
    return result;
};
exports.mockAddUserType = mockAddUserType;
const mockUpdateUserType = async () => {
    const userType = await (0, exports.mockInsertUserType)();
    const result = Object.assign((0, exports.mockUserTypesModel)(userType.companyId), { id: userType.idUserType });
    return result;
};
exports.mockUpdateUserType = mockUpdateUserType;
const mockReturnUserType = () => (Object.assign((0, exports.mockUserTypesModel)(1), { id: 1 }));
exports.mockReturnUserType = mockReturnUserType;
const mockLoadUserTypeRequest = async () => {
    const userType = await (0, exports.mockInsertUserType)();
    const httpRequest = {
        params: {
            companyId: userType.companyId
        }
    };
    return httpRequest;
};
exports.mockLoadUserTypeRequest = mockLoadUserTypeRequest;
const mockAddUserTypeRequest = async () => {
    const company = await (0, user_1.mockInsertCompany)();
    const httpRequest = {
        body: {
            userType: 'cozinheiro',
            companyId: company.idCompany,
            companyTypeId: 'Prática',
            permissionTypeId: [1, 2]
        }
    };
    return httpRequest;
};
exports.mockAddUserTypeRequest = mockAddUserTypeRequest;
const mockAddUserTypePermissionType = () => ({
    permissionTypeId: 1,
    userTypeId: 1,
    companyTypeId: 'Prática'
});
exports.mockAddUserTypePermissionType = mockAddUserTypePermissionType;
const mockReturnUserTypePermissionType = () => ({
    id: 1,
    permissionTypeId: 1,
    userTypeId: 1,
    companyTypeId: 'Prática'
});
exports.mockReturnUserTypePermissionType = mockReturnUserTypePermissionType;
