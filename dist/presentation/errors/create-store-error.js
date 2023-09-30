"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateStoreError = void 0;
class CreateStoreError extends Error {
    constructor() {
        super('Error creating store');
        this.name = 'CreateStoreError';
    }
}
exports.CreateStoreError = CreateStoreError;
