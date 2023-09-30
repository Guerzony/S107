"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbExportCMaxFile = void 0;
class DbExportCMaxFile {
    // eslint-disable-next-line no-useless-constructor
    constructor(writeCMaxFileManager, deleteCMaxFileManager, packer) {
        this.writeCMaxFileManager = writeCMaxFileManager;
        this.deleteCMaxFileManager = deleteCMaxFileManager;
        this.packer = packer;
    }
    async export(recipes) {
        const { folderName } = await this.writeCMaxFileManager.writeCMaxFile(recipes);
        const { filePath, folderPath } = await this.packer.pack({ folderName, fileName: 'CMAX.zip' });
        await this.deleteCMaxFileManager.deleteCMaxFile({ folderName });
        return { filePath, folderPath };
    }
}
exports.DbExportCMaxFile = DbExportCMaxFile;
