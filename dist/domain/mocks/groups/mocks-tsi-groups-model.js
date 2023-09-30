"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mockTsiGroupModel = void 0;
const mocks_tsi_recipes_model_1 = require("../recipes/mocks-tsi-recipes-model");
const groups = [
    {
        fromPlatform: true,
        groupId: 0,
        groupName: 'anyGroupName',
        groupPosition: 1,
        imageBase64: 'anyImageBase64',
        imageId: 0,
        imageSource: 'anyImageSource',
        recipes: []
    }
];
const mockTsiGroupModel = (groupId, recipeId) => {
    return groups.map(group => ({
        ...group,
        groupId: groupId !== null && groupId !== void 0 ? groupId : group.groupId,
        recipes: (0, mocks_tsi_recipes_model_1.mockTsiRecipeModel)(groupId !== null && groupId !== void 0 ? groupId : group.groupId, recipeId !== null && recipeId !== void 0 ? recipeId : 0)
    }));
};
exports.mockTsiGroupModel = mockTsiGroupModel;
