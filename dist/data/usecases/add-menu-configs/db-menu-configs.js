"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbAddMenuConfigs = void 0;
class DbAddMenuConfigs {
    constructor(addMenuRepository) {
        this.addMenuRepository = addMenuRepository;
    }
    async addConfigs(menuConfigsData) {
        await this.addMenuRepository.addConfig(menuConfigsData);
    }
}
exports.DbAddMenuConfigs = DbAddMenuConfigs;
