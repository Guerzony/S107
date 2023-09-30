"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeExportTsiFileControllerFactory = void 0;
const log_mysql_repository_1 = require("../../../../infra/db/mysql/log/log-mysql-repository");
const controller_1 = require("../../../../presentation/controller");
const export_tsi_file_validation_factory_1 = require("./export-tsi-file-validation-factory");
const usecases_1 = require("../../usecases");
const log_controller_decorator_1 = require("../../../decorators/log-controller-decorator");
const makeExportTsiFileControllerFactory = (pool) => {
    const log = new log_mysql_repository_1.LogMysqlRepository(pool);
    const validation = (0, export_tsi_file_validation_factory_1.makeExportTsiFileValidationFactory)();
    const dbLoadTsiConfigs = (0, usecases_1.makeDbLoadTsiConfigsFactory)(pool);
    const dbLoadTsiGroups = (0, usecases_1.makeDbLoadTsiGroupsFactory)(pool);
    const dbExportTsiFile = (0, usecases_1.makeDbExportTsiFileFactory)();
    const controller = new controller_1.ExportTsiFileController(validation, dbLoadTsiConfigs, dbLoadTsiGroups, dbExportTsiFile);
    return new log_controller_decorator_1.LogControllerDecorator(controller, log);
};
exports.makeExportTsiFileControllerFactory = makeExportTsiFileControllerFactory;
