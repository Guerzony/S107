"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeDbCountEquipment = void 0;
const db_count_equipment_1 = require("../../../../data/usecases/count-equipment/db-count-equipment");
const equip_mysql_repository_1 = require("../../../../infra/db/mysql/equipment/equip-mysql-repository");
const makeDbCountEquipment = (pool) => {
    const repository = new equip_mysql_repository_1.EquipMySqlRepository(pool);
    return new db_count_equipment_1.DbCountEquipment(repository);
};
exports.makeDbCountEquipment = makeDbCountEquipment;
