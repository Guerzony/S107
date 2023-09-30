"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbLoadSpeedOvensGroups = void 0;
class DbLoadSpeedOvensGroups {
    // eslint-disable-next-line no-useless-constructor
    constructor(repository) {
        this.repository = repository;
    }
    async load(menuId) {
        return await this.repository.loadSpeedOvensGroups(menuId);
    }
}
exports.DbLoadSpeedOvensGroups = DbLoadSpeedOvensGroups;
