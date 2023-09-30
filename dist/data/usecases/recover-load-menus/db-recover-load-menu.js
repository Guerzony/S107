"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbRecoverLoadMenu = void 0;
class DbRecoverLoadMenu {
    constructor(recoverLoadMenuRepository, recoverLoadSettingsRepository, recoverLoadGroupRepository, recoverLoadRecipeRepository, recoverLoadStepRepository, recoverLoadRecipeCmaxRepository, recoverLoadStepCmaxRepository, recoverLoadStepTsiRepository) {
        this.recoverLoadMenuRepository = recoverLoadMenuRepository;
        this.recoverLoadSettingsRepository = recoverLoadSettingsRepository;
        this.recoverLoadGroupRepository = recoverLoadGroupRepository;
        this.recoverLoadRecipeRepository = recoverLoadRecipeRepository;
        this.recoverLoadStepRepository = recoverLoadStepRepository;
        this.recoverLoadRecipeCmaxRepository = recoverLoadRecipeCmaxRepository;
        this.recoverLoadStepCmaxRepository = recoverLoadStepCmaxRepository;
        this.recoverLoadStepTsiRepository = recoverLoadStepTsiRepository;
    }
    async loadMenu(id) {
        const menus = await this.recoverLoadMenuRepository.loadMenu(id);
        for (const menusItem of menus) {
            const settings = await this.recoverLoadSettingsRepository.loadSettings(menusItem.id_minhas_receitas);
            Object.assign(menusItem, { settings: settings });
            if (menusItem.id_equipamento === 6) {
                const recipesCmax = await this.recoverLoadRecipeCmaxRepository.loadRecipeCmax(menusItem.id_minhas_receitas);
                for (const recipesCmaxItem of recipesCmax) {
                    const stepsCmax = await this.recoverLoadStepCmaxRepository.loadStepCmax(recipesCmaxItem.id);
                    Object.assign(recipesCmaxItem, { stepsCmax: stepsCmax });
                }
                Object.assign(menusItem, { RecipesCmax: recipesCmax });
            }
            else {
                const groups = await this.recoverLoadGroupRepository.loadGroup(menusItem.id_minhas_receitas);
                for (const groupsItem of groups) {
                    const recipes = await this.recoverLoadRecipeRepository.loadRecipe(groupsItem.id_grupo);
                    for (const recipesItem of recipes) {
                        let step;
                        if (menusItem.id_equipamento === 7) {
                            step = await this.recoverLoadStepTsiRepository.loadStepTsi(recipesItem.id_receita);
                        }
                        else {
                            step = await this.recoverLoadStepRepository.loadStep(recipesItem.id_receita);
                        }
                        Object.assign(recipesItem, { steps: step });
                    }
                    Object.assign(groupsItem, { recipes: recipes });
                }
                Object.assign(menusItem, { groups: groups });
            }
        }
        return menus;
    }
}
exports.DbRecoverLoadMenu = DbRecoverLoadMenu;
