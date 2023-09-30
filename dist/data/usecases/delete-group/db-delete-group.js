"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbDeleteGroup = void 0;
class DbDeleteGroup {
    constructor(deleteGroupRepository) {
        this.deleteGroupRepository = deleteGroupRepository;
    }
    async deleteGroup(id) {
        return await this.deleteGroupRepository.deleteGroup(id);
    }
}
exports.DbDeleteGroup = DbDeleteGroup;
