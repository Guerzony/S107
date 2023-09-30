"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbLoadUserByEmail = void 0;
class DbLoadUserByEmail {
    constructor(loadAccountByEmailRepository) {
        this.loadUserByEmailRepository = loadAccountByEmailRepository;
    }
    async loadUser(email) {
        return this.loadUserByEmailRepository.loadByEmail(email);
    }
}
exports.DbLoadUserByEmail = DbLoadUserByEmail;
