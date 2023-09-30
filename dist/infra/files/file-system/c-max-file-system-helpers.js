"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeRecipeFile = void 0;
const decimalToHex = (data) => {
    const hexString = data.toString(16);
    if (hexString.length === 1)
        return `0${hexString}00`;
    if (hexString.length === 2)
        return `${hexString}00`;
    if (hexString.length === 3)
        return `${hexString.slice(1, 3)}0${hexString.slice(0, 1)}`;
    if (hexString.length === 4)
        return `${hexString.slice(2, 4)}${hexString.slice(0, 2)}`;
    return '0000';
};
const copyBuffer = (targetBuffer, position, data) => {
    const buffer = Buffer.from(decimalToHex(data), 'hex');
    buffer.copy(targetBuffer, position, 0);
};
const makeCrc16 = (buffer, len) => {
    let crc = 0xFFFF;
    for (let i = 0; i < len; i++) {
        crc ^= buffer[i];
        for (let j = 8; j !== 0; j--) {
            if ((crc & 0x0001) !== 0) {
                crc >>= 1;
                crc ^= 0xA001;
            }
            else {
                crc >>= 1;
            }
        }
    }
    return crc;
};
const makeRecipeBuffer = (recipe) => {
    const recipeBuffer = Buffer.alloc(62);
    copyBuffer(recipeBuffer, 0, recipe.enablePreHeat ? 1 : 0);
    copyBuffer(recipeBuffer, 2, recipe.preHeatTemperature);
    copyBuffer(recipeBuffer, 4, recipe.preHeatFunction ? 1 : 0);
    copyBuffer(recipeBuffer, 6, recipe.preHeatHumidityLevel);
    for (let j = 0; j < 3; j++) {
        if (recipe.steps && recipe.steps[j]) {
            makeStepBuffer(recipe.steps[j]).copy(recipeBuffer, 8 + (j * 18), 0);
        }
        else {
            makeEmptyStepBuffer().copy(recipeBuffer, 8 + (j * 18), 0);
        }
    }
    return recipeBuffer;
};
const makeEmptyRecipeBuffer = () => {
    const recipeBuffer = Buffer.alloc(62);
    recipeBuffer[2] = 180;
    recipeBuffer[6] = 1;
    recipeBuffer[10] = 180;
    recipeBuffer[12] = 50;
    recipeBuffer[28] = 180;
    recipeBuffer[30] = 50;
    recipeBuffer[46] = 180;
    recipeBuffer[48] = 50;
    return recipeBuffer;
};
const makeStepBuffer = (step) => {
    const stepBuffer = Buffer.alloc(18);
    copyBuffer(stepBuffer, 0, step.isEnable ? 1 : 0);
    copyBuffer(stepBuffer, 2, step.chamberTemperature);
    copyBuffer(stepBuffer, 4, step.probeTemperature);
    copyBuffer(stepBuffer, 6, step.stepTime);
    copyBuffer(stepBuffer, 8, step.isProbeControl ? 1 : 0);
    copyBuffer(stepBuffer, 10, step.function ? 1 : 0);
    copyBuffer(stepBuffer, 12, step.humidityLevel);
    copyBuffer(stepBuffer, 14, step.injectionTime);
    copyBuffer(stepBuffer, 16, step.enableDumper ? 1 : 0);
    return stepBuffer;
};
const makeEmptyStepBuffer = () => {
    const stepBuffer = Buffer.alloc(18);
    stepBuffer[2] = 180;
    stepBuffer[4] = 50;
    return stepBuffer;
};
const makeRecipeFile = async (recipes) => {
    const fileBuffer = Buffer.alloc(31064);
    const headerBuffer = Buffer.from('CMAX PRATICA FORNOS 0.0.L ARQUIVO DE RECEITAS                  ');
    const recipesBuffer = Buffer.alloc(31000);
    headerBuffer.copy(fileBuffer, 0, 0);
    for (let i = 0; i < 500; i++) {
        if (recipes[i]) {
            makeRecipeBuffer(recipes[i]).copy(recipesBuffer, 62 * i, 0);
        }
        else {
            makeEmptyRecipeBuffer().copy(recipesBuffer, 62 * i, 0);
        }
    }
    recipesBuffer.copy(fileBuffer, 62, 0);
    const crc = makeCrc16(recipesBuffer, recipesBuffer.length);
    copyBuffer(fileBuffer, 31062, crc);
    return fileBuffer;
};
exports.makeRecipeFile = makeRecipeFile;
