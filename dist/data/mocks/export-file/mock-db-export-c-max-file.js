"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mockDbExportCMaxFileStub = void 0;
const mockDbExportCMaxFileStub = () => {
    class DbExportCMaxFileStub {
        async export(recipes) {
            return { filePath: 'anyFilePath', folderPath: 'anyFolderPath' };
        }
    }
    return new DbExportCMaxFileStub();
};
exports.mockDbExportCMaxFileStub = mockDbExportCMaxFileStub;
