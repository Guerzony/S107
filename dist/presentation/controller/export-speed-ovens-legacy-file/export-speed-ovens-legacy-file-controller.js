"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExportSpeedOvensLegacyFileController = void 0;
const http_helper_1 = require("../../helpers/http-helper");
class ExportSpeedOvensLegacyFileController {
    // eslint-disable-next-line no-useless-constructor
    constructor(validation, dbLoadSpeedOvensLegacyMenu, dbExportSpeedOvensLegacyFile) {
        this.validation = validation;
        this.dbLoadSpeedOvensLegacyMenu = dbLoadSpeedOvensLegacyMenu;
        this.dbExportSpeedOvensLegacyFile = dbExportSpeedOvensLegacyFile;
    }
    async handle(httpRequest) {
        try {
            const { params } = httpRequest;
            const validationError = this.validation.validate(params);
            if (validationError)
                return (0, http_helper_1.badRequest)(validationError);
            const { menuId, generation } = params;
            const menu = await this.dbLoadSpeedOvensLegacyMenu.load(menuId);
            if (menu === null)
                return (0, http_helper_1.notFound)({ name: 'menuId', value: menuId });
            const { filePath, folderPath } = await this.dbExportSpeedOvensLegacyFile.export(menu, generation);
            return (0, http_helper_1.download)(filePath, { filePath, folderPath });
        }
        catch (error) {
            return (0, http_helper_1.serverError)(error);
        }
    }
}
exports.ExportSpeedOvensLegacyFileController = ExportSpeedOvensLegacyFileController;
