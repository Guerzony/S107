"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbUpdateUserByCompany = void 0;
class DbUpdateUserByCompany {
    constructor(registerUserRepository) {
        this.registerUserRepository = registerUserRepository;
    }
    async update(idUser, idCompany) {
        await this.registerUserRepository.registerUser(idUser, idCompany);
    }
}
exports.DbUpdateUserByCompany = DbUpdateUserByCompany;
