"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeDeleteEquipmentController = void 0;
const log_mysql_repository_1 = require("../../../../infra/db/mysql/log/log-mysql-repository");
const log_controller_decorator_1 = require("../../../decorators/log-controller-decorator");
const delete_equipment_controller_1 = require("../../../../presentation/controller/delete-equipment/delete-equipment-controller");
const delete_equipment_validation_factory_1 = require("./delete-equipment-validation-factory");
const db_delete_equipment_factory_1 = require("../../usecases/delete-equipment/db-delete-equipment-factory");
const makeDeleteEquipmentController = (pool) => {
    const logMysqlRepository = new log_mysql_repository_1.LogMysqlRepository(pool);
    const deleteEquipmentController = new delete_equipment_controller_1.DeleteEquipmentController((0, delete_equipment_validation_factory_1.makeDeleteEquipmentValidation)(), (0, db_delete_equipment_factory_1.makeDbDeleteEquipment)(pool));
    return new log_controller_decorator_1.LogControllerDecorator(deleteEquipmentController, logMysqlRepository);
};
exports.makeDeleteEquipmentController = makeDeleteEquipmentController;
