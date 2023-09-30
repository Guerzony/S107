"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mockDbLoadSpeedOvensLegacyMenuStub = void 0;
const menus_1 = require("../../../domain/mocks/menus");
const mockDbLoadSpeedOvensLegacyMenuStub = () => {
    class DbLoadSpeedOvensLegacyMenuStub {
        async load(menuId) {
            return (0, menus_1.mockSpeedOvensLegacyMenuModel)();
        }
    }
    return new DbLoadSpeedOvensLegacyMenuStub();
};
exports.mockDbLoadSpeedOvensLegacyMenuStub = mockDbLoadSpeedOvensLegacyMenuStub;
