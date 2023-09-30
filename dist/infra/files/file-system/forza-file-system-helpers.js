"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.writeRec = exports.writeRosterRec = exports.writeRosterGrp = exports.writeConfig = void 0;
const images_forza_1 = require("./images-forza");
const writeConfig = (configs) => {
    const fileBuffer = Buffer.alloc(344);
    let buffer;
    fileBuffer[0] = 2;
    fileBuffer[1] = 12;
    fileBuffer[2] = 1;
    // ESCREVENDO RESISTENCIA CAMARA
    fileBuffer[8] = String.fromCharCode((configs.preHeat1 * 18) & 0xff).charCodeAt(0);
    fileBuffer[9] = String.fromCharCode(((configs.preHeat1 * 18) >> 8) & 0xff).charCodeAt(0);
    // ESCREVENDO TEMPO DE PRÉ
    const tt = configs.stabilizationTime ? configs.stabilizationTime.split(':') : '05:00';
    const tempo = parseInt(tt[0]) * 60 + parseInt(tt[1]);
    fileBuffer[12] = String.fromCharCode(tempo & 0xff).charCodeAt(0);
    fileBuffer[13] = String.fromCharCode((tempo >> 8) & 0xff).charCodeAt(0);
    fileBuffer[16] = 50;
    fileBuffer[36] = 52;
    fileBuffer[37] = 23;
    buffer = Buffer.from('456789459381');
    buffer.copy(fileBuffer, 40, 0);
    // ESCREVENDO RESISTENCIA INFERIOR
    fileBuffer[52] = 72;
    fileBuffer[53] = 18;
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
    fileBuffer[57] = 1;
    buffer = Buffer.from('29112021100000              ');
    buffer.copy(fileBuffer, 60, 0);
    fileBuffer[88] = 1;
    fileBuffer[96] = 255;
    fileBuffer[97] = 1;
    buffer = Buffer.from('0000000000000000000000000000000000000000000000000000');
    buffer.copy(fileBuffer, 98, 0);
    fileBuffer[232] = 4;
    fileBuffer[236] = 207;
    fileBuffer[237] = 2;
    fileBuffer[328] = 226;
    fileBuffer[329] = 2;
    // ESCREVENDO TEMP PRE 2
    fileBuffer[332] = String.fromCharCode((configs.preHeat2 * 18) & 0xff).charCodeAt(0);
    fileBuffer[333] = String.fromCharCode(((configs.preHeat2 * 18) >> 8) & 0xff).charCodeAt(0);
    fileBuffer[340] = configs.preHeat2Enabled ? 0 : 1;
    fileBuffer[341] = 1;
    return fileBuffer;
};
exports.writeConfig = writeConfig;
const writeRosterGrp = (groups) => {
    let buffer;
    const listBuffers = [];
    // ORDENA OS GRUPOS DE FORMA DECRESCENTE COM BASE NA ORDEM DO GRUPO
    const orderedGroups = groups.sort((a, b) => b.groupPosition - a.groupPosition);
    const headerBuffer = Buffer.alloc(64);
    headerBuffer[0] = orderedGroups.length;
    headerBuffer[4] = orderedGroups.length;
    headerBuffer[8] = 187;
    headerBuffer[9] = 125;
    headerBuffer[11] = 43;
    headerBuffer[12] = 16;
    headerBuffer[13] = 209;
    headerBuffer[14] = 37;
    headerBuffer[15] = 75;
    headerBuffer[16] = 91;
    headerBuffer[17] = 120;
    headerBuffer[18] = 3;
    headerBuffer[19] = 240;
    headerBuffer[20] = 2;
    headerBuffer[21] = 3;
    headerBuffer[22] = 219;
    headerBuffer[23] = 178;
    headerBuffer[25] = 43;
    headerBuffer[26] = 9;
    headerBuffer[27] = 209;
    headerBuffer[28] = 34;
    headerBuffer[29] = 75;
    headerBuffer[30] = 27;
    headerBuffer[31] = 120;
    headerBuffer[33] = 43;
    headerBuffer[34] = 5;
    headerBuffer[35] = 209;
    headerBuffer[36] = 33;
    headerBuffer[37] = 74;
    headerBuffer[38] = 19;
    headerBuffer[39] = 136;
    headerBuffer[40] = 67;
    headerBuffer[41] = 240;
    headerBuffer[42] = 1;
    headerBuffer[43] = 3;
    headerBuffer[44] = 19;
    headerBuffer[45] = 128;
    headerBuffer[46] = 4;
    headerBuffer[47] = 224;
    headerBuffer[48] = 30;
    headerBuffer[49] = 74;
    headerBuffer[50] = 19;
    headerBuffer[51] = 136;
    headerBuffer[52] = 111;
    headerBuffer[53] = 243;
    headerBuffer[55] = 3;
    headerBuffer[56] = 19;
    headerBuffer[57] = 128;
    headerBuffer[58] = 29;
    headerBuffer[59] = 75;
    headerBuffer[60] = 27;
    headerBuffer[61] = 120;
    headerBuffer[63] = 43;
    listBuffers.push(headerBuffer);
    orderedGroups.forEach((group, index) => {
        const groupBuffer = Buffer.alloc(168);
        // versao
        groupBuffer[0] = 2;
        // tipo
        groupBuffer[2] = 19;
        // ESCREVER RECUSER DA PATH
        buffer = Buffer.from(`RECUSER/GRP${index}`);
        buffer.copy(groupBuffer, 4, 0);
        // ESCREVE O NOME DO GRUPO
        buffer = Buffer.from(group.groupName);
        buffer.copy(groupBuffer, 54, 0);
        // ESCREVER FOTO DO group
        const image = group.groupImage === 'Z.png'
            ? (0, images_forza_1.getOldImageFirstLetter)(group.groupName.charAt(0).toUpperCase())
            : (0, images_forza_1.getOldImage)(group.groupImage);
        let imageSplit = image[0] + image[1];
        groupBuffer[84] = parseInt(imageSplit, 16);
        imageSplit = image[2] + image[3];
        groupBuffer[85] = parseInt(imageSplit, 16);
        imageSplit = image[4] + image[5];
        groupBuffer[86] = parseInt(imageSplit, 16);
        // ESCREVE QUAL TEMPERATURA O GRUPO USA
        groupBuffer[87] = 3;
        groupBuffer[88] = 1;
        groupBuffer[92] = 136;
        groupBuffer[93] = 87;
        groupBuffer[94] = 254;
        groupBuffer[95] = 104;
        groupBuffer[100] = 77;
        groupBuffer[102] = 4;
        groupBuffer[104] = 37;
        groupBuffer[112] = 224;
        groupBuffer[113] = 211;
        groupBuffer[124] = group.preHeat === group.preHeat1 ? 0 : 1;
        listBuffers.push(groupBuffer);
    });
    const totalLength = listBuffers.reduce((acc, cur) => acc + cur.length, 0);
    const fileBuffer = Buffer.concat(listBuffers, totalLength);
    return fileBuffer;
};
exports.writeRosterGrp = writeRosterGrp;
const writeRosterRec = (recipes, indexGroup) => {
    let buffer;
    const listBuffers = [];
    // HEADER
    const headerBuffer = Buffer.alloc(64);
    headerBuffer[0] = recipes.length;
    headerBuffer[4] = recipes.length;
    headerBuffer[8] = 7;
    headerBuffer[9] = 241;
    headerBuffer[10] = 60;
    headerBuffer[11] = 3;
    headerBuffer[12] = 24;
    headerBuffer[13] = 70;
    headerBuffer[14] = 248;
    headerBuffer[15] = 247;
    headerBuffer[16] = 255;
    headerBuffer[17] = 248;
    headerBuffer[18] = 3;
    headerBuffer[19] = 70;
    headerBuffer[20] = 153;
    headerBuffer[21] = 178;
    headerBuffer[22] = 7;
    headerBuffer[23] = 241;
    headerBuffer[24] = 60;
    headerBuffer[25] = 3;
    headerBuffer[26] = 79;
    headerBuffer[27] = 246;
    headerBuffer[28] = 255;
    headerBuffer[29] = 114;
    headerBuffer[30] = 24;
    headerBuffer[31] = 70;
    headerBuffer[32] = 251;
    headerBuffer[33] = 247;
    headerBuffer[34] = 134;
    headerBuffer[35] = 250;
    headerBuffer[36] = 1;
    headerBuffer[37] = 35;
    headerBuffer[38] = 135;
    headerBuffer[39] = 248;
    headerBuffer[40] = 79;
    headerBuffer[41] = 50;
    headerBuffer[42] = 2;
    headerBuffer[43] = 240;
    headerBuffer[44] = 231;
    headerBuffer[45] = 186;
    headerBuffer[47] = 191;
    headerBuffer[48] = 92;
    headerBuffer[49] = 29;
    headerBuffer[50] = 3;
    headerBuffer[51] = 8;
    headerBuffer[52] = 248;
    headerBuffer[53] = 2;
    headerBuffer[55] = 32;
    headerBuffer[56] = 248;
    headerBuffer[57] = 87;
    headerBuffer[59] = 32;
    headerBuffer[60] = 112;
    headerBuffer[61] = 29;
    headerBuffer[62] = 3;
    headerBuffer[63] = 8;
    listBuffers.push(headerBuffer);
    recipes.forEach((recipe, indexRecipe) => {
        const recipeBuffer = Buffer.alloc(168);
        // versao
        recipeBuffer[0] = 2;
        // tipo
        recipeBuffer[2] = 19;
        // ESCREVER RECUSER DA PATH
        buffer = Buffer.from(`RECUSER/GRP${indexGroup}/REC${indexRecipe}.DAT`);
        buffer.copy(recipeBuffer, 4, 0);
        // ESCREVER NOME DA RECEITA
        buffer = Buffer.from(recipe.recipeName);
        buffer.copy(recipeBuffer, 54, 0);
        // ESCREVER FOTO DA RECEITA
        const image = recipe.recipeImage === 'Z.png'
            ? (0, images_forza_1.getOldImageFirstLetter)(recipe.recipeName.charAt(0).toUpperCase())
            : (0, images_forza_1.getOldImage)(recipe.recipeImage);
        let imageSplit = image[0] + image[1];
        recipeBuffer[84] = parseInt(imageSplit, 16);
        imageSplit = image[2] + image[3];
        recipeBuffer[85] = parseInt(imageSplit, 16);
        imageSplit = image[4] + image[5];
        recipeBuffer[86] = parseInt(imageSplit, 16);
        // ESCREVE SE A RECEITA É FAVORITA
        recipeBuffer[87] = 3;
        recipeBuffer[88] = 1;
        recipeBuffer[92] = 136;
        recipeBuffer[93] = 87;
        recipeBuffer[94] = 254;
        recipeBuffer[95] = 104;
        recipeBuffer[100] = 77;
        recipeBuffer[102] = 4;
        recipeBuffer[104] = 37;
        recipeBuffer[112] = 224;
        recipeBuffer[113] = 211;
        recipeBuffer[115] = recipe.isFavorite ? 1 : 0;
        listBuffers.push(recipeBuffer);
    });
    const totalLength = listBuffers.reduce((acc, cur) => acc + cur.length, 0);
    const fileBuffer = Buffer.concat(listBuffers, totalLength);
    return fileBuffer;
};
exports.writeRosterRec = writeRosterRec;
const writeRec = (recipe, groupName) => {
    let buffer;
    let pos;
    const fileBuffer = Buffer.alloc(1472);
    // VERSION E TYPE
    fileBuffer[0] = 123;
    fileBuffer[1] = 107;
    fileBuffer[2] = 91;
    fileBuffer[3] = 2;
    fileBuffer[4] = 1;
    fileBuffer[5] = 147;
    fileBuffer[6] = 5;
    fileBuffer[7] = 35;
    fileBuffer[9] = 147;
    fileBuffer[10] = 1;
    fileBuffer[11] = 35;
    fileBuffer[12] = 122;
    fileBuffer[13] = 106;
    fileBuffer[14] = 58;
    fileBuffer[15] = 72;
    fileBuffer[16] = 253;
    fileBuffer[17] = 247;
    fileBuffer[18] = 252;
    fileBuffer[19] = 253;
    fileBuffer[20] = 187;
    fileBuffer[21] = 104;
    fileBuffer[22] = 211;
    fileBuffer[23] = 248;
    fileBuffer[24] = 76;
    fileBuffer[25] = 50;
    fileBuffer[26] = 7;
    fileBuffer[27] = 241;
    fileBuffer[28] = 16;
    fileBuffer[29] = 2;
    fileBuffer[30] = 16;
    fileBuffer[31] = 70;
    fileBuffer[32] = 152;
    fileBuffer[33] = 71;
    fileBuffer[34] = 123;
    fileBuffer[35] = 107;
    fileBuffer[36] = 155;
    fileBuffer[37] = 178;
    fileBuffer[38] = 187;
    fileBuffer[39] = 130;
    fileBuffer[40] = 7;
    fileBuffer[41] = 241;
    fileBuffer[42] = 20;
    fileBuffer[43] = 3;
    fileBuffer[44] = 25;
    fileBuffer[45] = 70;
    fileBuffer[46] = 248;
    fileBuffer[47] = 104;
    fileBuffer[48] = 254;
    fileBuffer[49] = 247;
    fileBuffer[50] = 86;
    fileBuffer[51] = 253;
    fileBuffer[52] = 187;
    fileBuffer[53] = 104;
    fileBuffer[54] = 211;
    fileBuffer[55] = 248;
    fileBuffer[56] = 80;
    fileBuffer[57] = 50;
    fileBuffer[58] = 152;
    fileBuffer[59] = 71;
    fileBuffer[60] = 3;
    fileBuffer[61] = 70;
    fileBuffer[63] = 43;
    fileBuffer[64] = 2;
    fileBuffer[66] = 19;
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
    let imageSplit = image[0] + image[1];
    fileBuffer[128] = parseInt(imageSplit, 16);
    imageSplit = image[2] + image[3];
    fileBuffer[129] = parseInt(imageSplit, 16);
    imageSplit = image[4] + image[5];
    fileBuffer[130] = parseInt(imageSplit, 16);
    fileBuffer[131] = 3;
    fileBuffer[132] = 1;
    fileBuffer[136] = 136;
    fileBuffer[137] = 87;
    fileBuffer[138] = 254;
    fileBuffer[139] = 104;
    fileBuffer[144] = 77;
    fileBuffer[146] = 4;
    fileBuffer[148] = 37;
    fileBuffer[156] = 224;
    fileBuffer[157] = 211;
    fileBuffer[178] = +recipe.isFavorite;
    fileBuffer[179] = 9;
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
        fileBuffer[pos++] = +step.isActive;
        buffer = Buffer.from(step.stepInfo);
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
exports.writeRec = writeRec;
