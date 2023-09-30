"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Archiver = void 0;
const fs_1 = __importDefault(require("fs"));
const archiver_1 = __importDefault(require("archiver"));
const path_1 = __importDefault(require("path"));
class Archiver {
    async pack(params) {
        const { fileName, folderName } = params;
        const publicPath = path_1.default.resolve(__dirname, '../../../../public');
        const exportPath = path_1.default.join(publicPath, 'export');
        const tempPath = path_1.default.join(publicPath, 'temp');
        const sourcePath = path_1.default.join(tempPath, folderName);
        const folderPath = path_1.default.join(exportPath, folderName);
        const filePath = path_1.default.join(folderPath, fileName);
        if (!fs_1.default.existsSync(publicPath))
            await fs_1.default.promises.mkdir(publicPath);
        if (!fs_1.default.existsSync(exportPath))
            await fs_1.default.promises.mkdir(exportPath);
        if (!fs_1.default.existsSync(folderPath))
            await fs_1.default.promises.mkdir(folderPath);
        const archive = (0, archiver_1.default)('zip', { zlib: { level: 9 } });
        const output = fs_1.default.createWriteStream(filePath);
        return new Promise((resolve, reject) => {
            output.on('close', () => {
                resolve({ filePath, folderPath });
            });
            output.on('end', () => {
            });
            archive.on('warning', (err) => {
                if (err.code !== 'ENOENT') {
                    if (!fs_1.default.existsSync(filePath))
                        fs_1.default.unlinkSync(filePath);
                    if (!fs_1.default.existsSync(folderPath))
                        fs_1.default.rmdirSync(folderPath);
                    reject(err);
                }
            });
            archive.on('error', (err) => {
                if (!fs_1.default.existsSync(filePath))
                    fs_1.default.unlinkSync(filePath);
                if (!fs_1.default.existsSync(folderPath))
                    fs_1.default.rmdirSync(folderPath);
                reject(err);
            });
            archive.pipe(output);
            archive.directory(sourcePath, false);
            archive.finalize();
        });
    }
}
exports.Archiver = Archiver;
// export class Archiver implements Packer {
//   async pack (params: Packer.ParamsType): Promise<Packer.ReturnType> {
//     const { fileName, folderName } = params
//     const publicPath = path.resolve(__dirname, '../../../../public')
//     const exportPath = path.join(publicPath, 'export')
//     const folderPath = path.join(exportPath, folderName)
//     const filePath = path.join(folderPath, fileName)
//     if (!fs.existsSync(publicPath)) await fs.promises.mkdir(publicPath)
//     if (!fs.existsSync(exportPath)) await fs.promises.mkdir(exportPath)
//     if (!fs.existsSync(folderPath)) await fs.promises.mkdir(folderPath)
//     const output = fs.createWriteStream(filePath)
//     const archive = archiver('zip', { zlib: { level: 9 } })
//     archive.on('warning', (err: any) => {
//       throw new Error(err)
//     })
//     archive.on('error', (err: any) => {
//       throw new Error(err)
//     })
//     archive.pipe(output)
//     archive.directory(folderPath, false)
//     await archive.finalize()
//     return { folderPath, filePath }
//   }
// }
