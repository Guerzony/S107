"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyNotFoundError = void 0;
class CompanyNotFoundError extends Error {
    constructor() {
        super('Company not found');
        this.name = 'CompanyNotFoundError';
    }
}
exports.CompanyNotFoundError = CompanyNotFoundError;
