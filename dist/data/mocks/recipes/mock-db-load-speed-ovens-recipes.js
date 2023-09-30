"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mockDbLoadSpeedOvensRecipesStub = void 0;
const mocks_1 = require("../../../domain/mocks");
const mockDbLoadSpeedOvensRecipesStub = () => {
    class DbLoadSpeedOvensRecipesStub {
        async load(menuId) {
            return (0, mocks_1.mockLoadSpeedOvensRecipes)();
        }
    }
    return new DbLoadSpeedOvensRecipesStub();
};
exports.mockDbLoadSpeedOvensRecipesStub = mockDbLoadSpeedOvensRecipesStub;
