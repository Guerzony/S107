"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbUpdateUser = void 0;
class DbUpdateUser {
    constructor(repository) {
        this.repository = repository;
    }
    async update(id, user) {
        return await this.repository.updateUser(id, user);
    }
}
exports.DbUpdateUser = DbUpdateUser;
