"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbLoadUserBySerialNumber = void 0;
class DbLoadUserBySerialNumber {
    constructor(repository) {
        this.repository = repository;
    }
    async loadUser(serialNumber) {
        return this.repository.loadUserBySerialNumber(serialNumber);
    }
}
exports.DbLoadUserBySerialNumber = DbLoadUserBySerialNumber;
