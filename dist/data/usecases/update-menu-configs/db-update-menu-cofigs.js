"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbUpdateMenuConfigs = void 0;
class DbUpdateMenuConfigs {
    constructor(UpdateMenuConfigsRepository) {
        this.UpdateMenuConfigsRepository = UpdateMenuConfigsRepository;
    }
    async updateMenuConfigs(menuConfigs) {
        await this.UpdateMenuConfigsRepository.updateMenuConfigs(menuConfigs);
    }
}
exports.DbUpdateMenuConfigs = DbUpdateMenuConfigs;
