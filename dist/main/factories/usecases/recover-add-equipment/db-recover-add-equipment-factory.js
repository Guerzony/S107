"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeRecoverAddEquipment = void 0;
const equip_mysql_repository_1 = require("../../../../infra/db/mysql/equipment/equip-mysql-repository");
const db_recover_add_equipment_1 = require("../../../../data/usecases/recover-add-equipment/db-recover-add-equipment");
const makeRecoverAddEquipment = (pool) => {
    const equipMySqlRepository = new equip_mysql_repository_1.EquipMySqlRepository(pool);
    return new db_recover_add_equipment_1.DbRecoverAddEquip(equipMySqlRepository);
};
exports.makeRecoverAddEquipment = makeRecoverAddEquipment;
