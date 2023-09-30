"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeDbUpdateEquipment = void 0;
const equip_mysql_repository_1 = require("../../../../infra/db/mysql/equipment/equip-mysql-repository");
const db_update_equipment_1 = require("../../../../data/usecases/update-equipment/db-update-equipment");
const makeDbUpdateEquipment = (pool) => {
    const repository = new equip_mysql_repository_1.EquipMySqlRepository(pool);
    return new db_update_equipment_1.DbUpdateEquipment(repository);
};
exports.makeDbUpdateEquipment = makeDbUpdateEquipment;
