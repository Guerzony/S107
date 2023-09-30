"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupMySqlRepository = void 0;
const mysql_helper_1 = require("../mysql-helper");
const group_mysql_repository_helper_1 = require("./group-mysql-repository-helper");
const query_helpers_1 = require("../query-helpers");
class GroupMySqlRepository {
    constructor(pool) {
        this.connectionPool = pool;
    }
    async deleteGroup(id) {
        const result = await (0, mysql_helper_1.deleteById)(this.connectionPool, 'groups', 'id', id);
        if (result.affectedRows === 0)
            return false;
        return true;
    }
    async loadMenuGroup(idMenu) {
        const result = await (0, mysql_helper_1.getOne)(this.connectionPool, 'groups', 'menuId', idMenu);
        for (let i = 0; i < result.length; i++) {
            const recipeCount = await (0, mysql_helper_1.customGet)(this.connectionPool, `SELECT COUNT(*) as count FROM recipe WHERE groupId = ${result[i].id}`);
            const temp = { recipeCount: recipeCount[0].count };
            Object.assign(result[i], temp);
        }
        return result;
    }
    async loadGroup(id) {
        const result = await (0, mysql_helper_1.getOne)(this.connectionPool, 'groups', 'id', id);
        return result[0];
    }
    async updateGroup(groupData) {
        const groupFields = (`menuId = ${groupData.menuId}, 
      groupName = "${groupData.groupName}", 
      groupPosition = ${groupData.groupPosition}, 
      groupImage = "${groupData.groupImage}", 
      preHeat = ${groupData.preHeat}, 
      creationDate = "${groupData.creationDate}", 
      lastUpdate = "${groupData.lastUpdate}"`);
        const group = await (0, mysql_helper_1.updateAll)(this.connectionPool, 'groups', groupFields, groupData.id);
        return group;
    }
    async addGroup(groupData) {
        const menu = await (0, mysql_helper_1.insertOne)(this.connectionPool, 'groups', groupData);
        return (0, group_mysql_repository_helper_1.mapCreatedGroup)(groupData, menu.insertId);
    }
    async loadSpeedOvensGroups(menuId) {
        const query = (0, query_helpers_1.loadSpeedOvensGroupsQuery)(menuId);
        return await (0, mysql_helper_1.customGet)(this.connectionPool, query);
    }
    async loadTsiGroups(menuId) {
        const groupsQuery = (0, query_helpers_1.loadTsiGroupsQuery)(menuId);
        const recipesQuery = (0, query_helpers_1.loadTsiRecipesQuery)(menuId);
        const stepsQuery = (0, query_helpers_1.loadTsiStepsQuery)(menuId);
        const groupsResult = await (0, mysql_helper_1.customGet)(this.connectionPool, groupsQuery);
        const recipesResult = await (0, mysql_helper_1.customGet)(this.connectionPool, recipesQuery);
        const stepsResult = await (0, mysql_helper_1.customGet)(this.connectionPool, stepsQuery);
        const recipes = recipesResult.map((recipe) => ({
            ...recipe,
            steps: stepsResult.filter((step) => step.recipeId === recipe.recipeId)
        }));
        const groups = groupsResult.map((group) => ({
            ...group,
            recipes: recipes.filter((recipe) => recipe.groupId === group.groupId)
        }));
        return groups;
    }
}
exports.GroupMySqlRepository = GroupMySqlRepository;
