"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoadMenuController = void 0;
const http_helper_1 = require("../../helpers/http-helper");
class LoadMenuController {
    constructor(loadUserMenuValidation, loadUserMenu, loadCompanyMenuConfigs, loadMenuGroup, loadRecipe, loadRecipeCMAX, loadStepSpeedOvenById, loadStepCombiOvenTSI, loadStepCombiOvenCMAX) {
        this.loadUserMenuValidation = loadUserMenuValidation;
        this.loadUserMenu = loadUserMenu;
        this.loadCompanyMenuConfigs = loadCompanyMenuConfigs;
        this.loadMenuGroup = loadMenuGroup;
        this.loadRecipe = loadRecipe;
        this.loadRecipeCMAX = loadRecipeCMAX;
        this.loadStepSpeedOvenById = loadStepSpeedOvenById;
        this.loadStepCombiOvenTSI = loadStepCombiOvenTSI;
        this.loadStepCombiOvenCMAX = loadStepCombiOvenCMAX;
    }
    async handle(httpRequest) {
        try {
            const menuError = this.loadUserMenuValidation.validate(httpRequest.params);
            if (menuError)
                return (0, http_helper_1.badRequest)(menuError);
            const { id } = httpRequest.params;
            const menu = await this.loadUserMenu.loadMenu(id);
            if (!menu)
                return (0, http_helper_1.noContent)();
            if (menu.equipTypeId === 4) {
                const recipeCMAX = await this.loadRecipeCMAX.loadRecipeCMAX(menu.id);
                for (const recipeItem of recipeCMAX) {
                    const recipeStep = await this.loadStepCombiOvenCMAX.loadStepCombiOvenCMAX(recipeItem.id);
                    Object.assign(recipeItem, { steps: recipeStep });
                }
                Object.assign(menu, { recipes: recipeCMAX });
            }
            else {
                const menuConfig = await this.loadCompanyMenuConfigs.loadMenuConfigs(menu.id);
                const menuGroup = await this.loadMenuGroup.loadMenuGroup(menu.id);
                for (const groupItem of menuGroup) {
                    const groupRecipe = await this.loadRecipe.loadRecipe(groupItem.id);
                    for (const recipeItem of groupRecipe) {
                        if (menu.equipTypeId === 2) {
                            const recipeStep = await this.loadStepCombiOvenTSI.loadStepCombiOvenTSI(recipeItem.id);
                            Object.assign(recipeItem, { steps: recipeStep });
                        }
                        else {
                            const recipeStep = await this.loadStepSpeedOvenById.loadStepSpeedOvenById(recipeItem.id);
                            Object.assign(recipeItem, { steps: recipeStep });
                        }
                    }
                    Object.assign(groupItem, { recipes: groupRecipe });
                }
                Object.assign(menu, { configs: menuConfig }, { groups: menuGroup });
            }
            return (0, http_helper_1.ok)({
                menu: menu
            });
        }
        catch (error) {
            return (0, http_helper_1.serverError)(error);
        }
    }
}
exports.LoadMenuController = LoadMenuController;
