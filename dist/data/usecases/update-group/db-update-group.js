"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbUpdateGroup = void 0;
class DbUpdateGroup {
    constructor(UpdateGroupRepository) {
        this.UpdateGroupRepository = UpdateGroupRepository;
    }
    async updateGroup(group) {
        const groups = await this.UpdateGroupRepository.updateGroup(group);
        if (groups) {
            return groups;
        }
        return null;
    }
}
exports.DbUpdateGroup = DbUpdateGroup;
