"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbCountUser = void 0;
class DbCountUser {
    constructor(repository) {
        this.repository = repository;
    }
    async count(where) {
        return this.repository.countUser(where);
    }
}
exports.DbCountUser = DbCountUser;
