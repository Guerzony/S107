"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbAddConfigs = void 0;
class DbAddConfigs {
    constructor(addConfigsRepository) {
        this.addConfigsRepository = addConfigsRepository;
    }
    async add(configs) {
        const savedConfigs = await this.addConfigsRepository.add(configs);
        if (savedConfigs) {
            return savedConfigs;
        }
        return null;
    }
}
exports.DbAddConfigs = DbAddConfigs;
