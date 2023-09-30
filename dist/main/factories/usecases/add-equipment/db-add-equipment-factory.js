"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeDbAddEquipment = void 0;
const equip_mysql_repository_1 = require("../../../../infra/db/mysql/equipment/equip-mysql-repository");
const db_add_equipment_1 = require("../../../../data/usecases/add-equipment/db-add-equipment");
const creat_randomString_factor_1 = require("../../../../utils/factors/creat-randomString-factor");
const makeDbAddEquipment = (pool) => {
    const codeRandom = new creat_randomString_factor_1.CodeRandom();
    const repository = new equip_mysql_repository_1.EquipMySqlRepository(pool);
    return new db_add_equipment_1.DbAddEquipment(repository, codeRandom);
};
exports.makeDbAddEquipment = makeDbAddEquipment;
