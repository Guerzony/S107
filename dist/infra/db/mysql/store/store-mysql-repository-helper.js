"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapCreatedStore = void 0;
const mapCreatedStore = (addedStore, addedStoreId) => {
    return Object.assign({}, addedStore, { id: addedStoreId });
};
exports.mapCreatedStore = mapCreatedStore;
