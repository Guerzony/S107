"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeUpdateEquipmentController = void 0;
const update_equipment_body_validation_factory_1 = require("./update-equipment-body-validation-factory");
const update_equipment_params_validation_factory_1 = require("./update-equipment-params-validation-factory");
const db_update_equipment_factory_1 = require("../../usecases/update-equipment/db-update-equipment-factory");
const log_mysql_repository_1 = require("../../../../infra/db/mysql/log/log-mysql-repository");
const update_equipment_controller_1 = require("../../../../presentation/controller/update-equipment/update-equipment-controller");
const log_controller_decorator_1 = require("../../../decorators/log-controller-decorator");
const db_load_equip_by_pin_factory_1 = require("../../usecases/load-equip-by-pin/db-load-equip-by-pin-factory");
const makeUpdateEquipmentController = (pool) => {
    const logMysqlRepository = new log_mysql_repository_1.LogMysqlRepository(pool);
    const updateEquipmentController = new update_equipment_controller_1.UpdateEquipmentController((0, update_equipment_params_validation_factory_1.makeUpdateEquipmentParamsValidation)(), (0, update_equipment_body_validation_factory_1.makeUpdateEquipmentBodyValidation)(), (0, db_update_equipment_factory_1.makeDbUpdateEquipment)(pool), (0, db_load_equip_by_pin_factory_1.makeLoadEquipByPin)(pool));
    return new log_controller_decorator_1.LogControllerDecorator(updateEquipmentController, logMysqlRepository);
};
exports.makeUpdateEquipmentController = makeUpdateEquipmentController;
