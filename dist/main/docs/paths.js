"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const paths_1 = require("./paths/");
const userPaths = {
    '/linux-users/create-new-linux/{pin}': paths_1.addUser,
    '/user/count': paths_1.countUser,
    '/user/{companyId}/company': paths_1.loadUserByCompanyId,
    '/user/{id}': {
        ...paths_1.loadUserById,
        ...paths_1.updateUser,
        ...paths_1.deleteUser
    }
};
const menuPaths = {
    '/menu': paths_1.addMenu,
    '/company/{companyId}/menu': paths_1.loadMenuByCompanyId,
    '/menu/{id}': {
        ...paths_1.loadMenuById,
        ...paths_1.updateMenu,
        ...paths_1.deleteMenu
    }
};
const groupPaths = {
    '/group': paths_1.addGroup,
    '/menu/{menuId}/group': paths_1.loadGroupByMenuId,
    '/group/{id}': {
        ...paths_1.updateGroup,
        ...paths_1.deleteGroup
    }
};
const recipePaths = {
    '/recipe': paths_1.addRecipe,
    '/group/{id}/recipe': paths_1.loadRecipeByGroupId,
    '/recipe/{id}': paths_1.updateRecipe,
    '/recipe/array': paths_1.deleteRecipe
};
const recipeCmaxPaths = {
    '/recipe': paths_1.addRecipeCmax,
    '/menu/{id}/recipe': paths_1.loadRecipeCmaxByMenuId,
    '/recipe/{id}': paths_1.updateRecipeCmax,
    '/recipe/array': paths_1.deleteRecipeCmax
};
const cookbookPaths = {
    '/cookbook': paths_1.addCookbook,
    '/company/{id}/cookbook': paths_1.loadCookbookByCompanyId,
    '/cookbook/array': paths_1.deleteCookbook,
    '/cookbook/{id}': paths_1.updateCookbook
};
const stepSpeedOvenPaths = {
    '/stepSpeedOven': paths_1.stepSpeedOvenPath,
    '/recipe/{recipeId}/stepSpeedOven': paths_1.stepSpeedOvenByRecipeIdPath,
    '/stepSpeedOven/{id}': {
        ...paths_1.stepSpeedOvenByIdPath
    }
};
const stepCombiOvenTSIPaths = {
    '/stepCombiOvenTSI': paths_1.addStepCombiOvenTSI,
    '/recipe/{recipeId}/stepCombiOvenTSI': paths_1.loadStepCombiOvenTSI,
    '/stepCombiOvenTSI/{id}': {
        ...paths_1.updateStepCombiOvenTSI,
        ...paths_1.deleteStepCombiOvenTSI
    }
};
const stepCombiOvenCMAXPaths = {
    '/stepCombiOvenCMAX': paths_1.addStepCombiOvenCMAX,
    '/recipe/{recipeId}/stepCombiOvenCMAX': paths_1.loadStepCombiOvenCMAX,
    '/stepCombiOvenCMAX/{id}': {
        ...paths_1.updateStepCombiOvenCMAX,
        ...paths_1.deleteStepCombiOvenCMAX
    }
};
const exportFilePaths = {
    '/c-max-file/export/{menuId}': paths_1.ExportCMaxFile,
    '/forza-file/export/{menuId}': paths_1.ExportForzaFile,
    '/tsi-file/export/{menuId}': paths_1.ExportTsiFile,
    '/speed-ovens-file/export/{userModel}/{menuId}': paths_1.ExportSpeedOvensFile,
    '/speed-ovens-legacy/export/{generation}/{menuId}': paths_1.ExportSpeedOvensLegacyFile,
};
exports.default = {
    '/store': paths_1.storePath,
    '/company/{companyId}/stores': paths_1.storeByCompanyIdPath,
    '/store/{id}': paths_1.storeByIdPath,
    ...userPaths,
    ...menuPaths,
    ...groupPaths,
    ...recipePaths,
    ...recipeCmaxPaths,
    ...cookbookPaths,
    ...stepSpeedOvenPaths,
    ...stepCombiOvenTSIPaths,
    ...stepCombiOvenCMAXPaths,
    ...exportFilePaths
};
