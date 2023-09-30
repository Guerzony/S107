"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mockRecipesRepositoryStub = void 0;
const mocks_1 = require("../../../domain/mocks");
const mockRecipesRepositoryStub = () => {
    class RecipesRepositoryStub {
        async loadCMaxRecipes(menuId) {
            return (0, mocks_1.mockCMaxRecipesModel)();
        }
        async loadSpeedOvensRecipes(menuId) {
            return (0, mocks_1.mockLoadSpeedOvensRecipes)();
        }
    }
    return new RecipesRepositoryStub();
};
exports.mockRecipesRepositoryStub = mockRecipesRepositoryStub;
