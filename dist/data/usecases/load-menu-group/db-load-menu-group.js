"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbLoadMenuGroup = void 0;
class DbLoadMenuGroup {
    constructor(loadMenuGroupRepository) {
        this.loadMenuGroupRepository = loadMenuGroupRepository;
    }
    async loadMenuGroup(idMenu) {
        const groups = await this.loadMenuGroupRepository.loadMenuGroup(idMenu);
        return groups;
    }
}
exports.DbLoadMenuGroup = DbLoadMenuGroup;
