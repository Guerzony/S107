"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mockEquipmentOldModel = exports.mockPassosCmaxOldModel = exports.mockRecipeCmaxOldModel = exports.mockStepTSIOldModel = exports.mockStepOldModel = exports.mockRecipeOldModel = exports.mockMenuGroupsOldModel = exports.mockMenuConfigsOldModel = exports.makeFakeRequestGetMenuByIdUser = exports.mockReturnMenuOld = exports.mockMenuOldModel = exports.makeFakeRequestGetUserByEmail = exports.mockReturnUserOld = exports.mockInsertUserOld = exports.mockUserOldModel = void 0;
/* eslint-disable no-undef */
const mysql_helper_1 = require("../../../infra/db/mysql/mysql-helper");
const env_1 = __importDefault(require("../../../main/config/env"));
const mysql_1 = __importDefault(require("mysql"));
afterAll(() => {
    testConnection.end();
});
const testConnection = mysql_1.default.createPool(env_1.default.previousDb);
// User old mock
const mockUserOldModel = () => ({
    realm: 'realm',
    username: 'username',
    nomeUsuario: 'nomeUsuario',
    email: 'user_email@mail.com',
    emailVerified: true,
    verificationToken: 'verificationToken',
    idiomaUsuario: 'idiomaUsuario',
    modelo: 'modelo',
    temperaturaUsuario: 'temperaturaUsuario',
    dataCadastro: 'dataCadastro',
    tipoUsuario: 'tipoUsuario',
    statusUsuario: 'statusUsuario'
});
exports.mockUserOldModel = mockUserOldModel;
const mockInsertUserOld = async () => {
    const user = await (0, mysql_helper_1.getOne)(testConnection, 'User', 'email', 'user_email@mail.com');
    if (user) {
        return { idUser: user[0].id, email: 'user_email@mail.com' };
    }
    else {
        const userResult = await (0, mysql_helper_1.insertOne)(testConnection, 'User', (0, exports.mockUserOldModel)());
        return { idUser: userResult.insertId, email: 'user_email@mail.com' };
    }
};
exports.mockInsertUserOld = mockInsertUserOld;
const mockReturnUserOld = () => (Object.assign((0, exports.mockUserOldModel)(), { id: 1 }));
exports.mockReturnUserOld = mockReturnUserOld;
const makeFakeRequestGetUserByEmail = async () => ({
    params: {
        email: 'user_email@mail.com'
    }
});
exports.makeFakeRequestGetUserByEmail = makeFakeRequestGetUserByEmail;
// Menu old mock
const mockMenuOldModel = () => ({
    data_cadastro: 'string',
    exibe_pre2: 'string',
    id_equipamento: 1,
    id_usuario: 1,
    nome_minhas_receitas: 'string'
});
exports.mockMenuOldModel = mockMenuOldModel;
const mockReturnMenuOld = () => (Object.assign((0, exports.mockMenuOldModel)(), { id_minhas_receitas: 1 }));
exports.mockReturnMenuOld = mockReturnMenuOld;
const makeFakeRequestGetMenuByIdUser = async () => ({
    body: {
        user: {
            userId: 1,
            companyId: 1,
            email: 'user_email@mail.com',
            typeUser: 'cli',
            nameCompany: 'nameCompany',
            userName: 'userName'
        }
    }
});
exports.makeFakeRequestGetMenuByIdUser = makeFakeRequestGetMenuByIdUser;
const mockMenuConfigsOldModel = () => ({
    id_configuracao: 1,
    resistencia_camara: 'string',
    resistencia_inferior: 'string',
    tempo_pre: 'string',
    temp_pre2: 'string',
    temp_pre1: 'string',
    exibe_pre2: 'string',
    idioma: 'string',
    data: 'string',
    hora: 'string',
    formato_data: 'string',
    formato_hora: 'string',
    unidade_temperatura: 'string',
    data_cadastro: 'string',
    id_minhas_receitas: 1,
    enable_modo_manual: 1,
    enable_favoritos: 1,
    enable_aquec_dourar: 1,
    enable_rep_receita: 1,
    enable_modo_operador: 1,
    combiOvenEnabled: 1,
    multipleCookingEnabled: 1,
    technicookRecipesEnabled: 1,
    favoritesEnabled: 1,
    editGroupsEnabled: 1,
    turboGrillEnabled: 1,
    enableRecipePreRunMessage: 1,
    enable_auto_import: 1
});
exports.mockMenuConfigsOldModel = mockMenuConfigsOldModel;
const mockMenuGroupsOldModel = () => ({
    id_grupo: 1,
    nome_grupo: 'string',
    foto_grupo: 'string',
    temperatura_grupo: 1,
    ordem_grupo: 1,
    data_cadastro: 'string',
    ultima_alteracao: 'string',
    tipo_grupo: 'string',
    id_minhas_receitas: 1,
    id_equipamento: 1,
    is_img_library: true,
    icon_group_old: 'string',
    image_base64: 'string'
});
exports.mockMenuGroupsOldModel = mockMenuGroupsOldModel;
const mockRecipeOldModel = () => ({
    id_receita: 1,
    nome_receita: 'string',
    foto_receita: 'string',
    ordem_receita: 1,
    is_favorita: 'string',
    data_cadastro: 'string',
    aquecer_mais: 'string',
    dourar_mais: 'string',
    ingredientes_montagem: 'string',
    instrucoes_operacionais: 'string',
    aquecer_dourar_mais: 'string',
    tipo_prato: 1,
    ingrediente_principal: 1,
    peso: 'string',
    unidade_peso: 'string',
    temperatura_entrada: 'string',
    idioma: 1,
    id_equipamento: 1,
    deletar: 'string',
    id_grupo: 1,
    is_img_library: true,
    image_base64: 'string',
    icon_recipe_old: 'string',
    preheatMode: 'string',
    preheatSteam: 1,
    preheatTemp: 1,
    preheatType: 'string'
});
exports.mockRecipeOldModel = mockRecipeOldModel;
const mockStepOldModel = () => ({
    id_passo: 1,
    posicao_passo: 1,
    velocidade_turbina: 1,
    microondas: 1,
    porcentagem_ri: 1,
    temperatura: 'string',
    tempo: 'string',
    is_ativo: true,
    informacao: 'string',
    data_cadastro: 'string',
    id_receita: 1,
    temp_grupo: 1
});
exports.mockStepOldModel = mockStepOldModel;
const mockStepTSIOldModel = () => ({
    id: 1,
    recipeId: 1,
    menuId: 1,
    equipTypeId: 1,
    stepPosition: 1,
    isActive: true,
    stepTemperature: 1,
    steamPercentage: 1,
    fanSpeed: 1,
    steamInjection: 1,
    stepInfo: 'string',
    endByTime: true,
    stepTime: 1,
    probeTargetTemp: 1,
    stepMode: 'string',
    stepsTurboGrill: true
});
exports.mockStepTSIOldModel = mockStepTSIOldModel;
const mockRecipeCmaxOldModel = () => ({
    id: 1,
    nome: 'string',
    ordem: 1,
    data_criacao: 'string',
    id_menu: 1,
    en_preheat: true,
    stp_pre_heat: 1,
    func_pre_heat: true,
    nivel_umidade_pre_heat: 1
});
exports.mockRecipeCmaxOldModel = mockRecipeCmaxOldModel;
const mockPassosCmaxOldModel = () => ({
    id: 1,
    ordem: 1,
    data_criacao: 'string',
    enable: true,
    set_Camara: 1,
    set_sonda: 1,
    processo: 1,
    tempo_sonda: true,
    funcao: true,
    nivel_umidade: 1,
    tempo_injecao: 1,
    damper: true,
    id_receita: 1
});
exports.mockPassosCmaxOldModel = mockPassosCmaxOldModel;
const mockEquipmentOldModel = () => ({
    id_equipment: 0,
    type_equipment: 'string',
    id_user: 0,
    data_update: 0,
    app_update: 0,
    serial_number: 'string',
    IOK_pin: 'string',
    creation_date: 'string',
    menu_id: 0,
    name: 'string',
    status_data: 'string',
    status_app: 'string',
    sent_menu: 0,
    send_config: 0,
    software_version: 'string',
    hash_sw: 'string',
    power_version: 'string'
});
exports.mockEquipmentOldModel = mockEquipmentOldModel;
