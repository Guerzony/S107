"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeDbExportSpeedOvensFileFactory = void 0;
const usecases_1 = require("../../../../data/usecases");
const files_1 = require("../../../../infra/files");
const cryptography_1 = require("../../../../infra/cryptography");
const makeDbExportSpeedOvensFileFactory = () => {
    const hasher = new cryptography_1.Md5Adapter();
    const fileManager = new files_1.FileSystem();
    return new usecases_1.DbExportSpeedOvensFile(fileManager, hasher);
};
exports.makeDbExportSpeedOvensFileFactory = makeDbExportSpeedOvensFileFactory;
