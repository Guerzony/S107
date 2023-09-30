"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mockCreateMenu = exports.mockMenuRepositoryStub = void 0;
const menus_1 = require("../../../domain/mocks/menus");
const mysql_helper_1 = require("../mysql/mysql-helper");
const user_1 = require("../../../domain/mocks/user");
const mockMenuRepositoryStub = () => {
    class MenuRepositoryStub {
        async loadSpeedOvensLegacyMenu(menuId) {
            return (0, menus_1.mockSpeedOvensLegacyMenuModel)();
        }
    }
    return new MenuRepositoryStub();
};
exports.mockMenuRepositoryStub = mockMenuRepositoryStub;
const mockCreateMenu = async (testConnection) => {
    const companyResult = await (0, mysql_helper_1.insertOne)(testConnection, 'company', (0, user_1.mockCompanyModel)());
    const menuResult = await (0, mysql_helper_1.insertOne)(testConnection, 'menu', (0, menus_1.mockMenuModel)(companyResult.insertId));
    const menuId = menuResult.insertId;
    await (0, mysql_helper_1.insertOne)(testConnection, 'menuConfigs', (0, menus_1.mockMenuConfigModel)(menuResult.insertId));
    const groupResult = await (0, mysql_helper_1.insertOne)(testConnection, 'groups', (0, menus_1.mockGroupModel)(menuId));
    const groupId = groupResult.insertId;
    const recipeResult = await (0, mysql_helper_1.insertOne)(testConnection, 'recipe', (0, menus_1.mockRecipeModel)(menuId, groupId));
    const recipeId = recipeResult.insertId;
    await (0, mysql_helper_1.insertOne)(testConnection, 'stepSpeedOven', (0, menus_1.mockStepSpeedOvenModel)(menuId, recipeId));
    await (0, mysql_helper_1.insertOne)(testConnection, 'stepSpeedOven', (0, menus_1.mockStepSpeedOvenModel)(menuId, recipeId));
    return { menuId };
};
exports.mockCreateMenu = mockCreateMenu;
