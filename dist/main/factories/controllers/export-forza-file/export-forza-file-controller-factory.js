"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeExportForzaFileControllerFactory = void 0;
const log_mysql_repository_1 = require("../../../../infra/db/mysql/log/log-mysql-repository");
const log_controller_decorator_1 = require("../../../decorators/log-controller-decorator");
const controller_1 = require("../../../../presentation/controller");
const export_forza_file_validation_factory_1 = require("./export-forza-file-validation-factory");
const usecases_1 = require("../../usecases");
const makeExportForzaFileControllerFactory = (pool) => {
    const log = new log_mysql_repository_1.LogMysqlRepository(pool);
    const validation = (0, export_forza_file_validation_factory_1.makeExportForzaFileValidationFactory)();
    const dbLoadSpeedOvensLegacyMenu = (0, usecases_1.makeDbLoadSpeedOvensLegacyMenuFactory)(pool);
    const dbExportForzaFile = (0, usecases_1.makeDbExportForzaFileFactory)();
    const controller = new controller_1.ExportForzaFileController(validation, dbLoadSpeedOvensLegacyMenu, dbExportForzaFile);
    return new log_controller_decorator_1.LogControllerDecorator(controller, log);
};
exports.makeExportForzaFileControllerFactory = makeExportForzaFileControllerFactory;
