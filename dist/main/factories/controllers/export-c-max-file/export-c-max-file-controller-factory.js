"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeExportCMaxFileControllerFactory = void 0;
const log_mysql_repository_1 = require("../../../../infra/db/mysql/log/log-mysql-repository");
const log_controller_decorator_1 = require("../../../decorators/log-controller-decorator");
const controller_1 = require("../../../../presentation/controller");
const export_c_max_file_validation_factory_1 = require("./export-c-max-file-validation-factory");
const load_c_max_recipes_1 = require("../../usecases/load-c-max-recipes");
const export_c_max_file_1 = require("../../usecases/export-c-max-file");
const makeExportCMaxFileControllerFactory = (pool) => {
    const log = new log_mysql_repository_1.LogMysqlRepository(pool);
    const validation = (0, export_c_max_file_validation_factory_1.makeExportCMaxFileValidationFactory)();
    const dbLoadCMaxRecipes = (0, load_c_max_recipes_1.makeDbLoadCMaxRecipesFactory)(pool);
    const dbExportCMaxFile = (0, export_c_max_file_1.makeDbExportCMaxFileFactory)();
    const controller = new controller_1.ExportCMaxFileController(validation, dbLoadCMaxRecipes, dbExportCMaxFile);
    return new log_controller_decorator_1.LogControllerDecorator(controller, log);
};
exports.makeExportCMaxFileControllerFactory = makeExportCMaxFileControllerFactory;
