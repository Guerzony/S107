"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mockDbLoadSpeedOvensConfigsStub = void 0;
const mocks_1 = require("../../../domain/mocks");
const mockDbLoadSpeedOvensConfigsStub = () => {
    class DbLoadSpeedOvensConfigsStub {
        async load(menuId) {
            return (0, mocks_1.mockLoadSpeedOvensConfigs)();
        }
    }
    return new DbLoadSpeedOvensConfigsStub();
};
exports.mockDbLoadSpeedOvensConfigsStub = mockDbLoadSpeedOvensConfigsStub;
