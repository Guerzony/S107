"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.writeRecLegacy = exports.writeRosterRecLegacy = exports.writeRosterGrpLegacy = exports.writeConfigLegacy = void 0;
const images_forza_1 = require("./images-forza");
const writeConfigLegacy = (configs, generation) => {
    const fileBuffer = Buffer.alloc(344);
    fileBuffer[0] = generation === 'A' ? 2 : 0;
    fileBuffer[1] = generation === 'A' ? 1 : 0;
    fileBuffer[2] = generation === 'A' ? 1 : 0;
    // ESCREVENDO RESISTENCIA CAMARA
    fileBuffer[8] = String.fromCharCode((+configs.preHeat1 * 18) & 0xff).charCodeAt(0);
    fileBuffer[9] = String.fromCharCode(((+configs.preHeat1 * 18) >> 8) & 0xff).charCodeAt(0);
    // ESCREVENDO TEMPO DE PRÉ
    const tt = configs.stabilizationTime ? configs.stabilizationTime.split(':') : '05:00';
    const tempo = parseInt(tt[0]) * 60 + parseInt(tt[1]);
    fileBuffer[12] = String.fromCharCode(tempo & 0xff).charCodeAt(0);
    fileBuffer[13] = String.fromCharCode((tempo >> 8) & 0xff).charCodeAt(0);
    fileBuffer[16] = 50;
    fileBuffer[37] = generation === 'A' ? 0 : 48;
    const buffer = Buffer.from('456789459381');
    buffer.copy(fileBuffer, 40, 0);
    // ESCREVENDO RESISTENCIA INFERIOR
    fileBuffer[52] = String.fromCharCode((+configs.preHeat2 * 18) & 0xff).charCodeAt(0);
    fileBuffer[53] = String.fromCharCode(((+configs.preHeat2 * 18) >> 8) & 0xff).charCodeAt(0);
    // ESCREVENDO IDIOMA
    switch (configs.idioma) {
        case 'PT':
            fileBuffer[56] = String.fromCharCode(0 & 0xff).charCodeAt(0);
            break;
        case 'EN':
            fileBuffer[56] = String.fromCharCode(1 & 0xff).charCodeAt(0);
            break;
        case 'ES':
            fileBuffer[56] = String.fromCharCode(2 & 0xff).charCodeAt(0);
            break;
        case 'FR':
            fileBuffer[56] = String.fromCharCode(3 & 0xff).charCodeAt(0);
            break;
        default:
            fileBuffer[56] = String.fromCharCode(0 & 0xff).charCodeAt(0);
            break;
    }
    // ESCREVENDO TEMP PRE 2
    fileBuffer[332] = generation === 'A' ? 0 : String.fromCharCode((+configs.preHeat2 * 18) & 0xff).charCodeAt(0);
    fileBuffer[333] = generation === 'A' ? 0 : String.fromCharCode(((+configs.preHeat2 * 18) >> 8) & 0xff).charCodeAt(0);
    return fileBuffer;
};
exports.writeConfigLegacy = writeConfigLegacy;
const writeRosterGrpLegacy = (groups, generation) => {
    let buffer;
    const listBuffers = [];
    const isGreenBack = generation === 'A';
    // ORDENA OS GRUPOS DE FORMA DECRESCENTE COM BASE NA ORDEM DO GRUPO
    const orderedGroups = groups.sort((a, b) => b.groupPosition - a.groupPosition);
    const headerBuffer = Buffer.alloc(64);
    headerBuffer[0] = orderedGroups.length;
    headerBuffer[4] = orderedGroups.length;
    listBuffers.push(headerBuffer);
    orderedGroups.forEach((group, index) => {
        const groupBuffer = Buffer.alloc(isGreenBack ? 120 : 168);
        // versao
        groupBuffer[0] = isGreenBack ? 0 : 2;
        // tipo
        groupBuffer[2] = isGreenBack ? 0 : 2;
        // ESCREVER RECUSER DA PATH
        // const pos = isGreenBack ? 0 : 4
        buffer = Buffer.from(`RECUSER/GRP${index}`);
        buffer.copy(groupBuffer, isGreenBack ? 0 : 4, 0);
        // ESCREVE O NOME DO GRUPO
        buffer = Buffer.from(group.groupName);
        buffer.copy(groupBuffer, isGreenBack ? 50 : 54, 0);
        // ESCREVER FOTO DO GRUPO
        const image = group.groupImage === 'Z.png'
            ? (0, images_forza_1.getOldImageFirstLetter)(group.groupName.charAt(0).toUpperCase())
            : (0, images_forza_1.getOldImage)(group.groupImage);
        const imageSplit = image.split(' ');
        groupBuffer[isGreenBack ? 80 : 84] = parseInt(imageSplit[0], 16);
        groupBuffer[isGreenBack ? 81 : 85] = parseInt(imageSplit[1], 16);
        groupBuffer[isGreenBack ? 82 : 86] = parseInt(imageSplit[2], 16);
        // ESCREVE QUAL TEMPERATURA O GRUPO USA
        if (!isGreenBack) {
            groupBuffer[125] = group.preHeat === group.preHeat1 ? 0 : 1;
        }
        listBuffers.push(groupBuffer);
    });
    const totalLength = listBuffers.reduce((acc, cur) => acc + cur.length, 0);
    const fileBuffer = Buffer.concat(listBuffers, totalLength);
    return fileBuffer;
};
exports.writeRosterGrpLegacy = writeRosterGrpLegacy;
const writeRosterRecLegacy = (recipes, indexGroup, generation) => {
    let buffer;
    const listBuffers = [];
    const isGreenBack = generation === 'A';
    const headerBuffer = Buffer.alloc(64);
    headerBuffer[0] = recipes.length;
    headerBuffer[4] = recipes.length;
    listBuffers.push(headerBuffer);
    recipes.forEach((recipe, indexRecipe) => {
        const recipeBuffer = Buffer.alloc(isGreenBack ? 120 : 168);
        // versao
        recipeBuffer[0] = isGreenBack ? 0 : 2;
        // tipo
        recipeBuffer[2] = isGreenBack ? 0 : 2;
        // ESCREVER RECUSER DA PATH
        buffer = Buffer.from(`RECUSER/GRP${indexGroup}/REC${indexRecipe}.DAT`);
        buffer.copy(recipeBuffer, isGreenBack ? 0 : 4, 0);
        // ESCREVER NOME DA RECEITA
        buffer = Buffer.from(recipe.recipeName);
        buffer.copy(recipeBuffer, isGreenBack ? 50 : 54, 0);
        // ESCREVER FOTO DA RECEITA
        const image = recipe.recipeImage === 'Z.png'
            ? (0, images_forza_1.getOldImageFirstLetter)(recipe.recipeName.charAt(0).toUpperCase())
            : (0, images_forza_1.getOldImage)(recipe.recipeImage);
        const imageSplit = image.split(' ');
        recipeBuffer[isGreenBack ? 80 : 84] = parseInt(imageSplit[0], 16);
        recipeBuffer[isGreenBack ? 81 : 85] = parseInt(imageSplit[1], 16);
        recipeBuffer[isGreenBack ? 82 : 86] = parseInt(imageSplit[2], 16);
        // ESCREVE SE A RECEITA É FAVORITA
        recipeBuffer[isGreenBack ? 109 : 113] = 1;
        recipeBuffer[isGreenBack ? 111 : 115] = +recipe.isFavorite;
        listBuffers.push(recipeBuffer);
    });
    const totalLength = listBuffers.reduce((acc, cur) => acc + cur.length, 0);
    const fileBuffer = Buffer.concat(listBuffers, totalLength);
    return fileBuffer;
};
exports.writeRosterRecLegacy = writeRosterRecLegacy;
const writeRecLegacy = (recipe, groupName, generation) => {
    let buffer;
    let pos;
    const isGreenBack = generation === 'A';
    const fileBuffer = Buffer.alloc(1472);
    // VERSION E TYPE
    fileBuffer[64] = isGreenBack ? 1 : 2;
    fileBuffer[66] = isGreenBack ? 1 : 2;
    // ESCREVE O NOME RECEITA
    buffer = Buffer.from(recipe.recipeName);
    buffer.copy(fileBuffer, 68, 0);
    // ESCREVE O NOME DO GRUPO
    buffer = Buffer.from(groupName);
    buffer.copy(fileBuffer, 98, 0);
    // ESCREVER FOTO DO GRUPO
    const image = recipe.recipeImage === 'Z.png'
        ? (0, images_forza_1.getOldImageFirstLetter)(recipe.recipeName.charAt(0).toUpperCase())
        : (0, images_forza_1.getOldImage)(recipe.recipeImage);
    const imageSplit = image.split(' ');
    fileBuffer[128] = parseInt(imageSplit[0], 16);
    fileBuffer[129] = parseInt(imageSplit[1], 16);
    fileBuffer[130] = parseInt(imageSplit[2], 16);
    fileBuffer[178] = +recipe.isFavorite;
    fileBuffer[179] = 1;
    fileBuffer[180] = +recipe.brownMore;
    fileBuffer[181] = +recipe.heatMore;
    fileBuffer[182] = +recipe.heatBrownMore;
    const steps = [];
    let orderedSteps = [];
    if (recipe.steps) {
        orderedSteps = recipe.steps.sort((a, b) => a.stepPosition - b.stepPosition);
    }
    for (let i = 0; i < 8; i++) {
        if (orderedSteps && i < orderedSteps.length) {
            orderedSteps[i].stepPosition = i + 1;
            steps.push(orderedSteps[i]);
        }
        else {
            steps.push({
                id: 0,
                stepPosition: i + 1,
                hotAirSpeed: 0,
                microwaves: 0,
                internalResistance: 0,
                stepTemperature: 0,
                stepTime: '00:00',
                isActive: false,
                stepInfo: '',
                recipeId: recipe.id,
                tempIsPreheat: true,
                stepFrom: '',
                equipTypeId: 0,
                menuId: 0
            });
        }
    }
    steps.forEach((step, i) => {
        pos = 576 + (112 * i);
        fileBuffer[pos++] = step.isActive ? 1 : 0;
        buffer = Buffer.from(step.stepInfo ? step.stepInfo : '');
        buffer.copy(fileBuffer, pos, 0);
        pos += 100;
        fileBuffer[pos++] = +step.hotAirSpeed;
        fileBuffer[pos++] = +step.microwaves;
        fileBuffer[pos++] = +step.internalResistance;
        fileBuffer[pos++] = String.fromCharCode((+step.stepTemperature * 18) & 0xff).charCodeAt(0);
        fileBuffer[pos++] = String.fromCharCode(((+step.stepTemperature * 18) >> 8) & 0xff).charCodeAt(0);
        pos += 2;
        const tt = step.stepTime.split(':');
        const tempo = parseInt(tt[0]) * 60 + parseInt(tt[1]);
        fileBuffer[pos++] = String.fromCharCode(tempo & 0xff).charCodeAt(0);
        fileBuffer[pos++] = String.fromCharCode((tempo >> 8) & 0xff).charCodeAt(0);
    });
    return fileBuffer;
};
exports.writeRecLegacy = writeRecLegacy;
