"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mockDbLoadSpeedOvensGroupsStub = void 0;
const mocks_1 = require("../../../domain/mocks");
const mockDbLoadSpeedOvensGroupsStub = () => {
    class DbLoadSpeedOvensGroupsStub {
        async load(menuId) {
            return (0, mocks_1.mockLoadSpeedOvensGroups)();
        }
    }
    return new DbLoadSpeedOvensGroupsStub();
};
exports.mockDbLoadSpeedOvensGroupsStub = mockDbLoadSpeedOvensGroupsStub;
