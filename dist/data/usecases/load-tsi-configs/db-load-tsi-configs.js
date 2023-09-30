"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbLoadTsiConfigs = void 0;
class DbLoadTsiConfigs {
    // eslint-disable-next-line no-useless-constructor
    constructor(repository) {
        this.repository = repository;
    }
    async load(menuId) {
        return await this.repository.loadTsiConfigs(menuId);
    }
}
exports.DbLoadTsiConfigs = DbLoadTsiConfigs;
