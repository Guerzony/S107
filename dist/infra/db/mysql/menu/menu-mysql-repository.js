"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuMySqlRepository = void 0;
const mysql_helper_1 = require("../mysql-helper");
const menu_mysql_repository_helper_1 = require("./menu-mysql-repository-helper");
const query_helpers_1 = require("../query-helpers");
class MenuMySqlRepository {
    constructor(pool) {
        this.connectionPool = pool;
    }
    async loadSpeedOvensLegacyMenu(menuId) {
        const configsResult = await (0, mysql_helper_1.customGet)(this.connectionPool, (0, query_helpers_1.loadMenuConfigsByMenuIdQuery)(menuId));
        const groupsResult = await (0, mysql_helper_1.customGet)(this.connectionPool, (0, query_helpers_1.loadGroupsByMenuIdQuery)(menuId));
        const recipesResult = await (0, mysql_helper_1.customGet)(this.connectionPool, (0, query_helpers_1.loadRecipesByMenuIdQuery)(menuId));
        const stepsResult = await (0, mysql_helper_1.customGet)(this.connectionPool, (0, query_helpers_1.loadStepsByMenuIdQuery)(menuId));
        const configs = configsResult[0];
        if (!configs)
            return null;
        const recipes = recipesResult.map((recipe) => ({
            ...recipe,
            steps: stepsResult.filter((step) => step.recipeId === recipe.id)
        }));
        const groups = groupsResult.map((group) => ({
            ...group,
            recipes: recipes.filter((recipe) => recipe.groupId === group.id)
        }));
        return { configs, groups };
    }
    async loadMenuById(id) {
        const result = await (0, mysql_helper_1.getOne)(this.connectionPool, 'menu', 'id', id);
        return result[0];
    }
    async loadMenuConfig(idMenu) {
        const result = await (0, mysql_helper_1.getOne)(this.connectionPool, 'menuConfigs', 'menuId', idMenu);
        return result[0];
    }
    async loadMenu(idCompany) {
        const sql = (0, query_helpers_1.loadMenurByCorporateSQL)(idCompany);
        const result = await (0, mysql_helper_1.customGet)(this.connectionPool, sql);
        return result;
    }
    async updateMenu(menuData) {
        const setFields = Object.entries(menuData)
            .map(value => `${value[0]} = ${isNaN(value[1]) ? `"${value[1]}"` : value[1]}`)
            .join(', ');
        const menuResult = await (0, mysql_helper_1.updateAll)(this.connectionPool, 'menu', setFields, menuData.id);
        const menuUpdate = Object.assign({ id: menuResult.insertId }, menuData);
        return menuUpdate;
    }
    async updateMenuConfigs(menuConfigsData) {
        const setFields = Object.entries(menuConfigsData)
            .map(value => `${value[0]} = ${isNaN(value[1]) ? `"${value[1]}"` : value[1]}`)
            .join(', ');
        const menuConfigResult = await (0, mysql_helper_1.updateAll)(this.connectionPool, 'menuConfigs', setFields, menuConfigsData.id);
        const menuConfig = Object.assign({ id: menuConfigResult.insertId }, menuConfigResult);
        return menuConfig;
    }
    async addConfig(menuConfigData) {
        const menuConfig = await (0, mysql_helper_1.insertOne)(this.connectionPool, 'menuConfigs', menuConfigData);
        return Object.assign({ id: menuConfig.insertId }, menuConfigData);
    }
    async add(menuData) {
        const menu = await (0, mysql_helper_1.insertOne)(this.connectionPool, 'menu', menuData);
        return (0, menu_mysql_repository_helper_1.mapCreatedMenu)(menuData, menu.insertId);
    }
    async deleteMenu(id) {
        const result = await (0, mysql_helper_1.deleteById)(this.connectionPool, 'menu', 'id', id);
        if (result.affectedRows === 0) {
            return false;
        }
        return true;
    }
    async deleteMenuConfig(id) {
        await (0, mysql_helper_1.deleteById)(this.connectionPool, 'menuConfigs', 'id', id);
    }
}
exports.MenuMySqlRepository = MenuMySqlRepository;
