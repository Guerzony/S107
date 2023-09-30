"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeCountEquipmentController = void 0;
const log_mysql_repository_1 = require("../../../../infra/db/mysql/log/log-mysql-repository");
const count_equipment_controller_1 = require("../../../../presentation/controller/count-equipment/count-equipment-controller");
const log_controller_decorator_1 = require("../../../decorators/log-controller-decorator");
const db_count_equipment_factory_1 = require("../../usecases/count-equipment/db-count-equipment-factory");
const count_equipment_validation_factory_1 = require("./count-equipment-validation-factory");
const makeCountEquipmentController = (pool) => {
    const logMysqlRepository = new log_mysql_repository_1.LogMysqlRepository(pool);
    const controller = new count_equipment_controller_1.CountEquipmentController((0, count_equipment_validation_factory_1.makeCountEquipmentValidation)(), (0, db_count_equipment_factory_1.makeDbCountEquipment)(pool));
    return new log_controller_decorator_1.LogControllerDecorator(controller, logMysqlRepository);
};
exports.makeCountEquipmentController = makeCountEquipmentController;
