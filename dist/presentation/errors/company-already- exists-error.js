"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyExistsError = void 0;
class CompanyExistsError extends Error {
    constructor() {
        super('This company has already been registered');
        this.name = 'CompanyExistsError';
    }
}
exports.CompanyExistsError = CompanyExistsError;
