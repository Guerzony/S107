"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbLoadSpeedOvensRecipes = void 0;
class DbLoadSpeedOvensRecipes {
    // eslint-disable-next-line no-useless-constructor
    constructor(repository) {
        this.repository = repository;
    }
    async load(menuId) {
        return await this.repository.loadSpeedOvensRecipes(menuId);
    }
}
exports.DbLoadSpeedOvensRecipes = DbLoadSpeedOvensRecipes;
