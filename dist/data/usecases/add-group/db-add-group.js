"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbAddGroup = void 0;
class DbAddGroup {
    constructor(addGroupRepository) {
        this.addGroupRepository = addGroupRepository;
    }
    async addGroup(group) {
        const groupResult = await this.addGroupRepository.addGroup(group);
        return groupResult;
    }
}
exports.DbAddGroup = DbAddGroup;
