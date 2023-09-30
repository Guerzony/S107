"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeExportSpeedOvensLegacyFileControllerFactory = void 0;
const log_mysql_repository_1 = require("../../../../infra/db/mysql/log/log-mysql-repository");
const log_controller_decorator_1 = require("../../../decorators/log-controller-decorator");
const controller_1 = require("../../../../presentation/controller");
const export_speed_ovens_legacy_file_validation_factory_1 = require("./export-speed-ovens-legacy-file-validation-factory");
const usecases_1 = require("../../usecases");
const makeExportSpeedOvensLegacyFileControllerFactory = (pool) => {
    const log = new log_mysql_repository_1.LogMysqlRepository(pool);
    const validation = (0, export_speed_ovens_legacy_file_validation_factory_1.makeExportSpeedOvensLegacyFileValidationFactory)();
    const dbLoadSpeedOvensLegacyMenu = (0, usecases_1.makeDbLoadSpeedOvensLegacyMenuFactory)(pool);
    const dbExportSpeedOvensLegacyFile = (0, usecases_1.makeDbExportSpeedOvensLegacyFileFactory)();
    const controller = new controller_1.ExportSpeedOvensLegacyFileController(validation, dbLoadSpeedOvensLegacyMenu, dbExportSpeedOvensLegacyFile);
    return new log_controller_decorator_1.LogControllerDecorator(controller, log);
};
exports.makeExportSpeedOvensLegacyFileControllerFactory = makeExportSpeedOvensLegacyFileControllerFactory;
