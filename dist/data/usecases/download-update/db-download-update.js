"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbDownloadUpdate = void 0;
class DbDownloadUpdate {
    constructor(repository) {
        this.repository = repository;
    }
    async load(ovenModel) {
        return this.repository.downloadUpdate(ovenModel);
    }
}
exports.DbDownloadUpdate = DbDownloadUpdate;
