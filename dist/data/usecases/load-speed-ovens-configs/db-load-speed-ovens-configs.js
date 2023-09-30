"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbLoadSpeedOvensConfigs = void 0;
class DbLoadSpeedOvensConfigs {
    // eslint-disable-next-line no-useless-constructor
    constructor(repository) {
        this.repository = repository;
    }
    async load(menuId) {
        return await this.repository.loadSpeedOvensConfigs(menuId);
    }
}
exports.DbLoadSpeedOvensConfigs = DbLoadSpeedOvensConfigs;
