"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbLoadConfigsByUserId = void 0;
class DbLoadConfigsByUserId {
    constructor(loadConfigsByUserIdRepository) {
        this.loadConfigsByUserIdRepository = loadConfigsByUserIdRepository;
    }
    async load(id) {
        const configs = await this.loadConfigsByUserIdRepository.loadByUserId(id);
        if (configs) {
            return configs;
        }
        return null;
    }
}
exports.DbLoadConfigsByUserId = DbLoadConfigsByUserId;
