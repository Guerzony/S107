"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbAuthentication = void 0;
class DbAuthentication {
    constructor(loadAccountByEmailRepository, hashComparer, encrypter, UpdateAccessTokenRepository) {
        this.loadUserByEmailRepository = loadAccountByEmailRepository;
        this.hashComparer = hashComparer;
        this.encrypter = encrypter;
        this.UpdateAccessTokenRepository = UpdateAccessTokenRepository;
    }
    async auth(authentication) {
        const account = await this.loadUserByEmailRepository.loadByEmail(authentication.email);
        if (account) {
            if (account.emailVerified) {
                const isAuthed = await this.hashComparer.compare(authentication.password, account.password);
                if (isAuthed) {
                    const accessToken = await this.encrypter.encrypt(account.id);
                    await this.UpdateAccessTokenRepository.updateAccessToken(account.id, accessToken);
                    return accessToken;
                }
                return 'Error authentication';
            }
            else {
                return 'Error activate account';
            }
        }
        return 'Error authentication';
    }
}
exports.DbAuthentication = DbAuthentication;
