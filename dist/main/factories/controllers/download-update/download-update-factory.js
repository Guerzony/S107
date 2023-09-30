"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeDownloadUpdateController = void 0;
const log_mysql_repository_1 = require("../../../../infra/db/mysql/log/log-mysql-repository");
const download_update_controller_1 = require("../../../../presentation/controller/download-update/download-update-controller");
const log_controller_decorator_1 = require("../../../decorators/log-controller-decorator");
const db_download_update_1 = require("../../usecases/download-update/db-download-update");
const download_update_validation_factory_1 = require("./download-update-validation-factory");
const makeDownloadUpdateController = (pool) => {
    const logMysqlRepository = new log_mysql_repository_1.LogMysqlRepository(pool);
    const downloadUpdateController = new download_update_controller_1.DownloadUpdateController((0, db_download_update_1.makeDbDownloadUpdate)(), (0, download_update_validation_factory_1.makeDownloadUpdateValidation)());
    return new log_controller_decorator_1.LogControllerDecorator(downloadUpdateController, logMysqlRepository);
};
exports.makeDownloadUpdateController = makeDownloadUpdateController;
