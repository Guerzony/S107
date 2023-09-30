"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CookbookMySqlRepository = void 0;
const mysql_helper_1 = require("../mysql-helper");
class CookbookMySqlRepository {
    constructor(pool) {
        this.connectionPool = pool;
    }
    async addCookbook(cookbook) {
        const result = await (0, mysql_helper_1.insertOne)(this.connectionPool, 'cookbookRecipe', cookbook);
        return { ...cookbook, id: result.insertId };
    }
    async loadRecipeCookbook(idCompany) {
        const result = await (0, mysql_helper_1.getOne)(this.connectionPool, 'cookbookRecipe', 'companyId', idCompany);
        return result;
    }
    async updateCookbook(id, cookbook) {
        const setFields = Object.entries(cookbook)
            .map(value => `${value[0]} = ${isNaN(value[1]) ? `"${value[1]}"` : value[1]}`)
            .join(', ');
        const result = await (0, mysql_helper_1.updateAll)(this.connectionPool, 'cookbookRecipe', setFields, id);
        if (result.affectedRows === 0)
            return false;
        return true;
    }
    async deleteCookbook(id) {
        const result = await (0, mysql_helper_1.deleteById)(this.connectionPool, 'cookbookRecipe', 'id', id);
        if (result.affectedRows === 0)
            return false;
        return true;
    }
}
exports.CookbookMySqlRepository = CookbookMySqlRepository;
