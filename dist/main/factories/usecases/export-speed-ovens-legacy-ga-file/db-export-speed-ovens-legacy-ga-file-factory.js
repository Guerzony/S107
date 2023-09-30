"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeDbExportSpeedOvensLegacyFileFactory = void 0;
const usecases_1 = require("../../../../data/usecases");
const files_1 = require("../../../../infra/files");
const archiver_1 = require("../../../../infra/files/archiver/archiver");
const makeDbExportSpeedOvensLegacyFileFactory = () => {
    const packer = new archiver_1.Archiver();
    const fileManager = new files_1.FileSystem();
    return new usecases_1.DbExportSpeedOvensLegacyFile(fileManager, fileManager, packer);
};
exports.makeDbExportSpeedOvensLegacyFileFactory = makeDbExportSpeedOvensLegacyFileFactory;
