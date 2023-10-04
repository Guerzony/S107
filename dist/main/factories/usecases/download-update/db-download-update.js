"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeDbDownloadUpdate = void 0;
const files_repository_1 = require("../../../../infra/db/files/files-repository");
const db_download_update_1 = require("../../../../data/usecases/download-update/db-download-update");
const makeDbDownloadUpdate = () => {
    const loadUserByRepository = new files_repository_1.FilesRepository();
    return new db_download_update_1.DbDownloadUpdate(loadUserByRepository);
};
exports.makeDbDownloadUpdate = makeDbDownloadUpdate;
