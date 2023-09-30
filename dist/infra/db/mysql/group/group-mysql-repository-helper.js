"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapCreatedGroup = void 0;
const mapCreatedGroup = (addedAccount, addedAccountId) => {
    return Object.assign({}, addedAccount, { id: addedAccountId });
};
exports.mapCreatedGroup = mapCreatedGroup;
