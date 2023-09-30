"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapCreatedMenu = void 0;
const mapCreatedMenu = (addedMenu, addedAccountId) => {
    return Object.assign({}, addedMenu, { id: addedAccountId });
};
exports.mapCreatedMenu = mapCreatedMenu;
