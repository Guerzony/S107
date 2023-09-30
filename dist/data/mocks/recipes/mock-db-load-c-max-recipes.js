"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mockDbLoadCMaxRecipesStub = void 0;
const mocks_1 = require("../../../domain/mocks");
const mockDbLoadCMaxRecipesStub = () => {
    class DbLoadCMaxRecipesStub {
        async load(menuId) {
            return (0, mocks_1.mockCMaxRecipesModel)();
        }
    }
    return new DbLoadCMaxRecipesStub();
};
exports.mockDbLoadCMaxRecipesStub = mockDbLoadCMaxRecipesStub;
