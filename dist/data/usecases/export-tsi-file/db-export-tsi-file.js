"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbExportTsiFile = void 0;
class DbExportTsiFile {
    // eslint-disable-next-line no-useless-constructor
    constructor(fileManager, hasher) {
        this.fileManager = fileManager;
        this.hasher = hasher;
    }
    async export(menu) {
        const jsonMenu = JSON.stringify(menu, null, 4);
        const hash = await this.hasher.hash(`${jsonMenu}\n`);
        const data = JSON.stringify({ ...menu, hash }, null, 4);
        const fileName = 'TSIExportfile';
        return await this.fileManager.save(fileName, data);
    }
}
exports.DbExportTsiFile = DbExportTsiFile;
