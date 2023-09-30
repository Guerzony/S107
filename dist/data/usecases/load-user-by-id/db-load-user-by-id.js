"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbLoadUserById = void 0;
class DbLoadUserById {
    constructor(loadUserByIdRepository) {
        this.loadUserByIdRepository = loadUserByIdRepository;
    }
    async load(id) {
        const user = await this.loadUserByIdRepository.loadById(id);
        if (user) {
            return user;
        }
        return null;
    }
}
exports.DbLoadUserById = DbLoadUserById;
