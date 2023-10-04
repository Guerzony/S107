"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const schemas_1 = require("./schemas/");
exports.default = {
    error: schemas_1.errorSchema,
    addStore: schemas_1.addStoreParamsSchema,
    store: schemas_1.storeParamsSchema,
    user: schemas_1.userSchema,
    addUserRequest: schemas_1.addUserRequestSchema,
    addUserResponse: schemas_1.addUserResponseSchema,
    addMenu: schemas_1.addMenuSchema,
    addMenuConfigs: schemas_1.addMenuConfigsSchema,
    addGroup: schemas_1.addGroupSchema,
    addRecipe: schemas_1.addRecipeSchema,
    addRecipeCmax: schemas_1.addRecipeCmaxSchema,
    deleteRecipeCmax: schemas_1.deleteRecipeCmaxSchema,
    deleteRecipe: schemas_1.deleteRecipeSchema,
    menu: schemas_1.menuSchema,
    menuConfigs: schemas_1.menuConfigsSchema,
    group: schemas_1.groupSchema,
    recipe: schemas_1.recipeSchema,
    recipeCmax: schemas_1.recipeCmaxSchema,
    cookbook: schemas_1.cookbookSchema,
    deleteCookbook: schemas_1.deleteCookbookSchema,
    addStepSpeedOven: schemas_1.addStepSpeedOvenParamsSchema,
    addStepCombiOvenTSI: schemas_1.addStepCombiOvenTSIParamsSchema,
    addStepCombiOvenCMAX: schemas_1.addStepCombiOvenCMAXParamsSchema
};
