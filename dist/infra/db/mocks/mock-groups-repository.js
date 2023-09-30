"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mockGroupsRepositoryStub = void 0;
const mocks_1 = require("../../../domain/mocks");
const mockGroupsRepositoryStub = () => {
    class GroupsRepositoryStub {
        async loadTsiGroups(menuId) {
            return (0, mocks_1.mockTsiGroupModel)();
        }
        async loadSpeedOvensGroups(menuId) {
            return (0, mocks_1.mockLoadSpeedOvensGroups)();
        }
    }
    return new GroupsRepositoryStub();
};
exports.mockGroupsRepositoryStub = mockGroupsRepositoryStub;
