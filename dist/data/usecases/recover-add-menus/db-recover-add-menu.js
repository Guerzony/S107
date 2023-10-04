"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbRecoverAddMenu = void 0;
const equipNew_equipOld_1 = require("../../../utils/equipNew-equipOld");
class DbRecoverAddMenu {
    constructor(addMenuRepository, addMenuConfigsRepository, addGroupRepository, addRecipeRepository, addRecipeCMAXRepository, addStepSpeedOvenRepository, addStepCombiOvenTSIRepository, addStepCombiOvenCMAXRepository) {
        this.addMenuRepository = addMenuRepository;
        this.addMenuConfigsRepository = addMenuConfigsRepository;
        this.addGroupRepository = addGroupRepository;
        this.addRecipeRepository = addRecipeRepository;
        this.addRecipeCMAXRepository = addRecipeCMAXRepository;
        this.addStepSpeedOvenRepository = addStepSpeedOvenRepository;
        this.addStepCombiOvenTSIRepository = addStepCombiOvenTSIRepository;
        this.addStepCombiOvenCMAXRepository = addStepCombiOvenCMAXRepository;
    }
    async createMenu(menu, user) {
        for (const menusItem of menu) {
            try {
                const menu = await this.addMenuRepository.add({
                    equipTypeId: equipNew_equipOld_1.UserModel.find(equip => equip.idOld === menusItem.id_equipamento).idNew,
                    companyId: user.companyId,
                    menuName: menusItem.nome_minhas_receitas,
                    creationDate: new Date().toISOString(),
                    lastUpdate: new Date().toISOString(),
                    menuVersion: 1,
                    deletionDate: '',
                    userId: user.userId,
                    deletedBy: 'null',
                    language: menusItem.id_equipamento === 6 ? 'PT' : menusItem.settings.idioma
                });
                if (menu.equipTypeId === 4) {
                    for (const recipesCmaxItem of menusItem.RecipesCmax) {
                        try {
                            const recipeCmax = await this.addRecipeCMAXRepository.addRecipeCMAX({
                                equipTypeId: 4,
                                menuId: menu.id,
                                recipeName: recipesCmaxItem.nome,
                                recipePosition: recipesCmaxItem.ordem,
                                creationDate: new Date().toISOString(),
                                createdBy: user.userId,
                                lastUpdate: new Date().toISOString(),
                                updatedBy: user.userId,
                                preheatOn: recipesCmaxItem.func_pre_heat,
                                preheatTemp: recipesCmaxItem.stp_pre_heat,
                                preheatFunction: recipesCmaxItem.func_pre_heat,
                                preheatSteamLevel: 0,
                                weight: 0,
                                entryTemp: 1,
                                ingredientType: 1,
                                dishType: 1,
                                ingredients: '',
                                instructions: '',
                                origin: 'Brasil'
                            });
                            for (const stepsCmaxItem of recipesCmaxItem.stepsCmax) {
                                try {
                                    await this.addStepCombiOvenCMAXRepository.addStepCombiOvenCMAX({
                                        recipeId: recipeCmax.id,
                                        menuId: menu.id,
                                        stepPosition: stepsCmaxItem.ordem,
                                        isActive: stepsCmaxItem.enable,
                                        stepTemperature: stepsCmaxItem.set_Camara,
                                        ovenFunction: Number(stepsCmaxItem.funcao),
                                        timeOrProbe: Number(stepsCmaxItem.tempo_sonda),
                                        stepTime: stepsCmaxItem.processo,
                                        probeTargetTemp: stepsCmaxItem.set_sonda,
                                        stepSteamLevel: Number(stepsCmaxItem.nivel_umidade),
                                        steamInjection: stepsCmaxItem.tempo_injecao,
                                        dumperStatus: Number(stepsCmaxItem.damper),
                                        stepFrom: 'fromMenu'
                                    });
                                }
                                catch (error) {
                                }
                            }
                        }
                        catch (error) {
                        }
                    }
                }
                else {
                    await this.addMenuConfigsRepository.addConfig({
                        menuId: menu.id,
                        preHeat1: Number(menusItem.settings.temp_pre1),
                        preHeat2: Number(menusItem.settings.temp_pre2),
                        preHeat2Enabled: Boolean(menusItem.settings.exibe_pre2),
                        stabilizationTime: menusItem.settings.tempo_pre,
                        dateFormat: 'EUR: DD/MM/AAAA',
                        timeFormat: menusItem.settings.formato_hora === '1' ? '24h' : 'AM/PM',
                        manualModeEnabled: Boolean(menusItem.settings.enable_modo_manual),
                        favoritesEnabled: Boolean(menusItem.settings.enable_favoritos),
                        repeatRecipeEnabled: Boolean(menusItem.settings.enable_rep_receita),
                        heatBrownMoreEnabled: Boolean(menusItem.settings.enable_aquec_dourar),
                        temperatureUnit: menusItem.settings.unidade_temperatura === '1' || menusItem.settings.unidade_temperatura === '°C' ? '°C' : '°F',
                        weightUnit: 'Gramas',
                        theme: 'Light',
                        introduction: true,
                        combiOvenEnabled: Boolean(menusItem.settings.combiOvenEnabled),
                        multipleCookingEnabled: Boolean(menusItem.settings.multipleCookingEnabled),
                        technicookRecipesEnabled: Boolean(menusItem.settings.technicookRecipesEnabled),
                        editGroupsEnabled: Boolean(menusItem.settings.editGroupsEnabled),
                        operatorModeEnabled: Boolean(menusItem.settings.enable_modo_operador),
                        turboGrillEnabled: Boolean(menusItem.settings.turboGrillEnabled),
                        enableRecipePreRunMessage: Boolean(menusItem.settings.enableRecipePreRunMessage),
                        enableAutoImport: Boolean(menusItem.settings.enable_auto_import)
                    });
                    for (const groupsItem of menusItem.groups) {
                        try {
                            const group = await this.addGroupRepository.addGroup({
                                menuId: menu.id,
                                groupName: groupsItem.nome_grupo,
                                groupPosition: groupsItem.ordem_grupo,
                                groupImage: menu.equipTypeId === 2
                                    ? groupsItem.foto_grupo.length < 200
                                        ? String(groupsItem.foto_grupo)
                                        : groupsItem.foto_grupo
                                    : groupsItem.image_base64.length === 0
                                        ? groupsItem.foto_grupo
                                        : groupsItem.image_base64,
                                preHeat: Number(groupsItem.temperatura_grupo) === Number(menusItem.settings.temp_pre1) ? 1 : 2,
                                creationDate: new Date().toISOString(),
                                lastUpdate: new Date().toISOString()
                            });
                            for (const recipesItem of groupsItem.recipes) {
                                try {
                                    const recipe = await this.addRecipeRepository.addRecipe({
                                        equipTypeId: menu.equipTypeId,
                                        groupId: group.id,
                                        menuId: menu.id,
                                        recipeName: recipesItem.nome_receita,
                                        recipePosition: recipesItem.ordem_receita,
                                        recipeImage: recipesItem.image_base64.length === 0
                                            ? recipesItem.foto_receita
                                            : recipesItem.image_base64,
                                        creationDate: new Date().toISOString(),
                                        createdBy: user.userId,
                                        lastUpdate: new Date().toISOString(),
                                        updatedBy: user.userId,
                                        isFavorite: recipesItem.is_favorita === '1',
                                        heatMore: Number(recipesItem.aquecer_mais),
                                        brownMore: Number(recipesItem.dourar_mais),
                                        heatBrownMore: Number(recipesItem.aquecer_dourar_mais),
                                        ingredientType: recipesItem.ingrediente_principal,
                                        dishType: recipesItem.tipo_prato,
                                        ingredients: recipesItem.ingredientes_montagem,
                                        instructions: recipesItem.instrucoes_operacionais,
                                        weight: Number(recipesItem.peso),
                                        entryTemp: Number(recipesItem.temperatura_entrada),
                                        preheatTemp: recipesItem.preheatTemp,
                                        origin: 'Brasil',
                                        preheatSteam: recipesItem.preheatSteam,
                                        preheatMode: menu.equipTypeId === 2 ? recipesItem.preheatMode.replace(/["]/g, '') : recipesItem.preheatMode,
                                        preheatType: menu.equipTypeId === 2 ? recipesItem.preheatType.replace(/["]/g, '') : recipesItem.preheatType
                                    });
                                    if (menu.equipTypeId === 2) {
                                        for (const stepItem of recipesItem.steps) {
                                            try {
                                                await this.addStepCombiOvenTSIRepository.addStepCombiOvenTSI({
                                                    recipeId: recipe.id,
                                                    menuId: menu.id,
                                                    equipTypeId: menu.equipTypeId,
                                                    stepPosition: stepItem.stepPosition,
                                                    isActive: stepItem.isActive,
                                                    stepTemperature: stepItem.stepTemperature,
                                                    steamPercentage: stepItem.steamPercentage,
                                                    fanSpeed: stepItem.fanSpeed,
                                                    steamInjection: stepItem.steamInjection,
                                                    stepInfo: stepItem.stepInfo.length === 0 ? 'null' : stepItem.stepInfo,
                                                    endByTime: stepItem.endByTime,
                                                    stepTime: stepItem.stepTime,
                                                    probeTargetTemp: stepItem.probeTargetTemp,
                                                    stepFrom: 'fromMenu',
                                                    stepMode: stepItem.stepMode,
                                                    stepsTurboGrill: stepItem.stepsTurboGrill
                                                });
                                            }
                                            catch (error) {
                                            }
                                        }
                                    }
                                    else {
                                        for (const stepItem of recipesItem.steps) {
                                            try {
                                                await this.addStepSpeedOvenRepository.addStepSpeedOven({
                                                    recipeId: recipe.id,
                                                    equipTypeId: menu.equipTypeId,
                                                    menuId: menu.id,
                                                    stepPosition: stepItem.posicao_passo,
                                                    isActive: stepItem.is_ativo,
                                                    stepTemperature: Number(stepItem.temperatura),
                                                    tempIsPreheat: Boolean(stepItem.tempo),
                                                    stepTime: stepItem.tempo,
                                                    hotAirSpeed: stepItem.velocidade_turbina,
                                                    microwaves: stepItem.microondas,
                                                    internalResistance: stepItem.porcentagem_ri,
                                                    stepInfo: stepItem.informacao.length === 0 ? 'null' : stepItem.stepInfo,
                                                    stepFrom: 'fromMenu'
                                                });
                                            }
                                            catch (error) {
                                            }
                                        }
                                    }
                                }
                                catch (error) {
                                }
                            }
                        }
                        catch (error) {
                        }
                    }
                }
            }
            catch (error) {
            }
        }
    }
}
exports.DbRecoverAddMenu = DbRecoverAddMenu;
