"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mockDbExportTsiFileStub = void 0;
const mockDbExportTsiFileStub = () => {
    class DbExportTsiFileStub {
        async export(menu) {
            return { filePath: 'any_file_path', folderPath: 'any_folder_path' };
        }
    }
    return new DbExportTsiFileStub();
};
exports.mockDbExportTsiFileStub = mockDbExportTsiFileStub;
