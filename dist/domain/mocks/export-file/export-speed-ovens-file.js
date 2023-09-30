"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mockLoadSpeedOvensRecipes = exports.mockLoadSpeedOvensGroups = exports.mockLoadSpeedOvensConfigs = exports.mockExportSpeedOvensFileMenu = void 0;
const configs = [{
        data: 'anyData',
        enable_aquec_dourar: false,
        enable_auto_import: false,
        enable_favoritos: false,
        enable_modo_manual: false,
        enable_modo_operador: false,
        enable_rep_receita: false,
        enableRecipePreRunMessage: false,
        formato_data: 'anyFormatoData',
        formato_hora: 'anyFormatoHora',
        hora: 'anyHora',
        idioma: 'anyIdioma',
        pre_aquec_1: 250,
        pre_aquec_2: 250,
        pre_aquec_2_enabled: false,
        time_pre_aquec: 'anyTimePreAquec',
        unidade_temp: 'anyUnidadeTemp'
    }];
const groups = [{
        id: 1,
        gridId: 1,
        iconId: 1,
        imageBase64: 'anyImageBase64',
        isImageLibrary: false,
        nome: 'anyNome',
        temp: 250,
        tempOrigin: 'anyTempOrigin'
    }];
const recipes = [{
        aquecerDourarMais: '0',
        aquecerMais: '0',
        dourarMais: '0',
        favorita: '0',
        gridId: 1,
        group_id: 1,
        iconId: 1,
        id: 1,
        imageBase64: 'anyImageBase64',
        isImageLibrary: false,
        nome: 'anyNome',
        passos: [
            {
                ar: 'anyAr',
                id: 1,
                info: 'anyInfo',
                isEnable: false,
                isManualTemp: false,
                lastro: 'anyLastro',
                micro: 'anyMicro',
                stepNumber: 1,
                temp: 'anytemp',
                time: 'anyTime'
            }
        ]
    }];
const mockExportSpeedOvensFileMenu = () => ({
    configs,
    groups,
    recipies: recipes
});
exports.mockExportSpeedOvensFileMenu = mockExportSpeedOvensFileMenu;
const mockLoadSpeedOvensConfigs = () => configs;
exports.mockLoadSpeedOvensConfigs = mockLoadSpeedOvensConfigs;
const mockLoadSpeedOvensGroups = () => groups;
exports.mockLoadSpeedOvensGroups = mockLoadSpeedOvensGroups;
const mockLoadSpeedOvensRecipes = () => recipes;
exports.mockLoadSpeedOvensRecipes = mockLoadSpeedOvensRecipes;
