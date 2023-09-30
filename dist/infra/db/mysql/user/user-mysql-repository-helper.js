"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapCreatedUser = void 0;
const mapCreatedUser = (addedAccount, addedAccountId) => {
    return Object.assign({}, addedAccount, { id: addedAccountId });
};
exports.mapCreatedUser = mapCreatedUser;
