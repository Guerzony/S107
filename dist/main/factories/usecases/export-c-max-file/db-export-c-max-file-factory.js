"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeDbExportCMaxFileFactory = void 0;
const usecases_1 = require("../../../../data/usecases");
const files_1 = require("../../../../infra/files");
const archiver_1 = require("../../../../infra/files/archiver/archiver");
const makeDbExportCMaxFileFactory = () => {
    const packer = new archiver_1.Archiver();
    const fileManager = new files_1.FileSystem();
    return new usecases_1.DbExportCMaxFile(fileManager, fileManager, packer);
};
exports.makeDbExportCMaxFileFactory = makeDbExportCMaxFileFactory;
