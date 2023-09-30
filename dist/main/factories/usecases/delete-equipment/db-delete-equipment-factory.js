"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeDbDeleteEquipment = void 0;
const db_delete_equipment_1 = require("../../../../data/usecases/delete-equipment/db-delete-equipment");
const equip_mysql_repository_1 = require("../../../../infra/db/mysql/equipment/equip-mysql-repository");
const makeDbDeleteEquipment = (pool) => {
    const repository = new equip_mysql_repository_1.EquipMySqlRepository(pool);
    return new db_delete_equipment_1.DbDeleteEquipment(repository);
};
exports.makeDbDeleteEquipment = makeDbDeleteEquipment;
