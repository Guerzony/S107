"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbAddUser = void 0;
class DbAddUser {
    constructor(repository) {
        this.repository = repository;
    }
    async add(user) {
        const userResponse = await this.repository.addUser(user);
        return userResponse;
    }
}
exports.DbAddUser = DbAddUser;
