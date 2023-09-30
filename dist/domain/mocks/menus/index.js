"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mockAddStepSpeedOvenRequest = exports.mockReturnStepSpeedOven = exports.mockUpdateStepSpeedOven = exports.mockAddStepSpeedOven = exports.mockInsertStepSpeedOven = exports.mockStepSpeedOvenModel = exports.mockDeleteRecipeCmaxRequest = exports.mockLoadRecipeCmaxRequest = exports.mockUpdateRecipeCmaxRequest = exports.mockAddRecipeCmaxRequest = exports.mockReturnRecipeCmax = exports.mockUpdateRecipeCmax = exports.mockAddRecipeCmax = exports.mockInsertRecipeCmax = exports.mockRecipeCmaxModel = exports.mockDeleteRecipeRequest = exports.mockLoadRecipeRequest = exports.mockUpdateRecipeRequest = exports.mockAddRecipeRequest = exports.mockReturnRecipe = exports.mockUpdateRecipe = exports.mockAddRecipe = exports.mockInsertRecipe = exports.mockRecipeModel = exports.mockDeleteGroupRequest = exports.mockLoadGroupRequest = exports.mockUpdateGroupRequest = exports.mockAddGroupRequest = exports.mockReturnGroup = exports.mockUpdateGroup = exports.mockAddGroup = exports.mockInsertGroup = exports.mockGroupModel = exports.mockInsertMenuConfig = exports.mockReturnMenuConfig = exports.mockUpdateMenuConfig = exports.mockAddMenuConfig = exports.mockMenuConfigModel = exports.mockLoadMenuIdRequest = exports.mockLoadMenuByCompanyIdRequest = exports.mockAddMenuRequest = exports.mockDeleteMenuRequest = exports.mockUpdateMenuRequest = exports.mockReturnMenuAll = exports.mockReturnMenuAndConfig = exports.mockReturnMenu = exports.mockUpdateMenu = exports.mockAddMenu = exports.mockInsertMenu = exports.mockMenuModel = void 0;
exports.mockDeleteStepCombiOvenCMAXRequest = exports.mockLoadStepCombiOvenCMAXRequest = exports.mockUpdateStepCombiOvenCMAXRequest = exports.mockAddStepCombiOvenCMAXRequest = exports.mockReturnStepCombiOvenCMAX = exports.mockUpdateStepCombiOvenCMAX = exports.mockAddStepCombiOvenCMAX = exports.mockInsertStepCombiOvenCMAX = exports.mockStepCombiOvenCMAXModel = exports.mockDeleteStepCombiOvenTSIRequest = exports.mockLoadStepCombiOvenTSIRequest = exports.mockUpdateStepCombiOvenTSIRequest = exports.mockAddStepCombiOvenTSIRequest = exports.mockReturnStepCombiOvenTSI = exports.mockUpdateStepCombiOvenTSI = exports.mockAddStepCombiOvenTSI = exports.mockInsertStepCombiOvenTSI = exports.mockStepCombiOvenTSIModel = exports.mockLoadStepsSpeedOvenByRecipeIdResponse = exports.mockLoadStepsSpeedOvenByRecipeIdRequest = exports.mockDeleteStepSpeedOvenRequest = exports.mockLoadStepSpeedOvenRequest = exports.mockUpdateStepSpeedOvenRequest = void 0;
/* eslint-disable no-undef */
const mysql_helper_1 = require("../../../infra/db/mysql/mysql-helper");
const env_1 = __importDefault(require("../../../main/config/env"));
const mysql_1 = __importDefault(require("mysql"));
const user_1 = require("../user");
__exportStar(require("./mocks-speed-ovens-legacy-menu-model"), exports);
afterAll(() => {
    testConnection.end();
});
const testConnection = mysql_1.default.createPool(env_1.default.dbTest);
// Menu
const mockMenuModel = (idCompany) => ({
    menuName: 'menuName',
    equipTypeId: 1,
    companyId: idCompany,
    creationDate: '24-04-2022',
    lastUpdate: '24-04-2022',
    menuVersion: 1,
    deletionDate: '24-042022',
    userId: 1,
    deletedBy: 'valid_name',
    language: 'valid_language'
});
exports.mockMenuModel = mockMenuModel;
const mockInsertMenu = async () => {
    const result = await (0, user_1.mockInsertCompany)();
    await (0, mysql_helper_1.deleteAll)(testConnection, 'menu');
    const menuResult = await (0, mysql_helper_1.insertOne)(testConnection, 'menu', (0, exports.mockMenuModel)(result.idCompany));
    return { idMenu: menuResult.insertId, idCompany: result.idCompany };
};
exports.mockInsertMenu = mockInsertMenu;
const mockAddMenu = async () => {
    const companyResult = await (0, user_1.mockInsertCompany)();
    const result = (0, exports.mockMenuModel)(companyResult.idCompany);
    return result;
};
exports.mockAddMenu = mockAddMenu;
const mockUpdateMenu = async () => {
    const menuResult = await (0, exports.mockInsertMenu)();
    const result = Object.assign(await (0, exports.mockMenuModel)(menuResult.idCompany), { id: menuResult.idMenu });
    return result;
};
exports.mockUpdateMenu = mockUpdateMenu;
const mockReturnMenu = () => (Object.assign((0, exports.mockMenuModel)(1), { id: 1 }));
exports.mockReturnMenu = mockReturnMenu;
const mockReturnMenuAndConfig = () => (Object.assign((0, exports.mockReturnMenu)(), { configs: (0, exports.mockReturnMenuConfig)() }));
exports.mockReturnMenuAndConfig = mockReturnMenuAndConfig;
const mockReturnMenuAll = () => (Object.assign((0, exports.mockReturnMenu)(), { configs: (0, exports.mockReturnMenuConfig)() }, {
    groups: [Object.assign((0, exports.mockReturnGroup)(), {
            recipes: [Object.assign((0, exports.mockReturnRecipe)(), {
                    steps: (0, exports.mockReturnStepSpeedOven)()
                })]
        })]
}));
exports.mockReturnMenuAll = mockReturnMenuAll;
const mockUpdateMenuRequest = async () => {
    const resultMenu = await (0, exports.mockUpdateMenu)();
    const resultMenuConfig = await (0, exports.mockUpdateMenuConfig)();
    const httpRequest = {
        body: {
            menu: resultMenu,
            menuConfigs: resultMenuConfig
        },
        params: {
            id: resultMenu.id
        }
    };
    return httpRequest;
};
exports.mockUpdateMenuRequest = mockUpdateMenuRequest;
const mockDeleteMenuRequest = async () => {
    const resultMenu = await (0, exports.mockInsertMenu)();
    const httpRequest = {
        params: {
            id: resultMenu.idMenu
        }
    };
    return httpRequest;
};
exports.mockDeleteMenuRequest = mockDeleteMenuRequest;
const mockAddMenuRequest = async () => {
    const menuResult = await (0, exports.mockAddMenu)();
    const menuConfigResult = (0, exports.mockMenuConfigModel)(1);
    delete (menuConfigResult.menuId);
    const httpRequest = {
        body: {
            menu: menuResult,
            menuConfigs: menuConfigResult
        }
    };
    return httpRequest;
};
exports.mockAddMenuRequest = mockAddMenuRequest;
const mockLoadMenuByCompanyIdRequest = async () => {
    const menuResult = await (0, exports.mockInsertMenu)();
    const httpRequest = {
        params: {
            companyId: menuResult.idCompany
        }
    };
    return httpRequest;
};
exports.mockLoadMenuByCompanyIdRequest = mockLoadMenuByCompanyIdRequest;
const mockLoadMenuIdRequest = async () => {
    const menuAllResult = await (0, exports.mockInsertStepSpeedOven)();
    const httpRequest = {
        params: {
            id: menuAllResult.idMenu
        }
    };
    return httpRequest;
};
exports.mockLoadMenuIdRequest = mockLoadMenuIdRequest;
// Menu config mock
const mockMenuConfigModel = (idMenu) => ({
    menuId: idMenu,
    preHeat1: 1,
    preHeat2: 1,
    preHeat2Enabled: false,
    stabilizationTime: '11:11',
    dateFormat: 'ISO: AAAA/MM/DD',
    timeFormat: '24h',
    manualModeEnabled: false,
    favoritesEnabled: false,
    repeatRecipeEnabled: false,
    heatBrownMoreEnabled: false,
    temperatureUnit: 'Cº',
    weightUnit: 'gramas',
    theme: 'theme',
    introduction: false,
    combiOvenEnabled: false,
    multipleCookingEnabled: false,
    technicookRecipesEnabled: false,
    editGroupsEnabled: false,
    operatorModeEnabled: false,
    turboGrillEnabled: false,
    enableRecipePreRunMessage: false,
    enableAutoImport: false
});
exports.mockMenuConfigModel = mockMenuConfigModel;
const mockAddMenuConfig = async () => {
    const menuResult = await (0, exports.mockInsertMenu)();
    const result = (0, exports.mockMenuConfigModel)(menuResult.idMenu);
    return result;
};
exports.mockAddMenuConfig = mockAddMenuConfig;
const mockUpdateMenuConfig = async () => {
    const menuConfigResult = await (0, exports.mockInsertMenuConfig)();
    const result = Object.assign((0, exports.mockMenuConfigModel)(menuConfigResult.idMenu), { id: menuConfigResult.idConfig });
    return result;
};
exports.mockUpdateMenuConfig = mockUpdateMenuConfig;
const mockReturnMenuConfig = () => (Object.assign((0, exports.mockMenuConfigModel)(1), { id: 1 }));
exports.mockReturnMenuConfig = mockReturnMenuConfig;
const mockInsertMenuConfig = async () => {
    const result = await (0, exports.mockInsertMenu)();
    await (0, mysql_helper_1.deleteAll)(testConnection, 'menuConfigs');
    const menuConfigResult = await (0, mysql_helper_1.insertOne)(testConnection, 'menuConfigs', (0, exports.mockMenuConfigModel)(result.idMenu));
    return { idCompany: result.idCompany, idMenu: result.idMenu, idConfig: menuConfigResult.insertId };
};
exports.mockInsertMenuConfig = mockInsertMenuConfig;
// Group mock
const mockGroupModel = (idMenu) => ({
    menuId: idMenu,
    groupName: 'name',
    groupPosition: 1,
    groupImage: 'img',
    preHeat: 100,
    creationDate: '00/00/0000',
    lastUpdate: '00/00/0000'
});
exports.mockGroupModel = mockGroupModel;
const mockInsertGroup = async () => {
    const result = await (0, exports.mockInsertMenu)();
    await (0, mysql_helper_1.deleteAll)(testConnection, 'groups');
    const groupResult = await (0, mysql_helper_1.insertOne)(testConnection, 'groups', (0, exports.mockGroupModel)(result.idMenu));
    return { idMenu: result.idMenu, idGroup: groupResult.insertId };
};
exports.mockInsertGroup = mockInsertGroup;
const mockAddGroup = async () => {
    const menu = await (0, exports.mockInsertMenu)();
    const group = (0, exports.mockGroupModel)(menu.idMenu);
    return group;
};
exports.mockAddGroup = mockAddGroup;
const mockUpdateGroup = async () => {
    const resultGroup = await (0, exports.mockInsertGroup)();
    const result = Object.assign(await (0, exports.mockGroupModel)(resultGroup.idMenu), { id: resultGroup.idGroup });
    return result;
};
exports.mockUpdateGroup = mockUpdateGroup;
const mockReturnGroup = () => (Object.assign((0, exports.mockGroupModel)(1), { id: 1 }));
exports.mockReturnGroup = mockReturnGroup;
const mockAddGroupRequest = async () => {
    const result = await (0, exports.mockAddGroup)();
    const httpRequest = {
        body: {
            group: result
        }
    };
    return httpRequest;
};
exports.mockAddGroupRequest = mockAddGroupRequest;
const mockUpdateGroupRequest = async () => {
    const result = await (0, exports.mockUpdateGroup)();
    const httpRequest = {
        body: {
            group: result
        },
        params: {
            id: result.id
        }
    };
    return httpRequest;
};
exports.mockUpdateGroupRequest = mockUpdateGroupRequest;
const mockLoadGroupRequest = async () => {
    const resultGroup = await (0, exports.mockInsertGroup)();
    const httpRequest = {
        params: {
            idMenu: resultGroup.idMenu
        }
    };
    return httpRequest;
};
exports.mockLoadGroupRequest = mockLoadGroupRequest;
const mockDeleteGroupRequest = async () => {
    const resultGroup = await (0, exports.mockInsertGroup)();
    const httpRequest = {
        params: {
            id: resultGroup.idGroup
        }
    };
    return httpRequest;
};
exports.mockDeleteGroupRequest = mockDeleteGroupRequest;
// Recipe mock
const mockRecipeModel = (idMenu, idGroup) => ({
    equipTypeId: 1,
    groupId: idGroup,
    menuId: idMenu,
    recipeName: 'name',
    recipePosition: 1,
    recipeImage: 'img',
    creationDate: '0000-00-00 00:00:00',
    createdBy: 1,
    lastUpdate: '0000-00-00 00:00:00',
    updatedBy: 1,
    isFavorite: true,
    heatMore: 1,
    brownMore: 1,
    heatBrownMore: 1,
    ingredientType: 1,
    dishType: 1,
    ingredients: 'ingredients',
    instructions: 'instructions',
    weight: 1,
    entryTemp: 1,
    preheatTemp: 1,
    origin: 'origin',
    preheatMode: 'hotAir',
    preheatSteam: 1,
    preheatType: 'custom'
});
exports.mockRecipeModel = mockRecipeModel;
const mockInsertRecipe = async () => {
    const result = await (0, exports.mockInsertGroup)();
    await (0, mysql_helper_1.deleteAll)(testConnection, 'recipe');
    const recipeResult = await (0, mysql_helper_1.insertOne)(testConnection, 'recipe', (0, exports.mockRecipeModel)(result.idMenu, result.idGroup));
    return { idMenu: result.idMenu, idGroup: result.idGroup, idRecipe: recipeResult.insertId };
};
exports.mockInsertRecipe = mockInsertRecipe;
const mockAddRecipe = async () => {
    const group = await (0, exports.mockInsertGroup)();
    const recipe = (0, exports.mockRecipeModel)(group.idMenu, group.idGroup);
    return recipe;
};
exports.mockAddRecipe = mockAddRecipe;
const mockUpdateRecipe = async () => {
    const resultRecipe = await (0, exports.mockInsertRecipe)();
    const recipe = Object.assign(await (0, exports.mockRecipeModel)(resultRecipe.idMenu, resultRecipe.idGroup), { id: resultRecipe.idRecipe });
    return recipe;
};
exports.mockUpdateRecipe = mockUpdateRecipe;
const mockReturnRecipe = () => Object.assign((0, exports.mockRecipeModel)(1, 1), { id: 1 });
exports.mockReturnRecipe = mockReturnRecipe;
const mockAddRecipeRequest = async () => {
    const resultRecipe = await (0, exports.mockAddRecipe)();
    const httpRequest = {
        body: {
            recipe: [resultRecipe]
        }
    };
    return httpRequest;
};
exports.mockAddRecipeRequest = mockAddRecipeRequest;
const mockUpdateRecipeRequest = async () => {
    const resultRecipe = await (0, exports.mockUpdateRecipe)();
    const httpRequest = {
        body: {
            recipe: resultRecipe
        },
        params: {
            id: resultRecipe.id
        }
    };
    return httpRequest;
};
exports.mockUpdateRecipeRequest = mockUpdateRecipeRequest;
const mockLoadRecipeRequest = async () => {
    const recipe = await (0, exports.mockInsertRecipe)();
    const httpRequest = {
        params: {
            id: recipe.idGroup
        }
    };
    return httpRequest;
};
exports.mockLoadRecipeRequest = mockLoadRecipeRequest;
const mockDeleteRecipeRequest = async () => {
    const resultRecipe = await (0, exports.mockInsertRecipe)();
    const httpRequest = {
        body: {
            idArray: [
                resultRecipe.idRecipe
            ],
            equipType: 1
        }
    };
    return httpRequest;
};
exports.mockDeleteRecipeRequest = mockDeleteRecipeRequest;
const mockRecipeCmaxModel = (idMenu) => ({
    equipTypeId: 4,
    menuId: idMenu,
    recipeName: 'name',
    recipePosition: 1,
    creationDate: '00/00/0000',
    createdBy: 1,
    lastUpdate: '00/00/0000',
    updatedBy: 1,
    preheatOn: true,
    preheatTemp: 1,
    preheatFunction: true,
    preheatSteamLevel: 1,
    weight: 1,
    entryTemp: 1,
    ingredientType: 1,
    dishType: 1,
    ingredients: 'ingredients',
    instructions: 'instructions',
    origin: 'origin'
});
exports.mockRecipeCmaxModel = mockRecipeCmaxModel;
const mockInsertRecipeCmax = async () => {
    const result = await (0, exports.mockInsertMenu)();
    await (0, mysql_helper_1.deleteAll)(testConnection, 'cmaxRecipe');
    const recipeCmaxResult = await (0, mysql_helper_1.insertOne)(testConnection, 'cmaxRecipe', (0, exports.mockRecipeCmaxModel)(result.idMenu));
    return { idMenu: result.idMenu, idRecipeCmax: recipeCmaxResult.insertId };
};
exports.mockInsertRecipeCmax = mockInsertRecipeCmax;
const mockAddRecipeCmax = async () => {
    const menu = await (0, exports.mockInsertMenu)();
    const recipe = (0, exports.mockRecipeCmaxModel)(menu.idMenu);
    return recipe;
};
exports.mockAddRecipeCmax = mockAddRecipeCmax;
const mockUpdateRecipeCmax = async () => {
    const resultRecipe = await (0, exports.mockInsertRecipeCmax)();
    const recipe = Object.assign(await (0, exports.mockRecipeCmaxModel)(resultRecipe.idMenu), { id: resultRecipe.idRecipeCmax });
    return recipe;
};
exports.mockUpdateRecipeCmax = mockUpdateRecipeCmax;
const mockReturnRecipeCmax = () => Object.assign((0, exports.mockRecipeCmaxModel)(1), { id: 1 });
exports.mockReturnRecipeCmax = mockReturnRecipeCmax;
const mockAddRecipeCmaxRequest = async () => {
    const resultRecipe = await (0, exports.mockAddRecipeCmax)();
    const httpRequest = {
        body: {
            recipe: [resultRecipe]
        }
    };
    return httpRequest;
};
exports.mockAddRecipeCmaxRequest = mockAddRecipeCmaxRequest;
const mockUpdateRecipeCmaxRequest = async () => {
    const resultRecipeCmax = await (0, exports.mockUpdateRecipeCmax)();
    const httpRequest = {
        body: {
            recipe: resultRecipeCmax
        }
    };
    return httpRequest;
};
exports.mockUpdateRecipeCmaxRequest = mockUpdateRecipeCmaxRequest;
const mockLoadRecipeCmaxRequest = async () => {
    const recipe = await (0, exports.mockInsertRecipeCmax)();
    const httpRequest = {
        params: {
            id: recipe.idRecipeCmax
        }
    };
    return httpRequest;
};
exports.mockLoadRecipeCmaxRequest = mockLoadRecipeCmaxRequest;
const mockDeleteRecipeCmaxRequest = async () => {
    const resultRecipe = await (0, exports.mockInsertRecipeCmax)();
    const httpRequest = {
        body: {
            idArray: [
                resultRecipe.idRecipeCmax
            ],
            equipType: 4
        }
    };
    return httpRequest;
};
exports.mockDeleteRecipeCmaxRequest = mockDeleteRecipeCmaxRequest;
// Step speed oven mock
const mockStepSpeedOvenModel = (idMenu, idRecipe) => ({
    recipeId: idRecipe,
    equipTypeId: 1,
    menuId: idMenu,
    stepPosition: 1,
    isActive: true,
    stepTemperature: 1,
    tempIsPreheat: true,
    stepTime: '11:11',
    hotAirSpeed: 1,
    microwaves: 1,
    internalResistance: 1,
    stepInfo: 'info',
    stepFrom: 'fromCookbook'
});
exports.mockStepSpeedOvenModel = mockStepSpeedOvenModel;
const mockInsertStepSpeedOven = async () => {
    const recipe = await (0, exports.mockInsertRecipe)();
    await (0, mysql_helper_1.deleteAll)(testConnection, 'stepSpeedOven');
    const stepSpeedOvenResult = await (0, mysql_helper_1.insertOne)(testConnection, 'stepSpeedOven', (0, exports.mockStepSpeedOvenModel)(recipe.idMenu, recipe.idRecipe));
    return { idMenu: recipe.idMenu, idRecipe: recipe.idRecipe, idStepSpeedOven: stepSpeedOvenResult.insertId };
};
exports.mockInsertStepSpeedOven = mockInsertStepSpeedOven;
const mockAddStepSpeedOven = async () => {
    const recipe = await (0, exports.mockInsertRecipe)();
    const stepSpeedOven = (0, exports.mockStepSpeedOvenModel)(recipe.idMenu, recipe.idRecipe);
    return stepSpeedOven;
};
exports.mockAddStepSpeedOven = mockAddStepSpeedOven;
const mockUpdateStepSpeedOven = async () => {
    const resultStepSpeedOven = await (0, exports.mockInsertStepSpeedOven)();
    const stepSpeedOven = Object.assign(await (0, exports.mockStepSpeedOvenModel)(resultStepSpeedOven.idMenu, resultStepSpeedOven.idRecipe), { id: resultStepSpeedOven.idStepSpeedOven });
    return stepSpeedOven;
};
exports.mockUpdateStepSpeedOven = mockUpdateStepSpeedOven;
const mockReturnStepSpeedOven = () => Object.assign((0, exports.mockStepSpeedOvenModel)(1, 1), { id: 1 });
exports.mockReturnStepSpeedOven = mockReturnStepSpeedOven;
const mockAddStepSpeedOvenRequest = async () => {
    const resultStepSpeedOven = await (0, exports.mockAddStepSpeedOven)();
    const httpRequest = {
        body: {
            stepSpeedOven: resultStepSpeedOven
        }
    };
    return httpRequest;
};
exports.mockAddStepSpeedOvenRequest = mockAddStepSpeedOvenRequest;
const mockUpdateStepSpeedOvenRequest = async () => {
    const resultStepSpeedOven = await (0, exports.mockUpdateStepSpeedOven)();
    const httpRequest = {
        body: {
            stepSpeedOven: resultStepSpeedOven
        },
        params: {
            id: resultStepSpeedOven.id
        }
    };
    return httpRequest;
};
exports.mockUpdateStepSpeedOvenRequest = mockUpdateStepSpeedOvenRequest;
const mockLoadStepSpeedOvenRequest = async () => {
    const stepSpeedOven = await (0, exports.mockInsertStepSpeedOven)();
    const httpRequest = {
        params: {
            id: stepSpeedOven.idRecipe
        }
    };
    return httpRequest;
};
exports.mockLoadStepSpeedOvenRequest = mockLoadStepSpeedOvenRequest;
const mockDeleteStepSpeedOvenRequest = async () => {
    const resultStepSpeedOven = await (0, exports.mockInsertStepSpeedOven)();
    const httpRequest = {
        params: {
            id: resultStepSpeedOven.idStepSpeedOven
        }
    };
    return httpRequest;
};
exports.mockDeleteStepSpeedOvenRequest = mockDeleteStepSpeedOvenRequest;
const mockLoadStepsSpeedOvenByRecipeIdRequest = async () => {
    const stepSpeedOvenResult = await (0, exports.mockInsertStepSpeedOven)();
    const httpRequest = {
        params: {
            recipeId: stepSpeedOvenResult.idRecipe,
            stepFrom: 'fromCookbook'
        }
    };
    return httpRequest;
};
exports.mockLoadStepsSpeedOvenByRecipeIdRequest = mockLoadStepsSpeedOvenByRecipeIdRequest;
const mockLoadStepsSpeedOvenByRecipeIdResponse = () => ([{
        id: 1,
        recipeId: 1,
        equipTypeId: 1,
        menuId: 1,
        stepPosition: 1,
        isActive: true,
        stepTemperature: 1,
        tempIsPreheat: true,
        stepTime: '11:11',
        hotAirSpeed: 1,
        microwaves: 1,
        internalResistance: 1,
        stepInfo: 'info',
        stepFrom: 'fromCookbook'
    }, {
        id: 2,
        recipeId: 1,
        equipTypeId: 1,
        menuId: 1,
        stepPosition: 2,
        isActive: false,
        stepTemperature: 2,
        tempIsPreheat: false,
        stepTime: '11:11',
        hotAirSpeed: 2,
        microwaves: 2,
        internalResistance: 2,
        stepInfo: 'info2',
        stepFrom: 'fromCookbook'
    }]);
exports.mockLoadStepsSpeedOvenByRecipeIdResponse = mockLoadStepsSpeedOvenByRecipeIdResponse;
// step tsi mock
const mockStepCombiOvenTSIModel = (idMenu, idRecipe) => ({
    recipeId: idRecipe,
    equipTypeId: 1,
    menuId: idMenu,
    stepPosition: 1,
    isActive: true,
    stepTemperature: 1,
    steamPercentage: 1,
    fanSpeed: 1,
    steamInjection: 1,
    stepInfo: 'info',
    endByTime: true,
    stepTime: 1,
    probeTargetTemp: 1,
    stepFrom: 'fromCookbook',
    stepMode: 'string',
    stepsTurboGrill: true
});
exports.mockStepCombiOvenTSIModel = mockStepCombiOvenTSIModel;
const mockInsertStepCombiOvenTSI = async () => {
    const result = await (0, exports.mockInsertRecipe)();
    await (0, mysql_helper_1.deleteAll)(testConnection, 'stepCombiOvenTSI');
    const stepResult = await (0, mysql_helper_1.insertOne)(testConnection, 'stepCombiOvenTSI', (0, exports.mockStepCombiOvenTSIModel)(result.idMenu, result.idRecipe));
    return { idMenu: result.idMenu, idRecipe: result.idRecipe, idStep: stepResult.insertId };
};
exports.mockInsertStepCombiOvenTSI = mockInsertStepCombiOvenTSI;
const mockAddStepCombiOvenTSI = async () => {
    const recipe = await (0, exports.mockInsertRecipe)();
    const stepCombiOvenTSI = (0, exports.mockStepCombiOvenTSIModel)(recipe.idMenu, recipe.idRecipe);
    return stepCombiOvenTSI;
};
exports.mockAddStepCombiOvenTSI = mockAddStepCombiOvenTSI;
const mockUpdateStepCombiOvenTSI = async () => {
    const resultStepCombiOvenTSI = await (0, exports.mockInsertStepCombiOvenTSI)();
    const stepCombiOvenTSI = Object.assign(await (0, exports.mockStepCombiOvenTSIModel)(resultStepCombiOvenTSI.idMenu, resultStepCombiOvenTSI.idRecipe), { id: resultStepCombiOvenTSI.idStep });
    return stepCombiOvenTSI;
};
exports.mockUpdateStepCombiOvenTSI = mockUpdateStepCombiOvenTSI;
const mockReturnStepCombiOvenTSI = () => Object.assign((0, exports.mockStepCombiOvenTSIModel)(1, 1), { id: 1 });
exports.mockReturnStepCombiOvenTSI = mockReturnStepCombiOvenTSI;
const mockAddStepCombiOvenTSIRequest = async () => {
    const resultStepCombiOvenTSI = await (0, exports.mockAddStepCombiOvenTSI)();
    const httpRequest = {
        body: {
            stepCombiOvenTSI: resultStepCombiOvenTSI
        }
    };
    return httpRequest;
};
exports.mockAddStepCombiOvenTSIRequest = mockAddStepCombiOvenTSIRequest;
const mockUpdateStepCombiOvenTSIRequest = async () => {
    const resultStepCombiOvenTSI = await (0, exports.mockUpdateStepCombiOvenTSI)();
    const httpRequest = {
        body: {
            stepCombiOvenTSI: resultStepCombiOvenTSI
        },
        params: {
            id: resultStepCombiOvenTSI.id
        }
    };
    return httpRequest;
};
exports.mockUpdateStepCombiOvenTSIRequest = mockUpdateStepCombiOvenTSIRequest;
const mockLoadStepCombiOvenTSIRequest = async () => {
    const stepCombiOvenTSI = await (0, exports.mockInsertStepCombiOvenTSI)();
    const httpRequest = {
        params: {
            id: stepCombiOvenTSI.idRecipe,
            stepFrom: 'fromCookbook'
        }
    };
    return httpRequest;
};
exports.mockLoadStepCombiOvenTSIRequest = mockLoadStepCombiOvenTSIRequest;
const mockDeleteStepCombiOvenTSIRequest = async () => {
    const resultStepCombiOvenTSI = await (0, exports.mockInsertStepCombiOvenTSI)();
    const httpRequest = {
        params: {
            id: resultStepCombiOvenTSI.idStep
        }
    };
    return httpRequest;
};
exports.mockDeleteStepCombiOvenTSIRequest = mockDeleteStepCombiOvenTSIRequest;
// step c-max mock
const mockStepCombiOvenCMAXModel = (idMenu, idRecipeCmax) => ({
    recipeId: idRecipeCmax,
    menuId: idMenu,
    stepPosition: 1,
    isActive: true,
    stepTemperature: 1,
    ovenFunction: 1,
    timeOrProbe: 1,
    stepTime: 1,
    probeTargetTemp: 1,
    stepSteamLevel: 1,
    steamInjection: 1,
    dumperStatus: 1,
    stepFrom: 'fromCookbook'
});
exports.mockStepCombiOvenCMAXModel = mockStepCombiOvenCMAXModel;
const mockInsertStepCombiOvenCMAX = async () => {
    const result = await (0, exports.mockInsertRecipeCmax)();
    await (0, mysql_helper_1.deleteAll)(testConnection, 'stepCombiOvenCMAX');
    const stepResult = await (0, mysql_helper_1.insertOne)(testConnection, 'stepCombiOvenCMAX', (0, exports.mockStepCombiOvenCMAXModel)(result.idMenu, result.idRecipeCmax));
    return { idMenu: result.idMenu, idRecipeCmax: result.idRecipeCmax, idStep: stepResult.insertId };
};
exports.mockInsertStepCombiOvenCMAX = mockInsertStepCombiOvenCMAX;
const mockAddStepCombiOvenCMAX = async () => {
    const recipe = await (0, exports.mockInsertRecipeCmax)();
    const stepCombiOvenCMAX = (0, exports.mockStepCombiOvenCMAXModel)(recipe.idMenu, recipe.idRecipeCmax);
    return stepCombiOvenCMAX;
};
exports.mockAddStepCombiOvenCMAX = mockAddStepCombiOvenCMAX;
const mockUpdateStepCombiOvenCMAX = async () => {
    const resultStepCombiOvenCMAX = await (0, exports.mockInsertStepCombiOvenCMAX)();
    const stepCombiOvenCMAX = Object.assign(await (0, exports.mockStepCombiOvenCMAXModel)(resultStepCombiOvenCMAX.idMenu, resultStepCombiOvenCMAX.idRecipeCmax), { id: resultStepCombiOvenCMAX.idStep });
    return stepCombiOvenCMAX;
};
exports.mockUpdateStepCombiOvenCMAX = mockUpdateStepCombiOvenCMAX;
const mockReturnStepCombiOvenCMAX = () => Object.assign((0, exports.mockStepCombiOvenCMAXModel)(1, 1), { id: 1 });
exports.mockReturnStepCombiOvenCMAX = mockReturnStepCombiOvenCMAX;
const mockAddStepCombiOvenCMAXRequest = async () => {
    const resultStepCombiOvenCMAX = await (0, exports.mockAddStepCombiOvenCMAX)();
    const httpRequest = {
        body: {
            stepCombiOvenCMAX: resultStepCombiOvenCMAX
        }
    };
    return httpRequest;
};
exports.mockAddStepCombiOvenCMAXRequest = mockAddStepCombiOvenCMAXRequest;
const mockUpdateStepCombiOvenCMAXRequest = async () => {
    const resultStepCombiOvenCMAX = await (0, exports.mockUpdateStepCombiOvenCMAX)();
    const httpRequest = {
        body: {
            stepCombiOvenCMAX: resultStepCombiOvenCMAX
        },
        params: {
            id: resultStepCombiOvenCMAX.id
        }
    };
    return httpRequest;
};
exports.mockUpdateStepCombiOvenCMAXRequest = mockUpdateStepCombiOvenCMAXRequest;
const mockLoadStepCombiOvenCMAXRequest = async () => {
    const stepCombiOvenCMAX = await (0, exports.mockInsertStepCombiOvenCMAX)();
    const httpRequest = {
        params: {
            id: stepCombiOvenCMAX.idRecipeCmax,
            stepFrom: 'fromCookbook'
        }
    };
    return httpRequest;
};
exports.mockLoadStepCombiOvenCMAXRequest = mockLoadStepCombiOvenCMAXRequest;
const mockDeleteStepCombiOvenCMAXRequest = async () => {
    const resultStepCombiOvenCMAX = await (0, exports.mockInsertStepCombiOvenCMAX)();
    const httpRequest = {
        params: {
            id: resultStepCombiOvenCMAX.idStep
        }
    };
    return httpRequest;
};
exports.mockDeleteStepCombiOvenCMAXRequest = mockDeleteStepCombiOvenCMAXRequest;
