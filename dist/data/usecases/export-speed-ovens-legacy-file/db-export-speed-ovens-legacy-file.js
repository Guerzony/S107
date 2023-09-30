"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbExportSpeedOvensLegacyFile = void 0;
class DbExportSpeedOvensLegacyFile {
    // eslint-disable-next-line no-useless-constructor
    constructor(writeSpeedOvensLegacyFileManager, deleteSpeedOvensLegacyFileManager, packer) {
        this.writeSpeedOvensLegacyFileManager = writeSpeedOvensLegacyFileManager;
        this.deleteSpeedOvensLegacyFileManager = deleteSpeedOvensLegacyFileManager;
        this.packer = packer;
    }
    async export(menu, generation) {
        const fileName = generation === 'A' ? 'BRAVO_A.zip' : 'BRAVO_B.zip';
        const { folderName } = await this.writeSpeedOvensLegacyFileManager.writeSpeedOvensLegacyFile(menu, generation);
        const { filePath, folderPath } = await this.packer.pack({ folderName, fileName });
        await this.deleteSpeedOvensLegacyFileManager.deleteSpeedOvensLegacyFile({ folderName });
        return { filePath, folderPath };
    }
}
exports.DbExportSpeedOvensLegacyFile = DbExportSpeedOvensLegacyFile;
