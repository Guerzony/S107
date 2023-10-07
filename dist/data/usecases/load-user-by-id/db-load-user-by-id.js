"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbLoadUserById = void 0;
class DbLoadUserById {
    constructor(repository) {
        this.repository = repository;
    }
    async load(id) {
        return this.repository.loadUserById(id);
    }
}
exports.DbLoadUserById = DbLoadUserById;
