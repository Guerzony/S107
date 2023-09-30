"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbUpdateUserByActivation = void 0;
class DbUpdateUserByActivation {
    constructor(loadUserByActivationRepository, editUserDataRepository, codeRandomRepository) {
        this.loadUserByActivationRepository = loadUserByActivationRepository;
        this.editUserDataRepository = editUserDataRepository;
        this.codeRandomRepository = codeRandomRepository;
    }
    async updateActivationCode(activateToken) {
        const user = await this.loadUserByActivationRepository.loadByActivation(activateToken);
        if (user) {
            const activateToken = await this.codeRandomRepository.codeRandom();
            await this.editUserDataRepository.editUserData({ id: user.id, emailVerified: true, activateToken: activateToken });
            return true;
        }
        return false;
    }
}
exports.DbUpdateUserByActivation = DbUpdateUserByActivation;
