"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mockDeleteCookbookRequest = exports.mockLoadCookbookRequest = exports.mockUpdateCookbookRequest = exports.mockAddCookbookRequest = exports.mockReturnCookbook = exports.mockUpdateCookbook = exports.mockAddCookbook = exports.mockInsertCookbook = exports.mockCookbookModel = void 0;
/* eslint-disable no-undef */
const mysql_helper_1 = require("../../../infra/db/mysql/mysql-helper");
const env_1 = __importDefault(require("../../../main/config/env"));
const mysql_1 = __importDefault(require("mysql"));
const user_1 = require("../user");
afterAll(() => {
    testConnection.end();
});
const testConnection = mysql_1.default.createPool(env_1.default.dbTest);
// Cookbook
const mockCookbookModel = (companyId) => ({
    equipTypeId: 1,
    recipeName: 'recipeName',
    recipeImage: 'recipeImage',
    creationDate: '00-00-0000',
    createdBy: 1,
    lastUpdate: '00-00-0000',
    updatedBy: 1,
    ingredientType: 1,
    dishType: 1,
    ingredients: 'ingredients',
    instructions: 'instructions',
    weight: 1,
    entryTemp: 1,
    companyId: companyId,
    menuId: 1,
    language: 'PT',
    origin: 'origin',
    preheatTemp: 1,
    preheatMode: 'hotAir',
    preheatSteam: 1,
    preheatType: 'custom'
});
exports.mockCookbookModel = mockCookbookModel;
const mockInsertCookbook = async () => {
    const company = await (0, user_1.mockInsertCompany)();
    await (0, mysql_helper_1.deleteAll)(testConnection, 'cookbookRecipe');
    const cookbookResult = await (0, mysql_helper_1.insertOne)(testConnection, 'cookbookRecipe', (0, exports.mockCookbookModel)(company.idCompany));
    return { idCookbook: cookbookResult.insertId, idCompany: company.idCompany };
};
exports.mockInsertCookbook = mockInsertCookbook;
const mockAddCookbook = async () => {
    const company = await (0, user_1.mockInsertCompany)();
    const cookbookResult = (0, exports.mockCookbookModel)(company.idCompany);
    return cookbookResult;
};
exports.mockAddCookbook = mockAddCookbook;
const mockUpdateCookbook = async () => {
    const cookbook = await (0, exports.mockInsertCookbook)();
    const cookbookResult = Object.assign((0, exports.mockCookbookModel)(cookbook.idCompany), { id: cookbook.idCookbook });
    return cookbookResult;
};
exports.mockUpdateCookbook = mockUpdateCookbook;
const mockReturnCookbook = () => (Object.assign((0, exports.mockCookbookModel)(1), { id: 1 }));
exports.mockReturnCookbook = mockReturnCookbook;
const mockAddCookbookRequest = async () => {
    const cookbookResult = await (0, exports.mockAddCookbook)();
    const httpRequest = {
        body: {
            cookbook: cookbookResult
        }
    };
    return httpRequest;
};
exports.mockAddCookbookRequest = mockAddCookbookRequest;
const mockUpdateCookbookRequest = async () => {
    const cookbookResult = await (0, exports.mockUpdateCookbook)();
    const httpRequest = {
        body: {
            cookbook: cookbookResult
        },
        params: {
            id: cookbookResult.id
        }
    };
    return httpRequest;
};
exports.mockUpdateCookbookRequest = mockUpdateCookbookRequest;
const mockLoadCookbookRequest = async () => {
    const cookbook = await (0, exports.mockInsertCookbook)();
    const httpRequest = {
        params: {
            id: cookbook.idCompany
        }
    };
    return httpRequest;
};
exports.mockLoadCookbookRequest = mockLoadCookbookRequest;
const mockDeleteCookbookRequest = async () => {
    const cookbook = await (0, exports.mockInsertCookbook)();
    const httpRequest = {
        body: {
            cookbook: [{
                    id: cookbook.idCookbook,
                    equipType: 1
                }]
        }
    };
    return httpRequest;
};
exports.mockDeleteCookbookRequest = mockDeleteCookbookRequest;
