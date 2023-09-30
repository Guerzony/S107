"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mockSpeedOvensLegacyGroupsModel = void 0;
const recipes_1 = require("../recipes");
const groups = [
    {
        creationDate: 'anyCreationDate',
        groupImage: 'anyGroupImage',
        groupName: 'anyGroupName',
        groupPosition: 0,
        id: 0,
        lastUpdate: 'anyLastUpdate',
        menuId: 0,
        preHeat: 0,
        preHeat1: 0,
        recipes: (0, recipes_1.mockSpeedOvensLegacyRecipeModel)()
    }
];
const mockSpeedOvensLegacyGroupsModel = () => groups;
exports.mockSpeedOvensLegacyGroupsModel = mockSpeedOvensLegacyGroupsModel;
