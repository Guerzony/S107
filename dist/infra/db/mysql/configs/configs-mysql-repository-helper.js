"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapCreatedConfigs = void 0;
const mapCreatedConfigs = (addedConfigs, addedConfigsId) => {
    return Object.assign({}, addedConfigs, { id: addedConfigsId });
};
exports.mapCreatedConfigs = mapCreatedConfigs;
