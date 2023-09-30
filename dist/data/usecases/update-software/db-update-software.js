"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbUpdateSoftware = void 0;
class DbUpdateSoftware {
    constructor(repository) {
        this.repository = repository;
    }
    async load(ovenModel, iokPin) {
        return this.repository.updateSoftware(ovenModel, iokPin);
    }
}
exports.DbUpdateSoftware = DbUpdateSoftware;
