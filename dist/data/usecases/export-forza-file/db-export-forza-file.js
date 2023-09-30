"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbExportForzaFile = void 0;
class DbExportForzaFile {
    // eslint-disable-next-line no-useless-constructor
    constructor(writeForzaFileManager, deleteForzaFileManager, packer) {
        this.writeForzaFileManager = writeForzaFileManager;
        this.deleteForzaFileManager = deleteForzaFileManager;
        this.packer = packer;
    }
    async export(menu) {
        const { folderName } = await this.writeForzaFileManager.writeForzaFile(menu);
        const { filePath, folderPath } = await this.packer.pack({ folderName, fileName: 'FORZA.zip' });
        await this.deleteForzaFileManager.deleteForzaFile({ folderName });
        return { filePath, folderPath };
    }
}
exports.DbExportForzaFile = DbExportForzaFile;
