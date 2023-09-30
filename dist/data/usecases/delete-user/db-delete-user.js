"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbDeleteUser = void 0;
class DbDeleteUser {
    constructor(repository) {
        this.repository = repository;
    }
    async deleteUser(id) {
        return await this.repository.deleteUser(id);
    }
}
exports.DbDeleteUser = DbDeleteUser;
