"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeDbExportForzaFileFactory = void 0;
const usecases_1 = require("../../../../data/usecases");
const files_1 = require("../../../../infra/files");
const archiver_1 = require("../../../../infra/files/archiver/archiver");
const makeDbExportForzaFileFactory = () => {
    const packer = new archiver_1.Archiver();
    const fileManager = new files_1.FileSystem();
    return new usecases_1.DbExportForzaFile(fileManager, fileManager, packer);
};
exports.makeDbExportForzaFileFactory = makeDbExportForzaFileFactory;
