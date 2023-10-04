"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbLoadUserOldByidUser = void 0;
class DbLoadUserOldByidUser {
    constructor(recoverLoadUserRepository) {
        this.recoverLoadUserRepository = recoverLoadUserRepository;
    }
    loadUser(id) {
        return this.recoverLoadUserRepository.loadUser(id);
    }
}
exports.DbLoadUserOldByidUser = DbLoadUserOldByidUser;
