"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbLoadUserOldByEmail = void 0;
class DbLoadUserOldByEmail {
    constructor(loadAccountByEmailRepository) {
        this.loadUserByEmailRepository = loadAccountByEmailRepository;
    }
    async loadUser(email) {
        return this.loadUserByEmailRepository.loadUserOldByEmail(email);
    }
}
exports.DbLoadUserOldByEmail = DbLoadUserOldByEmail;
