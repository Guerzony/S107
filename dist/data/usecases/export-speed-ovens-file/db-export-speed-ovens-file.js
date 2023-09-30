"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbExportSpeedOvensFile = void 0;
class DbExportSpeedOvensFile {
    // eslint-disable-next-line no-useless-constructor
    constructor(fileManager, hasher) {
        this.fileManager = fileManager;
        this.hasher = hasher;
    }
    async export(menu, equipmentModel) {
        const jsonMenu = JSON.stringify(menu, null, 4);
        const hash = await this.hasher.hash(`${jsonMenu}\n`);
        const data = JSON.stringify({ ...menu, hash }, null, 4);
        let fileName;
        switch (equipmentModel) {
            case 'COPA, ROCKET, COPA SM':
                fileName = 'CopaRocketExportfile';
                break;
            case 'FORZA':
                fileName = 'ForzaExportfile';
                break;
            case 'FIT, FIT ST':
                fileName = 'FITExportfile';
                break;
            default:
                throw new Error('Invalid equipment model');
        }
        return await this.fileManager.save(fileName, data);
    }
}
exports.DbExportSpeedOvensFile = DbExportSpeedOvensFile;
