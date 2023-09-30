"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadStepsByMenuIdQuery = exports.loadRecipesByMenuIdQuery = exports.loadGroupsByMenuIdQuery = exports.loadMenuConfigsByMenuIdQuery = exports.loadCMaxStepsQuery = exports.loadCMaxRecipesQuery = exports.loadTsiStepsQuery = exports.loadTsiRecipesQuery = exports.loadTsiGroupsQuery = exports.loadTsiConfigsQuery = exports.loadSpeedOvensStepsQuery = exports.loadSpeedOvensRecipesQuery = exports.loadSpeedOvensGroupsQuery = exports.loadSpeedOvensConfigsQuery = exports.loadMenurByCorporateSQL = exports.loadUserByCorporateNameSQL = exports.loadEquipByUserIdSQL = exports.countEquipmentSQL = exports.loadEquipByIdSQL = exports.loadEquipByCompanyIdSQL = exports.loadEquipByCompanyIdRemoteAccessSQL = void 0;
const loadEquipByCompanyIdRemoteAccessSQL = (companyIdRemoteAccess) => `SELECT 
equipment.id as id,
equipment.name as name,
equipment.categoryId as categoryId,
equipment.typeEquipment as typeEquipment,
equipment.storeId as storeId,
equipment.serialNumber as serialNumber,
equipment.creationDate as creationDate,
equipment.softwareVersion as softwareVersion,
equipment.sentMenu as sentMenu,
equipment.companyId as companyId,
equipment.iokPin as iokPin,
equipment.idUser as idUser,
equipment.dataUpdate as dataUpdate,
equipment.appUpdate as appUpdate,
equipment.statusData as statusData,
equipment.statusApp as statusApp,
equipment.hashSw as hashSw,
equipment.menuId as menuId,
equipment.lastUpdate as lastUpdate,
equipment.powerVersion as powerVersion,
categoryType.category as categoryName,
store.storeName as storeName,
store.latitude as latitude,
store.longitude as longitude
FROM equipment 
LEFT JOIN categoryType on equipment.categoryId = categoryType.id
LEFT JOIN store on equipment.storeId = store.id
WHERE equipment.companyIdRemoteAccess = ${companyIdRemoteAccess}`;
exports.loadEquipByCompanyIdRemoteAccessSQL = loadEquipByCompanyIdRemoteAccessSQL;
const loadEquipByCompanyIdSQL = (companyId) => `SELECT 
equipment.id as id,
equipment.name as name,
equipment.categoryId as categoryId,
equipment.typeEquipment as typeEquipment,
equipment.storeId as storeId,
equipment.serialNumber as serialNumber,
equipment.creationDate as creationDate,
equipment.softwareVersion as softwareVersion,
equipment.sentMenu as sentMenu,
equipment.companyId as companyId,
equipment.iokPin as iokPin,
equipment.idUser as idUser,
equipment.dataUpdate as dataUpdate,
equipment.appUpdate as appUpdate,
equipment.statusData as statusData,
equipment.statusApp as statusApp,
equipment.hashSw as hashSw,
equipment.menuId as menuId,
equipment.lastUpdate as lastUpdate,
equipment.companyIdRemoteAccess as companyIdRemoteAccess,
equipment.powerVersion as powerVersion,
categoryType.category as categoryName,
store.storeName as storeName,
store.latitude as latitude,
store.longitude as longitude
FROM equipment 
LEFT JOIN categoryType on equipment.categoryId = categoryType.id
LEFT JOIN store on equipment.storeId = store.id
WHERE equipment.companyId = ${companyId}`;
exports.loadEquipByCompanyIdSQL = loadEquipByCompanyIdSQL;
const loadEquipByIdSQL = (id) => `SELECT 
equipment.id as id,
equipment.name as name,
equipment.categoryId as categoryId,
equipment.typeEquipment as typeEquipment,
equipment.storeId as storeId,
equipment.serialNumber as serialNumber,
equipment.creationDate as creationDate,
equipment.softwareVersion as softwareVersion,
equipment.sentMenu as sentMenu,
equipment.companyId as companyId,
equipment.iokPin as iokPin,
equipment.idUser as idUser,
equipment.dataUpdate as dataUpdate,
equipment.appUpdate as appUpdate,
equipment.statusData as statusData,
equipment.statusApp as statusApp,
equipment.hashSw as hashSw,
equipment.menuId as menuId,
equipment.lastUpdate as lastUpdate,
equipment.companyIdRemoteAccess as companyIdRemoteAccess,
equipment.powerVersion as powerVersion,
categoryType.category as categoryName,
store.storeName as storeName,
menu.menuName as menuName,
CONCAT(store.street, ', ', store.streetNumber, ' - ', store.neighborhood) as address,
store.city as city,
store.state as state,
store.zipCode as zipCode
FROM equipment
LEFT JOIN categoryType on equipment.categoryId = categoryType.id
LEFT JOIN store on equipment.storeId = store.id
LEFT JOIN menu on equipment.sentMenu = menu.id
WHERE equipment.id = ${id}`;
exports.loadEquipByIdSQL = loadEquipByIdSQL;
const countEquipmentSQL = (where) => {
    if (!where)
        return 'SELECT COUNT(*) as count FROM equipment';
    const key = Object.keys(where)[0];
    return `SELECT COUNT(*) as count FROM equipment WHERE ${key} = ${isNaN(+where[key]) ? `'${where[key]}'` : where[key]}`;
};
exports.countEquipmentSQL = countEquipmentSQL;
const loadEquipByUserIdSQL = (userId) => `SELECT 
equipment.id as id,
equipment.name as name,
equipment.categoryId as categoryId,
equipment.typeEquipment as typeEquipment,
equipment.storeId as storeId,
equipment.serialNumber as serialNumber,
equipment.creationDate as creationDate,
equipment.softwareVersion as softwareVersion,
equipment.sentMenu as sentMenu,
equipment.companyId as companyId,
equipment.iokPin as iokPin,
equipment.idUser as idUser,
equipment.dataUpdate as dataUpdate,
equipment.appUpdate as appUpdate,
equipment.statusData as statusData,
equipment.statusApp as statusApp,
equipment.hashSw as hashSw,
equipment.menuId as menuId,
equipment.lastUpdate as lastUpdate,
equipment.companyIdRemoteAccess as companyIdRemoteAccess,
equipment.powerVersion as powerVersion,
categoryType.category as categoryName,
store.storeName as storeName,
store.latitude as latitude,
store.longitude as longitude
FROM equipment 
LEFT JOIN categoryType on equipment.categoryId = categoryType.id
LEFT JOIN store on equipment.storeId = store.id
INNER JOIN UserBelongStore AS U ON (U.idStore = storeId) WHERE U.idUser = ${userId}`;
exports.loadEquipByUserIdSQL = loadEquipByUserIdSQL;
const loadUserByCorporateNameSQL = (corporateName) => `SELECT u.*
FROM User u
JOIN company c ON u.companyId = c.id
WHERE c.corporateName = '${corporateName}' AND u.userTypeId = 1;`;
exports.loadUserByCorporateNameSQL = loadUserByCorporateNameSQL;
const loadMenurByCorporateSQL = (companyId) => `SELECT m.*,
  CASE
    WHEN m.equipTypeId = 4 THEN 0
    ELSE (SELECT COUNT(*) FROM groups WHERE menuId = m.id)
  END AS groupCount,
  CASE
    WHEN m.equipTypeId = 4 THEN (SELECT COUNT(*) FROM cmaxRecipe WHERE menuId = m.id)
    ELSE (SELECT COUNT(*) FROM recipe WHERE menuId = m.id)
  END AS recipeCount,
  CASE
    WHEN m.equipTypeId = 4 THEN 0
    ELSE (SELECT COUNT(*) FROM equipment WHERE sentMenu = m.id)
  END AS equipCount
FROM menu m
WHERE m.companyId = ${companyId};`;
exports.loadMenurByCorporateSQL = loadMenurByCorporateSQL;
const loadSpeedOvensConfigsQuery = (menuId) => `
SELECT 
DATE_FORMAT(menu.creationDate, '%d/%m/%Y') AS data,
configs.enableRecipePreRunMessage AS enableRecipePreRunMessage,
configs.heatBrownMoreEnabled AS enable_aquec_dourar,
configs.enableAutoImport AS enable_auto_import,
configs.favoritesEnabled AS enable_favoritos,
configs.manualModeEnabled AS enable_modo_manual,
configs.operatorModeEnabled AS enable_modo_operador,
configs.repeatRecipeEnabled AS enable_rep_receita,
SUBSTRING_INDEX(configs.dateFormat, ':', 1) AS formato_data,
configs.timeFormat AS formato_hora,
DATE_FORMAT(menu.creationDate, '%H:%i') AS hora,
menu.language AS idioma,
configs.preHeat1 AS pre_aquec_1,
configs.preHeat2 AS pre_aquec_2,
configs.preHeat2Enabled AS pre_aquec_2_enabled,
configs.stabilizationTime AS time_pre_aquec,
configs.temperatureUnit AS unidade_temp
FROM menuConfigs AS configs
LEFT JOIN menu AS menu ON configs.menuId = menu.id
WHERE menuId = ${menuId};
`;
exports.loadSpeedOvensConfigsQuery = loadSpeedOvensConfigsQuery;
const loadSpeedOvensGroupsQuery = (menuId) => `
SELECT
groups.id AS id,
groups.groupName AS nome,
IF(groups.preHeat = 2, 'PRE_AQUE_2', 'PRE_AQUE_1') AS tempOrigin,
IF(groups.groupImage LIKE 'data:%', groups.groupImage, '') AS imageBase64,
IF(groups.preHeat = 2, 200, 100) AS temp,
groups.groupPosition AS gridId,
CASE
	WHEN groups.groupImage LIKE 'data:%' THEN 999
    WHEN groups.groupImage LIKE 'Z.png' THEN 0
	ELSE images.imageId
END AS iconId,
IF(groups.groupImage LIKE 'data:%', true, false) AS isImageLibrary
FROM groups AS groups
LEFT JOIN images AS images ON groups.groupImage = images.imageName
WHERE groups.menuId = ${menuId};
`;
exports.loadSpeedOvensGroupsQuery = loadSpeedOvensGroupsQuery;
const loadSpeedOvensRecipesQuery = (menuId) => `
SELECT 
recipes.id AS id,
recipes.recipeName AS nome,
recipes.brownMore AS dourarMais,
recipes.heatMore AS aquecerMais,
recipes.heatBrownMore AS aquecerDourarMais,
IF(recipes.recipeImage LIKE 'data:%', recipes.recipeImage, '') AS imageBase64,
recipes.isFavorite AS favorita,
IF(recipes.recipeImage LIKE 'data:%', true, false) AS isImageLibrary,
recipes.recipePosition AS gridId,
recipes.groupId AS group_id,
CASE
	WHEN recipes.recipeImage LIKE 'data:%' THEN 999
    WHEN recipes.recipeImage LIKE 'Z.png' THEN 0
	ELSE images.imageId
END AS iconId
FROM recipe AS recipes
LEFT JOIN images AS images ON recipes.recipeImage = images.imageName
WHERE recipes.menuId = ${menuId};
`;
exports.loadSpeedOvensRecipesQuery = loadSpeedOvensRecipesQuery;
const loadSpeedOvensStepsQuery = (menuId) => `
SELECT 
steps.id AS id,
steps.stepPosition AS stepNumber,
steps.hotAirSpeed AS ar,
steps.internalResistance AS lastro,
steps.microwaves AS micro,
steps.stepTemperature AS temp,
steps.stepTime AS time,
steps.stepInfo AS info,
steps.isActive AS isEnable,
steps.isActive AS isManualTemp,
steps.recipeId AS recipeId
FROM stepSpeedOven As steps
LEFT JOIN recipe AS recipes ON steps.recipeId = recipes.id
where recipes.menuId = ${menuId};
`;
exports.loadSpeedOvensStepsQuery = loadSpeedOvensStepsQuery;
const loadTsiConfigsQuery = (menuId) => `
SELECT 
configs.id AS configsId,
SUBSTRING_INDEX(configs.dateFormat, ':', 1) AS dateFormat,
configs.editGroupsEnabled,
configs.enableAutoImport,
configs.enableRecipePreRunMessage,
configs.favoritesEnabled,
configs.isIconOnlyMode,
menu.language,
configs.manualModeEnabled,
configs.multipleCookingEnabled,
configs.temperatureUnit AS tempUnit,
configs.timeFormat,
configs.timezone,
configs.technicookRecipesEnabled AS tsiRecipesEnabled,
configs.turboGrillEnabled AS userTurboGrillEnabled
FROM menuConfigs AS configs
LEFT JOIN menu ON configs.menuId = menu.id
WHERE configs.menuId = ${menuId};

`;
exports.loadTsiConfigsQuery = loadTsiConfigsQuery;
const loadTsiGroupsQuery = (menuId) => `
SELECT
1 AS fromPlatform,
groups.id AS groupId,
groups.groupName,
groups.groupPosition,
IF(groups.groupImage LIKE 'data:%', groups.groupImage, '') AS imageBase64,
CASE
	WHEN groups.groupImage LIKE 'data:%' THEN 999
    WHEN groups.groupImage LIKE 'Z.png' THEN 0
	ELSE images.imageId
END AS imageId,
IF(groups.groupImage LIKE 'data:%', '', groups.groupImage) AS imageSource
FROM groups
LEFT JOIN images ON groups.groupImage = images.imageName
WHERE groups.menuId = ${menuId};
`;
exports.loadTsiGroupsQuery = loadTsiGroupsQuery;
const loadTsiRecipesQuery = (menuId) => `
SELECT 
1 AS fromPlatform,
recipe.groupId,
IF(recipe.recipeImage LIKE 'data:%', recipe.recipeImage, '') AS imageBase64,
CASE
	WHEN recipe.recipeImage LIKE 'data:%' THEN 999
    WHEN recipe.recipeImage LIKE 'Z.png' THEN 0
	ELSE images.imageId
END AS imageId,
recipe.isFavorite,
recipe.preheatMode,
recipe.preheatSteam,
recipe.preheatTemp,
recipe.preheatType,
0 AS recipeCounter,
recipe.id AS recipeId,
recipeName
FROM recipe
LEFT JOIN images ON recipe.recipeImage = images.imageName
WHERE recipe.menuId = ${menuId};
`;
exports.loadTsiRecipesQuery = loadTsiRecipesQuery;
const loadTsiStepsQuery = (menuId) => `
SELECT 
steps.endByTime,
steps.fanSpeed,
steps.isActive,
steps.probeTargetTemp,
steps.recipeId,
steps.steamPercentage,
steps.id AS stepId,
steps.stepInfo,
steps.stepMode,
steps.stepPosition,
steps.stepTemperature,
steps.stepTime
FROM stepCombiOvenTSI As steps
LEFT JOIN recipe AS recipes ON steps.recipeId = recipes.id
where recipes.menuId = ${menuId};
`;
exports.loadTsiStepsQuery = loadTsiStepsQuery;
const loadCMaxRecipesQuery = (menuId) => `
SELECT 
id,
preheatOn AS enablePreHeat,
preheatTemp AS preHeatTemperature,
preheatFunction AS preHeatFunction,
preheatSteamLevel AS preHeatHumidityLevel,
recipeName AS name,
recipePosition AS position,
creationDate AS createdAt,
menuId
FROM cmaxRecipe
WHERE menuId = ${menuId};
`;
exports.loadCMaxRecipesQuery = loadCMaxRecipesQuery;
const loadCMaxStepsQuery = (menuId) => `
SELECT 
steps.id,
steps.isActive AS isEnable,
steps.stepTemperature AS chamberTemperature,
steps.probeTargetTemp AS probeTemperature,
steps.stepTime,
steps.timeOrProbe AS isProbeControl,
steps.ovenFunction AS function,
steps.stepSteamLevel AS humidityLevel,
steps.steamInjection AS injectionTime,
steps.dumperStatus AS enableDumper,
steps.stepPosition AS position,
'' AS createdAt,
steps.recipeId AS recipeId
FROM stepCombiOvenCMAX AS steps
LEFT JOIN cmaxRecipe AS recipes ON steps.recipeId = recipes.id
WHERE recipes.menuId = 1478;
`;
exports.loadCMaxStepsQuery = loadCMaxStepsQuery;
const loadMenuConfigsByMenuIdQuery = (menuId) => `
SELECT 
configs.*,
menu.language AS idioma
FROM menuConfigs AS configs
LEFT JOIN menu ON menu.id = configs.menuId
WHERE configs.menuId = ${menuId};
`;
exports.loadMenuConfigsByMenuIdQuery = loadMenuConfigsByMenuIdQuery;
const loadGroupsByMenuIdQuery = (menuId) => `
SELECT 
groups.*,
configs.preHeat1 
FROM groups
LEFT JOIN menuConfigs AS configs ON configs.menuId = groups.menuId
WHERE groups.menuId = ${menuId};
`;
exports.loadGroupsByMenuIdQuery = loadGroupsByMenuIdQuery;
const loadRecipesByMenuIdQuery = (menuId) => `
SELECT * FROM recipe WHERE menuId = ${menuId};
`;
exports.loadRecipesByMenuIdQuery = loadRecipesByMenuIdQuery;
const loadStepsByMenuIdQuery = (menuId) => `
SELECT
steps.*,
recipes.menuId AS menuId
FROM stepSpeedOven AS steps
LEFT JOIN recipe AS recipes ON steps.recipeId = recipes.id
WHERE recipes.menuId = ${menuId};
`;
exports.loadStepsByMenuIdQuery = loadStepsByMenuIdQuery;
