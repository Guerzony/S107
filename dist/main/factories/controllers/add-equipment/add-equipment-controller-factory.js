"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeAddEquipmentController = void 0;
const add_equipment_validation_factory_1 = require("./add-equipment-validation-factory");
const db_add_equipment_factory_1 = require("../../usecases/add-equipment/db-add-equipment-factory");
const log_mysql_repository_1 = require("../../../../infra/db/mysql/log/log-mysql-repository");
const add_equipment_controller_1 = require("../../../../presentation/controller/add-equipment/add-equipment-controller");
const log_controller_decorator_1 = require("../../../decorators/log-controller-decorator");
const makeAddEquipmentController = (pool) => {
    const logMysqlRepository = new log_mysql_repository_1.LogMysqlRepository(pool);
    const addEquipmentController = new add_equipment_controller_1.AddEquipmentController((0, add_equipment_validation_factory_1.makeAddEquipmentValidation)(), (0, db_add_equipment_factory_1.makeDbAddEquipment)(pool));
    return new log_controller_decorator_1.LogControllerDecorator(addEquipmentController, logMysqlRepository);
};
exports.makeAddEquipmentController = makeAddEquipmentController;
