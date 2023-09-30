"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbAuthenticationPassword = void 0;
class DbAuthenticationPassword {
    constructor(loadAccountByEmailRepository, hashComparer) {
        this.loadUserByEmailRepository = loadAccountByEmailRepository;
        this.hashComparer = hashComparer;
    }
    async auth(authentication) {
        const account = await this.loadUserByEmailRepository.loadByEmail(authentication.email);
        if (account) {
            const isAuthed = await this.hashComparer.compare(authentication.password, account.password);
            if (isAuthed) {
                return true;
            }
            return false;
        }
        return false;
    }
}
exports.DbAuthenticationPassword = DbAuthenticationPassword;
