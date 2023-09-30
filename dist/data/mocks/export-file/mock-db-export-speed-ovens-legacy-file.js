"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mockDbExportSpeedOvensLegacyFileStub = void 0;
const mockDbExportSpeedOvensLegacyFileStub = () => {
    class DbExportSpeedOvensLegacyFileStub {
        async export(menu, generation) {
            return { filePath: 'anyFilePath', folderPath: 'anyFolderPath' };
        }
    }
    return new DbExportSpeedOvensLegacyFileStub();
};
exports.mockDbExportSpeedOvensLegacyFileStub = mockDbExportSpeedOvensLegacyFileStub;
