"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExportForzaFileController = void 0;
const http_helper_1 = require("../../helpers/http-helper");
class ExportForzaFileController {
    // eslint-disable-next-line no-useless-constructor
    constructor(validation, dbLoadSpeedOvensLegacyMenu, dbExportForzaFile) {
        this.validation = validation;
        this.dbLoadSpeedOvensLegacyMenu = dbLoadSpeedOvensLegacyMenu;
        this.dbExportForzaFile = dbExportForzaFile;
    }
    async handle(httpRequest) {
        try {
            const { params } = httpRequest;
            const validationError = this.validation.validate(params);
            if (validationError)
                return (0, http_helper_1.badRequest)(validationError);
            const menu = await this.dbLoadSpeedOvensLegacyMenu.load(params.menuId);
            if (menu === null)
                return (0, http_helper_1.notFound)({ name: 'menuId', value: params.menuId });
            const { filePath, folderPath } = await this.dbExportForzaFile.export(menu);
            return (0, http_helper_1.download)(filePath, { filePath, folderPath });
        }
        catch (error) {
            return (0, http_helper_1.serverError)(error);
        }
    }
}
exports.ExportForzaFileController = ExportForzaFileController;
