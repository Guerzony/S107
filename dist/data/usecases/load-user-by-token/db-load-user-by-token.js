"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbLoadAccountByToken = void 0;
class DbLoadAccountByToken {
    constructor(decrypter, loadAccountByTokenRepository) {
        this.decrypter = decrypter;
        this.loadUserByTokenRepository = loadAccountByTokenRepository;
    }
    async load(accessToken, role) {
        const token = await this.decrypter.decrypt(accessToken);
        if (token) {
            const account = await this.loadUserByTokenRepository.loadByToken(accessToken, role);
            return account;
        }
        return null;
    }
}
exports.DbLoadAccountByToken = DbLoadAccountByToken;
