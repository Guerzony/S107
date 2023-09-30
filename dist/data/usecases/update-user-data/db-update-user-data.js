"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbEditUserData = void 0;
class DbEditUserData {
    constructor(hasher, editUserDataRepository, loadUserByIdRepository) {
        this.hasher = hasher;
        this.editUserDataRepository = editUserDataRepository;
        this.loadUserByIdRepository = loadUserByIdRepository;
    }
    async editUserData(user) {
        let hashedPassword;
        if (user.password) {
            hashedPassword = await this.hasher.hash(user.password);
            await this.editUserDataRepository.editUserData(Object.assign({}, user, { password: hashedPassword }));
        }
        else {
            await this.editUserDataRepository.editUserData(user);
        }
        const userResult = await this.loadUserByIdRepository.loadById(user.id);
        if (userResult) {
            return userResult;
        }
        return null;
    }
}
exports.DbEditUserData = DbEditUserData;
