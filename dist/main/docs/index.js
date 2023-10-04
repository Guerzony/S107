"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const paths_1 = __importDefault(require("./paths"));
const components_1 = __importDefault(require("./components"));
const schemas_1 = __importDefault(require("./schemas"));
exports.default = {
    openapi: '3.0.0',
    info: {
        title: 'IOK PraticaUI API',
        description: 'API de acesso aos dados da aplicação PraticaUi.',
        version: '0.0.2'
    },
    servers: [{
        url: '/api'
    }],
    tags: [{
        name: 'Company',
        description: ''
    }, {
        name: 'Configs',
        description: ''
    }, {
        name: 'User',
        description: 'Endpoints for user'
    }, {
        name: 'LoadMenuConfigs',
        description: ''
    }, {
        name: 'MenuConfigs',
        description: ''
    }, {
        name: 'MenuGroup',
        description: 'Endpoints for group'
    }, {
        name: 'Menu',
        description: 'Endpoints for menu'
    }, {
        name: 'Recipe',
        description: 'Endpoints for recipe'
    }, {
        name: 'RecipeCMAX',
        description: 'Endpoints for recipeCmax'
    }, {
        name: 'StepCombiOvenCMAX',
        description: 'API relacionada aos passos das receitas do C-MAX'
    }, {
        name: 'StepCombiOvenTSI',
        description: 'API relacionada aos passos das receitas do TSi'
    }, {
        name: 'StepSpeedOven',
        description: 'API relacionada aos passos dos Speed Ovens.'
    }, {
        name: 'Store',
        description: 'API relacionada às lojas.'
    }, {
        name: 'Cookbook',
        description: 'Endpoints for cookbook.'
    }, {
        name: 'User',
        description: ''
    }, {
        name: 'ExportFile',
        description: 'Endpoints para download de receituários'
    }],
    paths: paths_1.default,
    schemas: schemas_1.default,
    components: components_1.default
};
