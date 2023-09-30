"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeUpdateSoftwareController = void 0;
const log_mysql_repository_1 = require("../../../../infra/db/mysql/log/log-mysql-repository");
const update_software_controller_1 = require("../../../../presentation/controller/update-software/update-software-controller");
const log_controller_decorator_1 = require("../../../decorators/log-controller-decorator");
const db_load_equip_by_pin_factory_1 = require("../../usecases/load-equip-by-pin/db-load-equip-by-pin-factory");
const db_update_software_1 = require("../../usecases/update-software/db-update-software");
const update_software_validation_factory_1 = require("./update-software-validation-factory");
const makeUpdateSoftwareController = (pool) => {
    const logMysqlRepository = new log_mysql_repository_1.LogMysqlRepository(pool);
    const updateSoftwareController = new update_software_controller_1.UpdateSoftwareController((0, db_update_software_1.makeDbUpdateSoftware)(), (0, update_software_validation_factory_1.makeUpdateSoftwareValidation)(), (0, db_load_equip_by_pin_factory_1.makeLoadEquipByPin)(pool));
    return new log_controller_decorator_1.LogControllerDecorator(updateSoftwareController, logMysqlRepository);
};
exports.makeUpdateSoftwareController = makeUpdateSoftwareController;
