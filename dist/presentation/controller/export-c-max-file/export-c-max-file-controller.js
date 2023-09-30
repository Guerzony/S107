"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExportCMaxFileController = void 0;
const http_helper_1 = require("../../helpers/http-helper");
class ExportCMaxFileController {
    // eslint-disable-next-line no-useless-constructor
    constructor(validation, dbLoadCMaxRecipes, dbExportCMaxFile) {
        this.validation = validation;
        this.dbLoadCMaxRecipes = dbLoadCMaxRecipes;
        this.dbExportCMaxFile = dbExportCMaxFile;
    }
    async handle(httpRequest) {
        try {
            const { params } = httpRequest;
            const validationError = this.validation.validate(params);
            if (validationError)
                return (0, http_helper_1.badRequest)(validationError);
            const recipes = await this.dbLoadCMaxRecipes.load(params.menuId);
            if (recipes.length === 0)
                return (0, http_helper_1.notFound)({ name: 'menuId', value: params.menuId });
            const { filePath, folderPath } = await this.dbExportCMaxFile.export(recipes);
            return (0, http_helper_1.download)(filePath, { filePath, folderPath });
        }
        catch (error) {
            return (0, http_helper_1.serverError)(error);
        }
    }
}
exports.ExportCMaxFileController = ExportCMaxFileController;
