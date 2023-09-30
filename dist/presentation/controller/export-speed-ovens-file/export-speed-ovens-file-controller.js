"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExportSpeedOvensFileController = void 0;
const errors_1 = require("../../errors");
const http_helper_1 = require("../../helpers/http-helper");
class ExportSpeedOvensFileController {
    // eslint-disable-next-line no-useless-constructor
    constructor(validation, loadSpeedOvensConfigs, loadSpeedOvensGroups, loadSpeedOvensRecipes, exportSpeedOvensFile) {
        this.validation = validation;
        this.loadSpeedOvensConfigs = loadSpeedOvensConfigs;
        this.loadSpeedOvensGroups = loadSpeedOvensGroups;
        this.loadSpeedOvensRecipes = loadSpeedOvensRecipes;
        this.exportSpeedOvensFile = exportSpeedOvensFile;
    }
    async handle(httpRequest) {
        try {
            const { params } = httpRequest;
            const validationError = this.validation.validate(params);
            if (validationError)
                return (0, http_helper_1.badRequest)(validationError);
            if (params.equipmentModel !== 'COPA, ROCKET, COPA SM' && params.equipmentModel !== 'FIT, FIT ST' && params.equipmentModel !== 'FORZA')
                return (0, http_helper_1.badRequest)(new errors_1.InvalidParamError('equipmentModel'));
            const configs = await this.loadSpeedOvensConfigs.load(params.menuId);
            if (!configs.length)
                return (0, http_helper_1.notFound)({ name: 'menuId', value: params.menuId });
            const groups = await this.loadSpeedOvensGroups.load(params.menuId);
            const recipies = await this.loadSpeedOvensRecipes.load(params.menuId);
            const { filePath, folderPath } = await this.exportSpeedOvensFile.export({ configs, groups, recipies }, params.equipmentModel);
            return (0, http_helper_1.download)(filePath, { filePath, folderPath });
        }
        catch (error) {
            return (0, http_helper_1.serverError)(error);
        }
    }
}
exports.ExportSpeedOvensFileController = ExportSpeedOvensFileController;
