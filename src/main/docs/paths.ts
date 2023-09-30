import {
  storePath,
  storeByCompanyIdPath,
  storeByIdPath,
  addEquipment,
  loadEquipmentByCompanyId,
  loadEquipmentById,
  updateEquipment,
  deleteEquipment,
  addMenu,
  loadMenuByCompanyId,
  updateMenu,
  deleteMenu,
  loadMenuById,
  addGroup,
  loadGroupByMenuId,
  updateGroup,
  deleteGroup,
  addRecipe,
  loadRecipeByGroupId,
  updateRecipe,
  deleteRecipe,
  addRecipeCmax,
  loadRecipeCmaxByMenuId,
  deleteRecipeCmax,
  updateRecipeCmax,
  loadCookbookByCompanyId,
  addCookbook,
  deleteCookbook,
  updateCookbook,
  stepSpeedOvenPath,
  stepSpeedOvenByRecipeIdPath,
  stepSpeedOvenByIdPath,
  loadStepCombiOvenTSI,
  addStepCombiOvenTSI,
  deleteStepCombiOvenTSI,
  updateStepCombiOvenTSI,
  loadStepCombiOvenCMAX,
  addStepCombiOvenCMAX,
  deleteStepCombiOvenCMAX,
  updateStepCombiOvenCMAX,
  countEquipment,
  ExportCMaxFile,
  ExportForzaFile,
  ExportSpeedOvensFile,
  ExportTsiFile,
  ExportSpeedOvensLegacyFile
} from './paths/'

const equipmentPaths = {
  '/linux-equipments/create-new-linux/{pin}': addEquipment,
  '/equipment/count': countEquipment,
  '/equipment/{companyId}/company': loadEquipmentByCompanyId,
  '/equipment/{id}': {
    ...loadEquipmentById,
    ...updateEquipment,
    ...deleteEquipment
  }
}

const menuPaths = {
  '/menu': addMenu,
  '/company/{companyId}/menu': loadMenuByCompanyId,
  '/menu/{id}': {
    ...loadMenuById,
    ...updateMenu,
    ...deleteMenu
  }
}

const groupPaths = {
  '/group': addGroup,
  '/menu/{menuId}/group': loadGroupByMenuId,
  '/group/{id}': {
    ...updateGroup,
    ...deleteGroup
  }
}

const recipePaths = {
  '/recipe': addRecipe,
  '/group/{id}/recipe': loadRecipeByGroupId,
  '/recipe/{id}': updateRecipe,
  '/recipe/array': deleteRecipe
}

const recipeCmaxPaths = {
  '/recipe': addRecipeCmax,
  '/menu/{id}/recipe': loadRecipeCmaxByMenuId,
  '/recipe/{id}': updateRecipeCmax,
  '/recipe/array': deleteRecipeCmax
}

const cookbookPaths = {
  '/cookbook': addCookbook,
  '/company/{id}/cookbook': loadCookbookByCompanyId,
  '/cookbook/array': deleteCookbook,
  '/cookbook/{id}': updateCookbook
}

const stepSpeedOvenPaths = {
  '/stepSpeedOven': stepSpeedOvenPath,
  '/recipe/{recipeId}/stepSpeedOven': stepSpeedOvenByRecipeIdPath,
  '/stepSpeedOven/{id}': {
    ...stepSpeedOvenByIdPath
  }
}

const stepCombiOvenTSIPaths = {
  '/stepCombiOvenTSI': addStepCombiOvenTSI,
  '/recipe/{recipeId}/stepCombiOvenTSI': loadStepCombiOvenTSI,
  '/stepCombiOvenTSI/{id}': {
    ...updateStepCombiOvenTSI,
    ...deleteStepCombiOvenTSI
  }
}

const stepCombiOvenCMAXPaths = {
  '/stepCombiOvenCMAX': addStepCombiOvenCMAX,
  '/recipe/{recipeId}/stepCombiOvenCMAX': loadStepCombiOvenCMAX,
  '/stepCombiOvenCMAX/{id}': {
    ...updateStepCombiOvenCMAX,
    ...deleteStepCombiOvenCMAX
  }
}

const exportFilePaths = {
  '/c-max-file/export/{menuId}': ExportCMaxFile,
  '/forza-file/export/{menuId}': ExportForzaFile,
  '/tsi-file/export/{menuId}': ExportTsiFile,
  '/speed-ovens-file/export/{equipmentModel}/{menuId}': ExportSpeedOvensFile,
  '/speed-ovens-legacy/export/{generation}/{menuId}': ExportSpeedOvensLegacyFile,
}

export default {
  '/store': storePath,
  '/company/{companyId}/stores': storeByCompanyIdPath,
  '/store/{id}': storeByIdPath,
  ...equipmentPaths,
  ...menuPaths,
  ...groupPaths,
  ...recipePaths,
  ...recipeCmaxPaths,
  ...cookbookPaths,
  ...stepSpeedOvenPaths,
  ...stepCombiOvenTSIPaths,
  ...stepCombiOvenCMAXPaths,
  ...exportFilePaths
}
