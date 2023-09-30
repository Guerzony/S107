"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbUpdateConfigs = void 0;
class DbUpdateConfigs {
    constructor(updateConfigsRepository, loadConfigsRepository) {
        this.updateConfigsRepository = updateConfigsRepository;
        this.loadConfigsRepository = loadConfigsRepository;
    }
    async updateConfigs(configs) {
        const result = await this.updateConfigsRepository.updateConfigs(configs);
        await this.loadConfigsRepository.loadByUserId(configs.userId);
        if (result) {
            return result;
        }
        return null;
    }
}
exports.DbUpdateConfigs = DbUpdateConfigs;
