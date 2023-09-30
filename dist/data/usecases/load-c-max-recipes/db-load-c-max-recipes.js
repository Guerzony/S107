"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbLoadCMaxRecipes = void 0;
class DbLoadCMaxRecipes {
    // eslint-disable-next-line no-useless-constructor
    constructor(repository) {
        this.repository = repository;
    }
    async load(menuId) {
        return await this.repository.loadCMaxRecipes(menuId);
    }
}
exports.DbLoadCMaxRecipes = DbLoadCMaxRecipes;
