"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbAddUser = void 0;
class DbAddUser {
    constructor(repository, codeRandomRepository) {
        this.repository = repository;
        this.codeRandomRepository = codeRandomRepository;
    }
    async add(user) {
        const pin = await this.codeRandomRepository.codeRandom();
        Object.assign(user, { iokPin: pin });
        delete user.idUser;
        const userResponse = await this.repository.addUser(user);
        return userResponse;
    }
}
exports.DbAddUser = DbAddUser;
