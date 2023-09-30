"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeExportSpeedOvensFileControllerFactory = void 0;
const log_mysql_repository_1 = require("../../../../infra/db/mysql/log/log-mysql-repository");
const controller_1 = require("../../../../presentation/controller");
const export_speed_ovens_file_validation_factory_1 = require("./export-speed-ovens-file-validation-factory");
const usecases_1 = require("../../usecases");
const log_controller_decorator_1 = require("../../../decorators/log-controller-decorator");
const makeExportSpeedOvensFileControllerFactory = (pool) => {
    const log = new log_mysql_repository_1.LogMysqlRepository(pool);
    const validation = (0, export_speed_ovens_file_validation_factory_1.makeExportSpeedOvensFileValidationFactory)();
    const dbLoadSpeedOvensConfigs = (0, usecases_1.makeDbLoadSpeedOvensConfigsFactory)(pool);
    const dbLoadSpeedOvensGroups = (0, usecases_1.makeDbLoadSpeedOvensGroupsFactory)(pool);
    const dbLoadSpeedOvensRecipes = (0, usecases_1.makeDbLoadSpeedOvensRecipesFactory)(pool);
    const dbExportSpeedOvensFile = (0, usecases_1.makeDbExportSpeedOvensFileFactory)();
    const controller = new controller_1.ExportSpeedOvensFileController(validation, dbLoadSpeedOvensConfigs, dbLoadSpeedOvensGroups, dbLoadSpeedOvensRecipes, dbExportSpeedOvensFile);
    return new log_controller_decorator_1.LogControllerDecorator(controller, log);
};
exports.makeExportSpeedOvensFileControllerFactory = makeExportSpeedOvensFileControllerFactory;
