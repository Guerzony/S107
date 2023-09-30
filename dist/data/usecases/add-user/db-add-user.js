"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbAddUser = void 0;
class DbAddUser {
    constructor(hasher, addUserRepository, loadUserByEmailRepository, codeRandomRepository) {
        this.hasher = hasher;
        this.addUserRepository = addUserRepository;
        this.loadUserByEmailRepository = loadUserByEmailRepository;
        this.codeRandomRepository = codeRandomRepository;
    }
    async add(userData) {
        const user = await this.loadUserByEmailRepository.loadByEmail(userData.email);
        if (!user) {
            const hashedPassword = await this.hasher.hash(userData.password);
            const codeActivation = await this.codeRandomRepository.codeRandom();
            const newUser = await this.addUserRepository.add(Object.assign({}, userData, { password: hashedPassword, activateToken: codeActivation }));
            return newUser;
        }
        return null;
    }
}
exports.DbAddUser = DbAddUser;
