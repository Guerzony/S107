"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mockDbExportSpeedOvensFileStub = void 0;
const mockDbExportSpeedOvensFileStub = () => {
    class DbExportSpeedOvensFileStub {
        async export(menu, equipmentModel) {
            return { filePath: 'any_file_path', folderPath: 'any_folder_path' };
        }
    }
    return new DbExportSpeedOvensFileStub();
};
exports.mockDbExportSpeedOvensFileStub = mockDbExportSpeedOvensFileStub;
