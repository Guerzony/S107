"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapCreatedCompany = void 0;
const mapCreatedCompany = (addedCompany, addedCompanyId) => {
    return Object.assign({}, addedCompany, { id: addedCompanyId });
};
exports.mapCreatedCompany = mapCreatedCompany;
