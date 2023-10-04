"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mockInsertUser = exports.mockCountUserResponse = exports.mockCountUserRequest = exports.mockDeleteUserRequest = exports.mockAddUserResponse = exports.mockUpdateUserRequest = exports.mockUserModel = exports.mockUpdateUser = exports.mockAddUserRequest = exports.mockLoadUserBySerialNumberResponse = exports.mockLoadUserByIdResponse = exports.mockLoadHasUpdateUserRequest = exports.mockLoadUserByIdRequest = exports.mockLoadUserByCompanyIdResponse = exports.mockLoadUserByCompanyIdRemoteAccessRequest = exports.mockLoadUserByCompanyIdRequest = void 0;
const mysql_helper_1 = require("../../../infra/db/mysql/mysql-helper");
const env_1 = __importDefault(require("../../../main/config/env"));
const mysql_1 = __importDefault(require("mysql"));
afterAll(() => {
    testConnection.end();
});
const testConnection = mysql_1.default.createPool(env_1.default.dbTest);
const mockLoadUserByCompanyIdRequest = () => ({ params: { companyId: 1, userId: 1, userPrivilegeUser: 'admCli' } });
exports.mockLoadUserByCompanyIdRequest = mockLoadUserByCompanyIdRequest;
const mockLoadUserByCompanyIdRemoteAccessRequest = () => ({ params: { companyIdRemoteAccess: 1 } });
exports.mockLoadUserByCompanyIdRemoteAccessRequest = mockLoadUserByCompanyIdRemoteAccessRequest;
const mockLoadUserByCompanyIdResponse = () => ([{
    id: 1,
    idUser: 0,
    typeUser: 'typeUser',
    storeId: 0,
    serialNumber: 'serialNumber',
    creationDate: 'creationDate',
    softwareVersion: 'softwareVersion',
    sentMenu: 0,
    companyId: 0,
    iokPin: 'iokPin',
    name: 'name',
    categoryId: 0,
    dataUpdate: true,
    appUpdate: true,
    statusData: 'statusData',
    statusApp: 'statusData',
    hashSw: 'hashSw',
    menuId: 0,
    lastUpdate: 0,
    modelName: 'valid_model',
    categoryName: 'valid_category',
    storeName: 'valid_store',
    latitude: 1.12345,
    longitude: -1.12345,
    powerVersion: 'powerVersion'
}]);
exports.mockLoadUserByCompanyIdResponse = mockLoadUserByCompanyIdResponse;
const mockLoadUserByIdRequest = () => ({ params: { id: 1 } });
exports.mockLoadUserByIdRequest = mockLoadUserByIdRequest;
const mockLoadHasUpdateUserRequest = () => ({ params: { idUser: 1, iokPin: 'DE@Prat1c@BR2021' } });
exports.mockLoadHasUpdateUserRequest = mockLoadHasUpdateUserRequest;
const mockLoadUserByIdResponse = () => ({
    id: 1,
    idUser: 0,
    typeUser: 'typeUser',
    storeId: 0,
    serialNumber: 'serialNumber',
    creationDate: 'creationDate',
    softwareVersion: 'softwareVersion',
    sentMenu: 0,
    companyId: 0,
    iokPin: 'iokPin',
    name: 'name',
    categoryId: 0,
    dataUpdate: true,
    appUpdate: true,
    statusData: 'statusData',
    statusApp: 'statusData',
    hashSw: 'hashSw',
    menuId: 0,
    lastUpdate: 0,
    modelName: 'valid_model',
    categoryName: 'valid_category',
    storeName: 'valid_store',
    menuName: 'valid_menu',
    address: 'valid_address',
    city: 'valid_city',
    zipCode: 'valid_code',
    powerVersion: 'powerVersion'
});
exports.mockLoadUserByIdResponse = mockLoadUserByIdResponse;
const mockLoadUserBySerialNumberResponse = () => ({
    id: 1,
    idUser: 0,
    typeUser: 'typeUser',
    storeId: 0,
    serialNumber: 'serialNumber',
    creationDate: 'creationDate',
    softwareVersion: 'softwareVersion',
    sentMenu: 0,
    companyId: 0,
    iokPin: 'iokPin',
    name: 'name',
    categoryId: 0,
    dataUpdate: true,
    appUpdate: true,
    statusData: 'statusData',
    statusApp: 'statusData',
    hashSw: 'hashSw',
    menuId: 0,
    lastUpdate: 0,
    powerVersion: 'powerVersion'
});
exports.mockLoadUserBySerialNumberResponse = mockLoadUserBySerialNumberResponse;
const mockAddUserRequest = () => ({
    body: {
        idUser: 1,
        typeUser: 'typeUser',
        dataUpdate: true,
        appUpdate: true,
        creationDate: 'creationDate',
        serialNumber: 'serialNumber',
        softwareVersion: 'softwareVersion',
        powerVersion: 'powerVersion'
    },
    params: {
        pin: 'DE@Prat1c@BR2021'
    }
});
exports.mockAddUserRequest = mockAddUserRequest;
const mockUpdateUser = () => ({
    idUser: 0,
    typeUser: 'typeUser',
    storeId: 0,
    serialNumber: 'serialNumber',
    creationDate: 'creationDate',
    softwareVersion: 'softwareVersion',
    sentMenu: 0,
    companyId: 0,
    iokPin: 'iokPin',
    name: 'name',
    categoryId: 0,
    dataUpdate: true,
    appUpdate: true,
    statusData: 'statusData',
    statusApp: 'statusData',
    hashSw: 'hashSw',
    menuId: 0,
    lastUpdate: 0
});
exports.mockUpdateUser = mockUpdateUser;
const mockUserModel = () => ({
    idUser: 0,
    typeUser: 'typeUser',
    storeId: 0,
    serialNumber: 'serialNumber',
    creationDate: 'creationDate',
    softwareVersion: 'softwareVersion',
    sentMenu: 0,
    companyId: 0,
    iokPin: 'iokPin',
    name: 'name',
    categoryId: 0,
    dataUpdate: true,
    appUpdate: true,
    statusData: 'statusData',
    statusApp: 'statusApp',
    hashSw: 'hashSw',
    menuId: 0,
    lastUpdate: 0,
    companyIdRemoteAccess: 1,
    powerVersion: 'powerVersion',
    forcedUpdate: 1
});
exports.mockUserModel = mockUserModel;
const mockUpdateUserRequest = (updateId) => ({
    body: {
        user: { id: updateId, ...(0, exports.mockUpdateUser)() }
    },
    params: {
        id: 1
    }
});
exports.mockUpdateUserRequest = mockUpdateUserRequest;
const mockAddUserResponse = () => Object.assign((0, exports.mockUserModel)(), { id: 1 });
exports.mockAddUserResponse = mockAddUserResponse;
const mockDeleteUserRequest = (id) => ({ params: { id } });
exports.mockDeleteUserRequest = mockDeleteUserRequest;
const mockCountUserRequest = (id = '1') => ({ query: { where: { storeId: id } } });
exports.mockCountUserRequest = mockCountUserRequest;
const mockCountUserResponse = (count = 1) => ({ count });
exports.mockCountUserResponse = mockCountUserResponse;
const mockInsertUser = async () => {
    await (0, mysql_helper_1.deleteAll)(testConnection, 'company');
    const result = await (0, mysql_helper_1.insertOne)(testConnection, 'user', {
        idUser: 0,
        typeUser: 'typeUser',
        storeId: 1,
        serialNumber: 'serialNumber',
        creationDate: 'creationDate',
        softwareVersion: 'softwareVersion',
        sentMenu: 0,
        companyId: 1,
        iokPin: 'PinValid',
        name: 'name',
        categoryId: 0,
        dataUpdate: true,
        appUpdate: true,
        statusData: 'statusData',
        statusApp: 'statusData',
        hashSw: 'hashSw',
        menuId: 0,
        lastUpdate: 0,
        companyIdRemoteAccess: 1,
        powerVersion: 'powerVersion'
    });
    return { idUser: result.insertId };
};
exports.mockInsertUser = mockInsertUser;
