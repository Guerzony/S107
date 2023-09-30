"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExportTsiFileController = void 0;
const http_helper_1 = require("../../helpers/http-helper");
class ExportTsiFileController {
    // eslint-disable-next-line no-useless-constructor
    constructor(validation, loadTsiConfigs, loadTsiGroups, exportTsiFile) {
        this.validation = validation;
        this.loadTsiConfigs = loadTsiConfigs;
        this.loadTsiGroups = loadTsiGroups;
        this.exportTsiFile = exportTsiFile;
    }
    async handle(httpRequest) {
        try {
            const { params } = httpRequest;
            const validationError = this.validation.validate(params);
            if (validationError)
                return (0, http_helper_1.badRequest)(validationError);
            const configs = await this.loadTsiConfigs.load(params.menuId);
            if (!configs)
                return (0, http_helper_1.notFound)({ name: 'menuId', value: params.menuId });
            const groups = await this.loadTsiGroups.load(params.menuId);
            const { filePath, folderPath } = await this.exportTsiFile.export({ configs, groups });
            return (0, http_helper_1.download)(filePath, { filePath, folderPath });
        }
        catch (error) {
            return (0, http_helper_1.serverError)(error);
        }
    }
}
exports.ExportTsiFileController = ExportTsiFileController;
