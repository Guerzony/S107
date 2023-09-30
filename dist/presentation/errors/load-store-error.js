"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoadStoreError = void 0;
class LoadStoreError extends Error {
    constructor() {
        super('Store not found');
        this.name = 'LoadStoreError';
    }
}
exports.LoadStoreError = LoadStoreError;
