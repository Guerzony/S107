"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mockTsiConfigsModel = void 0;
const configs = {
    configsId: 0,
    dateFormat: 'anyDataFormat',
    editGroupsEnabled: true,
    enableAutoImport: true,
    enableRecipePreRunMessage: true,
    favoritesEnabled: true,
    isIconOnlyMode: true,
    language: 'anyLanguage',
    manualModeEnabled: true,
    multipleCookingEnabled: true,
    tempUnit: 'anyTempUnit',
    timeFormat: 'anyTime',
    timezone: 'anyTimezone',
    tsiRecipesEnabled: true,
    userTurboGrillEnabled: true
};
const mockTsiConfigsModel = (configsId) => ({ ...configs, configsId: configsId !== null && configsId !== void 0 ? configsId : 0 });
exports.mockTsiConfigsModel = mockTsiConfigsModel;
