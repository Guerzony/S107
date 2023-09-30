"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mockDeleteCMaxFileParams = exports.mockFileManagerStubData = exports.mockFileManagerStub = void 0;
const path_1 = __importDefault(require("path"));
const mocks_1 = require("../../../domain/mocks");
const uuid_1 = require("uuid");
const mockFileManagerStub = () => {
    class FileManagerStub {
        async deleteSpeedOvensLegacyFile(params) {
        }
        async writeSpeedOvensLegacyFile(menu, generation) {
            const folderName = (0, uuid_1.v4)();
            return { folderName };
        }
        async deleteForzaFile(params) {
        }
        async writeForzaFile(menu) {
            const folderName = (0, uuid_1.v4)();
            return { folderName };
        }
        async deleteCMaxFile(params) {
        }
        async writeCMaxFile(recipes) {
            const folderName = (0, uuid_1.v4)();
            return { folderName };
        }
        async save(fileName, data) {
            const folderName = (0, uuid_1.v4)();
            const folderPath = path_1.default.join(__dirname, '../../../../public/export', folderName);
            const filePath = path_1.default.join(folderPath, fileName);
            return { filePath, folderPath };
        }
    }
    return new FileManagerStub();
};
exports.mockFileManagerStub = mockFileManagerStub;
const mockFileManagerStubData = () => {
    const menu = { ...(0, mocks_1.mockExportSpeedOvensFileMenu)(), hash: 'value_hashed' };
    const data = JSON.stringify(menu, null, 4);
    return data;
};
exports.mockFileManagerStubData = mockFileManagerStubData;
const mockDeleteCMaxFileParams = () => {
    const folderName = (0, uuid_1.v4)();
    const fileName = 'CMAX.PRG';
    const rootFolderPath = path_1.default.resolve(__dirname, '../../../../public/export', folderName);
    const cMaxFolderPath = path_1.default.resolve(rootFolderPath, 'PRATICA');
    const cMaxFilePath = path_1.default.join(cMaxFolderPath, fileName);
    return { rootFolderPath, cMaxFolderPath, cMaxFilePath };
};
exports.mockDeleteCMaxFileParams = mockDeleteCMaxFileParams;
