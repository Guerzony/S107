"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbLoadSpeedOvensLegacyMenu = void 0;
class DbLoadSpeedOvensLegacyMenu {
    // eslint-disable-next-line no-useless-constructor
    constructor(repository) {
        this.repository = repository;
    }
    async load(menuId) {
        return await this.repository.loadSpeedOvensLegacyMenu(menuId);
    }
}
exports.DbLoadSpeedOvensLegacyMenu = DbLoadSpeedOvensLegacyMenu;
