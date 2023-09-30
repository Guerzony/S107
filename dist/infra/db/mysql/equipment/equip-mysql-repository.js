"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EquipMySqlRepository = void 0;
const mysql_helper_1 = require("../mysql-helper");
const query_helpers_1 = require("../query-helpers");
class EquipMySqlRepository {
    constructor(pool) {
        this.connectionPool = pool;
    }
    async loadEquipByCompanyIdRemoteAccess(companyIdRemoteAccess) {
        const sql = (0, query_helpers_1.loadEquipByCompanyIdRemoteAccessSQL)(companyIdRemoteAccess);
        return await (0, mysql_helper_1.customGet)(this.connectionPool, sql);
    }
    async addRecoverEquipment(equipment) {
        const result = await (0, mysql_helper_1.insertOne)(this.connectionPool, 'equipment', equipment);
        const equipmentResponse = await (0, mysql_helper_1.getOne)(this.connectionPool, 'equipment', 'id', result.insertId);
        return equipmentResponse[0];
    }
    async loadEquipByUserId(userId) {
        const sql = (0, query_helpers_1.loadEquipByUserIdSQL)(userId);
        return await (0, mysql_helper_1.customGet)(this.connectionPool, sql);
    }
    async loadEquipBySerialNumber(serialNumber) {
        const result = await (0, mysql_helper_1.getOne)(this.connectionPool, 'equipment', 'serialNumber', serialNumber);
        return result[0];
    }
    async addEquipment(equipment) {
        const result = await (0, mysql_helper_1.insertOne)(this.connectionPool, 'equipment', equipment);
        const equipmentResponse = await (0, mysql_helper_1.getOne)(this.connectionPool, 'equipment', 'id', result.insertId);
        return equipmentResponse[0];
    }
    async loadByEquipMenu(menuId) {
        const result = await (0, mysql_helper_1.getOne)(this.connectionPool, 'equipment', 'sentMenu', menuId);
        return result;
    }
    async loadByEquipPin(IOKPin) {
        const result = await (0, mysql_helper_1.getOne)(this.connectionPool, 'equipment', 'iokPin', IOKPin);
        return result[0];
    }
    async registerEquip(idEquip, idCompany) {
        await (0, mysql_helper_1.updateById)(this.connectionPool, 'equipment', 'companyId', idEquip, idCompany);
    }
    async loadEquipByCompanyId(companyId) {
        const sql = (0, query_helpers_1.loadEquipByCompanyIdSQL)(companyId);
        return await (0, mysql_helper_1.customGet)(this.connectionPool, sql);
    }
    async loadEquipById(id) {
        const sql = (0, query_helpers_1.loadEquipByIdSQL)(id);
        const result = await (0, mysql_helper_1.customGet)(this.connectionPool, sql);
        if (result.length === 0)
            return null;
        return result[0];
    }
    async updateEquipment(id, equipment) {
        const setFields = Object.entries(equipment)
            .map(value => `${value[0]} = ${isNaN(value[1]) ? `"${value[1]}"` : value[1]}`)
            .join(', ');
        const result = await (0, mysql_helper_1.updateAll)(this.connectionPool, 'equipment', setFields, id);
        if (result.affectedRows === 0)
            return false;
        return true;
    }
    async deleteEquipment(id) {
        const result = await (0, mysql_helper_1.deleteById)(this.connectionPool, 'equipment', 'id', id);
        if (result.affectedRows === 0)
            return false;
        return true;
    }
    async countEquipment(where) {
        const sql = (0, query_helpers_1.countEquipmentSQL)(where);
        const result = await (0, mysql_helper_1.customGet)(this.connectionPool, sql);
        return result[0];
    }
}
exports.EquipMySqlRepository = EquipMySqlRepository;
