"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecoverUserMySqlRepository = void 0;
const mysql_1 = __importDefault(require("mysql"));
const env_1 = __importDefault(require("../../../../main/config/env"));
const mysql_helper_1 = require("../mysql-helper");
class RecoverUserMySqlRepository {
    constructor() {
        this.connectionPool = mysql_1.default.createPool(env_1.default.previousDb);
    }
    async loadUser(idUser) {
        const test = mysql_1.default.createPool(env_1.default.previousDb);
        const result = await (0, mysql_helper_1.getOne)(test, 'users_linux', 'id_user', idUser);
        test.end();
        return result;
    }
    async loadMenu(idUser) {
        const test = mysql_1.default.createPool(env_1.default.previousDb);
        const result = await (0, mysql_helper_1.getOne)(test, 'minhas_receitas', 'id_usuario', idUser);
        test.end();
        return result;
    }
    async loadSettings(idMenu) {
        const test = mysql_1.default.createPool(env_1.default.previousDb);
        const result = await (0, mysql_helper_1.getOne)(test, 'configuracoes', 'id_minhas_receitas', idMenu);
        test.end();
        return result[0];
    }
    async loadGroup(idMenu) {
        const test = mysql_1.default.createPool(env_1.default.previousDb);
        const result = await (0, mysql_helper_1.getOne)(test, 'grupos', 'id_minhas_receitas', idMenu);
        test.end();
        return result;
    }
    async loadRecipe(idGroup) {
        const test = mysql_1.default.createPool(env_1.default.previousDb);
        const result = await (0, mysql_helper_1.getOne)(test, 'receitas', 'id_grupo', idGroup);
        test.end();
        return result;
    }
    async loadStep(idRecipe) {
        const test = mysql_1.default.createPool(env_1.default.previousDb);
        const result = await (0, mysql_helper_1.getOne)(test, 'passo_receita', 'id_receita', idRecipe);
        test.end();
        return result;
    }
    async loadStepCmax(idRecipeCmax) {
        const test = mysql_1.default.createPool(env_1.default.previousDb);
        const result = await (0, mysql_helper_1.getOne)(test, 'passo_cmax', 'id_receita', idRecipeCmax);
        test.end();
        return result;
    }
    async loadRecipeCmax(idMenu) {
        const test = mysql_1.default.createPool(env_1.default.previousDb);
        const result = await (0, mysql_helper_1.getOne)(test, 'receitas_cmax', 'id_menu', idMenu);
        test.end();
        return result;
    }
    async loadStepTsi(idRecipe) {
        const test = mysql_1.default.createPool(env_1.default.previousDb);
        const result = await (0, mysql_helper_1.getOne)(test, 'stepCombiOvenTSI', 'recipeId', idRecipe);
        test.end();
        return result;
    }
}
exports.RecoverUserMySqlRepository = RecoverUserMySqlRepository;
