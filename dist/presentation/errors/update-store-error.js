"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateStoreError = void 0;
class UpdateStoreError extends Error {
    constructor() {
        super('Error updating store');
        this.name = 'UpdateStoreError';
    }
}
exports.UpdateStoreError = UpdateStoreError;
