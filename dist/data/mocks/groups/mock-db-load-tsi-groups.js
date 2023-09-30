"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mockDbLoadTsiGroupsStub = void 0;
const mocks_1 = require("../../../domain/mocks");
const mockDbLoadTsiGroupsStub = () => {
    class DbLoadTsiGroupsStub {
        async load(menuId) {
            return (0, mocks_1.mockTsiGroupModel)();
        }
    }
    return new DbLoadTsiGroupsStub();
};
exports.mockDbLoadTsiGroupsStub = mockDbLoadTsiGroupsStub;
