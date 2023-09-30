"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mockInsertEquip = exports.mockCountEquipmentResponse = exports.mockCountEquipmentRequest = exports.mockDeleteEquipmentRequest = exports.mockAddEquipmentResponse = exports.mockUpdateEquipmentRequest = exports.mockEquipModel = exports.mockUpdateEquipment = exports.mockAddEquipmentRequest = exports.mockLoadEquipBySerialNumberResponse = exports.mockLoadEquipByIdResponse = exports.mockLoadHasUpdateEquipRequest = exports.mockLoadEquipByIdRequest = exports.mockLoadEquipByCompanyIdResponse = exports.mockLoadEquipByCompanyIdRemoteAccessRequest = exports.mockLoadEquipByCompanyIdRequest = void 0;
const mysql_helper_1 = require("../../../infra/db/mysql/mysql-helper");
const env_1 = __importDefault(require("../../../main/config/env"));
const mysql_1 = __importDefault(require("mysql"));
afterAll(() => {
    testConnection.end();
});
const testConnection = mysql_1.default.createPool(env_1.default.dbTest);
const mockLoadEquipByCompanyIdRequest = () => ({ params: { companyId: 1, userId: 1, userPrivilegeUser: 'admCli' } });
exports.mockLoadEquipByCompanyIdRequest = mockLoadEquipByCompanyIdRequest;
const mockLoadEquipByCompanyIdRemoteAccessRequest = () => ({ params: { companyIdRemoteAccess: 1 } });
exports.mockLoadEquipByCompanyIdRemoteAccessRequest = mockLoadEquipByCompanyIdRemoteAccessRequest;
const mockLoadEquipByCompanyIdResponse = () => ([{
        id: 1,
        idUser: 0,
        typeEquipment: 'typeEquipment',
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
exports.mockLoadEquipByCompanyIdResponse = mockLoadEquipByCompanyIdResponse;
const mockLoadEquipByIdRequest = () => ({ params: { id: 1 } });
exports.mockLoadEquipByIdRequest = mockLoadEquipByIdRequest;
const mockLoadHasUpdateEquipRequest = () => ({ params: { idEquip: 1, iokPin: 'DE@Prat1c@BR2021' } });
exports.mockLoadHasUpdateEquipRequest = mockLoadHasUpdateEquipRequest;
const mockLoadEquipByIdResponse = () => ({
    id: 1,
    idUser: 0,
    typeEquipment: 'typeEquipment',
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
exports.mockLoadEquipByIdResponse = mockLoadEquipByIdResponse;
const mockLoadEquipBySerialNumberResponse = () => ({
    id: 1,
    idUser: 0,
    typeEquipment: 'typeEquipment',
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
exports.mockLoadEquipBySerialNumberResponse = mockLoadEquipBySerialNumberResponse;
const mockAddEquipmentRequest = () => ({
    body: {
        idEquipment: 1,
        typeEquipment: 'typeEquipment',
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
exports.mockAddEquipmentRequest = mockAddEquipmentRequest;
const mockUpdateEquipment = () => ({
    idUser: 0,
    typeEquipment: 'typeEquipment',
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
exports.mockUpdateEquipment = mockUpdateEquipment;
const mockEquipModel = () => ({
    idUser: 0,
    typeEquipment: 'typeEquipment',
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
exports.mockEquipModel = mockEquipModel;
const mockUpdateEquipmentRequest = (updateId) => ({
    body: {
        equipment: { id: updateId, ...(0, exports.mockUpdateEquipment)() }
    },
    params: {
        id: 1
    }
});
exports.mockUpdateEquipmentRequest = mockUpdateEquipmentRequest;
const mockAddEquipmentResponse = () => Object.assign((0, exports.mockEquipModel)(), { id: 1 });
exports.mockAddEquipmentResponse = mockAddEquipmentResponse;
const mockDeleteEquipmentRequest = (id) => ({ params: { id } });
exports.mockDeleteEquipmentRequest = mockDeleteEquipmentRequest;
const mockCountEquipmentRequest = (id = '1') => ({ query: { where: { storeId: id } } });
exports.mockCountEquipmentRequest = mockCountEquipmentRequest;
const mockCountEquipmentResponse = (count = 1) => ({ count });
exports.mockCountEquipmentResponse = mockCountEquipmentResponse;
const mockInsertEquip = async () => {
    await (0, mysql_helper_1.deleteAll)(testConnection, 'company');
    const result = await (0, mysql_helper_1.insertOne)(testConnection, 'equipment', {
        idUser: 0,
        typeEquipment: 'typeEquipment',
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
    return { idEquip: result.insertId };
};
exports.mockInsertEquip = mockInsertEquip;
