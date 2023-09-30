"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileSystem = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const uuid_1 = require("uuid");
const c_max_file_system_helpers_1 = require("./c-max-file-system-helpers");
const ForzaHelpers = __importStar(require("./forza-file-system-helpers"));
const SpeedOvensLegacyHelpers = __importStar(require("./speed-ovens-legacy-file-helpers"));
const rimraf_1 = __importDefault(require("rimraf"));
class FileSystem {
    async writeSpeedOvensLegacyFile(menu, generation) {
        const { configs, groups } = menu;
        const folderName = (0, uuid_1.v4)();
        const folderPath = path_1.default.resolve(__dirname, '../../../../public/temp', folderName);
        const forzaFolderPath = path_1.default.join(folderPath, 'BRAVO');
        const recUserFolderPath = path_1.default.join(forzaFolderPath, 'RECUSER');
        const cfgFolderPath = path_1.default.join(forzaFolderPath, 'CFG');
        // CRIA A PASTA CFG
        if (!fs_1.default.existsSync(folderPath))
            await fs_1.default.promises.mkdir(folderPath);
        if (!fs_1.default.existsSync(forzaFolderPath))
            await fs_1.default.promises.mkdir(forzaFolderPath);
        if (!fs_1.default.existsSync(recUserFolderPath))
            await fs_1.default.promises.mkdir(recUserFolderPath);
        if (!fs_1.default.existsSync(cfgFolderPath))
            await fs_1.default.promises.mkdir(cfgFolderPath);
        if (groups.length > 0) {
            // Escrever arquivo FORZA/RECUSER/ROSTER.DAT
            const rosterGrpBuffer = SpeedOvensLegacyHelpers.writeRosterGrpLegacy(groups, generation);
            const rosterFilePath = path_1.default.join(recUserFolderPath, 'LIST.DAT');
            await fs_1.default.promises.writeFile(rosterFilePath, rosterGrpBuffer);
            if (groups.length > 0) {
                const orderedGroups = groups.sort((a, b) => b.groupPosition - a.groupPosition);
                orderedGroups.forEach(async (group, indexGroup) => {
                    // Criar a pasta FORZA/RECUSER/GRP%
                    const groupFolderPath = path_1.default.join(recUserFolderPath, `GRP${indexGroup}`);
                    if (!fs_1.default.existsSync(groupFolderPath))
                        await fs_1.default.promises.mkdir(groupFolderPath);
                    if (group.recipes && group.recipes.length > 0) {
                        // Escrever o arquivo FORZA/RECUSER/GRP%/ROSTER.DAT
                        const orderedRecipes = group.recipes.sort((a, b) => b.recipePosition - a.recipePosition);
                        const rosterRecBuffer = SpeedOvensLegacyHelpers.writeRosterRecLegacy(orderedRecipes, indexGroup, generation);
                        const filePath = path_1.default.join(recUserFolderPath, `GRP${indexGroup}`, 'LIST.DAT');
                        await fs_1.default.promises.writeFile(filePath, rosterRecBuffer);
                        orderedRecipes.forEach(async (recipe, indexRecipe) => {
                            // Escrever o arquivo FORZA/RECUSER/GRP%/REC%.DAT
                            const grpFolderPath = path_1.default.join(recUserFolderPath, `GRP${indexGroup}`);
                            const recFilePath = path_1.default.join(grpFolderPath, `REC${indexRecipe}.DAT`);
                            if (!fs_1.default.existsSync(grpFolderPath))
                                await fs_1.default.promises.mkdir(grpFolderPath);
                            const recBuffer = SpeedOvensLegacyHelpers.writeRecLegacy(recipe, group.groupName, generation);
                            await fs_1.default.promises.writeFile(recFilePath, recBuffer);
                        });
                    }
                });
            }
        }
        const cfgFilePath = path_1.default.join(cfgFolderPath, 'CONFG.DAT');
        const configBuffer = await SpeedOvensLegacyHelpers.writeConfigLegacy(configs, generation);
        await fs_1.default.promises.writeFile(cfgFilePath, configBuffer);
        return { folderName };
    }
    async deleteSpeedOvensLegacyFile(params) {
        const folderPath = path_1.default.resolve(__dirname, '../../../../public/temp', params.folderName);
        (0, rimraf_1.default)(folderPath, (error) => {
            if (error)
                throw error;
        });
    }
    async deleteForzaFile(params) {
        const folderPath = path_1.default.resolve(__dirname, '../../../../public/temp', params.folderName);
        (0, rimraf_1.default)(folderPath, (error) => {
            if (error)
                throw error;
        });
    }
    async writeForzaFile(menu) {
        const { configs, groups } = menu;
        const folderName = (0, uuid_1.v4)();
        const folderPath = path_1.default.resolve(__dirname, '../../../../public/temp', folderName);
        const forzaFolderPath = path_1.default.join(folderPath, 'FORZA');
        const recUserFolderPath = path_1.default.join(forzaFolderPath, 'RECUSER');
        const cfgFolderPath = path_1.default.join(forzaFolderPath, 'CFG');
        // CRIA A PASTA CFG
        if (!fs_1.default.existsSync(folderPath))
            await fs_1.default.promises.mkdir(folderPath);
        if (!fs_1.default.existsSync(forzaFolderPath))
            await fs_1.default.promises.mkdir(forzaFolderPath);
        if (!fs_1.default.existsSync(recUserFolderPath))
            await fs_1.default.promises.mkdir(recUserFolderPath);
        if (!fs_1.default.existsSync(cfgFolderPath))
            await fs_1.default.promises.mkdir(cfgFolderPath);
        if (groups.length > 0) {
            // Escrever arquivo FORZA/RECUSER/ROSTER.DAT
            const rosterGrpBuffer = ForzaHelpers.writeRosterGrp(groups);
            const rosterFilePath = path_1.default.join(recUserFolderPath, 'ROSTER.DAT');
            await fs_1.default.promises.writeFile(rosterFilePath, rosterGrpBuffer);
            if (groups.length > 0) {
                const orderedGroups = groups.sort((a, b) => b.groupPosition - a.groupPosition);
                orderedGroups.forEach(async (group, indexGroup) => {
                    // Criar a pasta FORZA/RECUSER/GRP%
                    const groupFolderPath = path_1.default.join(recUserFolderPath, `GRP${indexGroup}`);
                    if (!fs_1.default.existsSync(groupFolderPath))
                        await fs_1.default.promises.mkdir(groupFolderPath);
                    if (group.recipes && group.recipes.length > 0) {
                        // Escrever o arquivo FORZA/RECUSER/GRP%/ROSTER.DAT
                        const orderedRecipes = group.recipes.sort((a, b) => b.recipePosition - a.recipePosition);
                        const rosterRecBuffer = ForzaHelpers.writeRosterRec(orderedRecipes, indexGroup);
                        const filePath = path_1.default.join(recUserFolderPath, `GRP${indexGroup}`, 'ROSTER.DAT');
                        await fs_1.default.promises.writeFile(filePath, rosterRecBuffer);
                        orderedRecipes.forEach(async (recipe, indexRecipe) => {
                            // Escrever o arquivo FORZA/RECUSER/GRP%/REC%.DAT
                            const grpFolderPath = path_1.default.join(recUserFolderPath, `GRP${indexGroup}`);
                            const recFilePath = path_1.default.join(grpFolderPath, `REC${indexRecipe}.DAT`);
                            if (!fs_1.default.existsSync(grpFolderPath))
                                await fs_1.default.promises.mkdir(grpFolderPath);
                            const recBuffer = ForzaHelpers.writeRec(recipe, group.groupName);
                            await fs_1.default.promises.writeFile(recFilePath, recBuffer);
                        });
                    }
                });
            }
        }
        const cfgFilePath = path_1.default.join(cfgFolderPath, 'CONFG.DAT');
        const configBuffer = await ForzaHelpers.writeConfig(configs);
        await fs_1.default.promises.writeFile(cfgFilePath, configBuffer);
        return { folderName };
    }
    async deleteCMaxFile(params) {
        const { folderName } = params;
        const fileName = 'CMAX.PRG';
        const tempFolderPath = path_1.default.resolve(__dirname, '../../../../public/temp');
        const uuidv4FolderPath = path_1.default.join(tempFolderPath, folderName);
        const praticaFolderPath = path_1.default.join(uuidv4FolderPath, 'PRATICA');
        const filePath = path_1.default.join(praticaFolderPath, fileName);
        if (fs_1.default.existsSync(filePath))
            await fs_1.default.promises.unlink(filePath);
        if (fs_1.default.existsSync(praticaFolderPath))
            await fs_1.default.promises.rmdir(praticaFolderPath);
        if (fs_1.default.existsSync(uuidv4FolderPath))
            await fs_1.default.promises.rmdir(uuidv4FolderPath);
    }
    async writeCMaxFile(recipes) {
        const folderName = (0, uuid_1.v4)();
        const fileName = 'CMAX.PRG';
        const publicFolderPath = path_1.default.resolve(__dirname, '../../../../public');
        const tempFolderPath = path_1.default.join(publicFolderPath, 'temp');
        const uuidv4FolderPath = path_1.default.join(tempFolderPath, folderName);
        const praticaFolderPath = path_1.default.join(uuidv4FolderPath, 'PRATICA');
        const filePath = path_1.default.join(praticaFolderPath, fileName);
        try {
            if (!fs_1.default.existsSync(publicFolderPath))
                await fs_1.default.promises.mkdir(publicFolderPath);
            if (!fs_1.default.existsSync(tempFolderPath))
                await fs_1.default.promises.mkdir(tempFolderPath);
            await fs_1.default.promises.mkdir(uuidv4FolderPath); // Criar pasta aleatória
            await fs_1.default.promises.mkdir(praticaFolderPath); // Criar pasta PRATICA
            const recipeBuffer = await (0, c_max_file_system_helpers_1.makeRecipeFile)(recipes); // Criar Buffer do arquivo
            await fs_1.default.promises.writeFile(filePath, recipeBuffer); // Criar arquivo CMAX.PRG
            return { folderName };
        }
        catch (error) {
            if (fs_1.default.existsSync(filePath))
                await fs_1.default.promises.unlink(filePath);
            if (fs_1.default.existsSync(praticaFolderPath))
                await fs_1.default.promises.rmdir(praticaFolderPath);
            if (fs_1.default.existsSync(uuidv4FolderPath))
                await fs_1.default.promises.rmdir(uuidv4FolderPath);
            throw error;
        }
    }
    async save(fileName, data) {
        const folderName = (0, uuid_1.v4)();
        const folderPath = path_1.default.join(__dirname, '../../../../public/export', folderName);
        await fs_1.default.promises.mkdir(folderPath);
        const filePath = path_1.default.join(folderPath, fileName);
        await fs_1.default.promises.writeFile(filePath, data);
        return { filePath, folderPath };
    }
}
exports.FileSystem = FileSystem;
