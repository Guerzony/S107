"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mockCreateMenuConfigs = exports.mockMenuConfigsRepositoryStub = void 0;
const mysql_helper_1 = require("../mysql/mysql-helper");
const user_1 = require("../../../domain/mocks/user");
const menus_1 = require("../../../domain/mocks/menus");
const mocks_1 = require("../../../domain/mocks");
const mockMenuConfigsRepositoryStub = () => {
    class MenuConfigsRepositoryStub {
        async loadSpeedOvensConfigs(menuId) {
            return (0, mocks_1.mockLoadSpeedOvensConfigs)();
        }
        async loadTsiConfigs(menuId) {
            return (0, mocks_1.mockTsiConfigsModel)();
        }
    }
    return new MenuConfigsRepositoryStub();
};
exports.mockMenuConfigsRepositoryStub = mockMenuConfigsRepositoryStub;
const mockCreateMenuConfigs = async (testConnection) => {
    const companyResult = await (0, mysql_helper_1.insertOne)(testConnection, 'company', (0, user_1.mockCompanyModel)());
    const menuResult = await (0, mysql_helper_1.insertOne)(testConnection, 'menu', (0, menus_1.mockMenuModel)(companyResult.insertId));
    const menuId = menuResult.insertId;
    await (0, mysql_helper_1.insertOne)(testConnection, 'menuConfigs', (0, menus_1.mockMenuConfigModel)(menuResult.insertId));
    return { menuId };
};
exports.mockCreateMenuConfigs = mockCreateMenuConfigs;
