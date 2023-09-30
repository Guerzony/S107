"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mockDbLoadTsiConfigsStub = void 0;
const mocks_1 = require("../../../domain/mocks");
const mockDbLoadTsiConfigsStub = () => {
    class DbLoadTsiConfigsStub {
        async load(menuId) {
            return (0, mocks_1.mockTsiConfigsModel)();
        }
    }
    return new DbLoadTsiConfigsStub();
};
exports.mockDbLoadTsiConfigsStub = mockDbLoadTsiConfigsStub;
