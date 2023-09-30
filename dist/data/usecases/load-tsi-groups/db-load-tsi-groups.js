"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbLoadTsiGroups = void 0;
class DbLoadTsiGroups {
    // eslint-disable-next-line no-useless-constructor
    constructor(repository) {
        this.repository = repository;
    }
    async load(menuId) {
        return await this.repository.loadTsiGroups(menuId);
    }
}
exports.DbLoadTsiGroups = DbLoadTsiGroups;
