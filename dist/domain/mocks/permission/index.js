"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mockLoadPermissionRequest = exports.mockReturnPermission = exports.mockUpdatePermission = exports.mockAddPermission = exports.mockInsertPermission = exports.mockPermissionModel = void 0;
/* eslint-disable no-undef */
const mysql_helper_1 = require("../../../infra/db/mysql/mysql-helper");
const env_1 = __importDefault(require("../../../main/config/env"));
const mysql_1 = __importDefault(require("mysql"));
afterAll(() => {
    testConnection.end();
});
const testConnection = mysql_1.default.createPool(env_1.default.dbTest);
const mockPermissionModel = () => ({
    permission: 'Menu'
});
exports.mockPermissionModel = mockPermissionModel;
const mockInsertPermission = async () => {
    await (0, mysql_helper_1.deleteAll)(testConnection, 'permissionType');
    const result = await (0, mysql_helper_1.insertOne)(testConnection, 'permissionType', (0, exports.mockPermissionModel)());
    return { idPermission: result.insertId };
};
exports.mockInsertPermission = mockInsertPermission;
const mockAddPermission = async () => {
    const result = (0, exports.mockPermissionModel)();
    return result;
};
exports.mockAddPermission = mockAddPermission;
const mockUpdatePermission = async () => {
    const Permission = await (0, exports.mockInsertPermission)();
    const result = Object.assign((0, exports.mockPermissionModel)(), { id: Permission.idPermission });
    return result;
};
exports.mockUpdatePermission = mockUpdatePermission;
const mockReturnPermission = () => (Object.assign((0, exports.mockPermissionModel)(), { id: 1 }));
exports.mockReturnPermission = mockReturnPermission;
const mockLoadPermissionRequest = async () => {
    await (0, exports.mockInsertPermission)();
    const httpRequest = {
        params: {
            companyTypeId: 'Prática',
            userTypeId: 1
        }
    };
    return httpRequest;
};
exports.mockLoadPermissionRequest = mockLoadPermissionRequest;
