"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StoreMySqlRepository = void 0;
const store_mysql_repository_helper_1 = require("./store-mysql-repository-helper");
const mysql_helper_1 = require("../mysql-helper");
class StoreMySqlRepository {
    constructor(pool) {
        this.connectionPool = pool;
    }
    async loadStoresByUser(idUser) {
        const result = await (0, mysql_helper_1.customGet)(this.connectionPool, `SELECT * FROM store AS S INNER JOIN UserBelongStore AS U ON (U.idStore = S.id) WHERE U.idUser = ${idUser}`);
        for (let i = 0; i < result.length; i++) {
            const equipCount = await (0, mysql_helper_1.customGet)(this.connectionPool, `SELECT COUNT(*) as count FROM user WHERE storeId = ${result[i].id}`);
            const temp = { userCount: equipCount[0].count };
            Object.assign(result[i], temp);
        }
        return result;
    }
    async addStore(storeData, userId) {
        const result = await (0, mysql_helper_1.insertOne)(this.connectionPool, 'store', storeData);
        await (0, mysql_helper_1.insertOne)(this.connectionPool, 'UserBelongStore', { idUser: userId, idStore: result.insertId });
        return (0, store_mysql_repository_helper_1.mapCreatedStore)(storeData, result.insertId);
    }
    async deleteStore(id) {
        await (0, mysql_helper_1.deleteById)(this.connectionPool, 'store', 'id', id);
    }
    async loadStoreById(id) {
        const result = await (0, mysql_helper_1.getOne)(this.connectionPool, 'store', 'id', id);
        return result[0];
    }
    async loadStoresByCompanyId(idCompany) {
        const result = await (0, mysql_helper_1.getOne)(this.connectionPool, 'store', 'companyId', idCompany);
        for (let i = 0; i < result.length; i++) {
            const equipCount = await (0, mysql_helper_1.customGet)(this.connectionPool, `SELECT COUNT(*) as count FROM user WHERE storeId = ${result[i].id}`);
            const temp = { userCount: equipCount[0].count };
            Object.assign(result[i], temp);
        }
        console.log(result);
        if (result.length === 0) {
            return null;
        }
        return result;
    }
    async updateStore(id, storeData) {
        const storeFields = (`id = ${id},
      companyId = ${storeData.companyId},
      storeName = '${storeData.storeName}',
      cnpj = '${storeData.cnpj}',
      street = '${storeData.street}',
      state = '${storeData.state}',
      neighborhood = '${storeData.neighborhood}',
      zipCode = ${storeData.zipCode},
      streetNumber = ${storeData.streetNumber},
      city = '${storeData.city}',
      latitude = '${storeData.latitude}',
      longitude = '${storeData.longitude}'`);
        const result = await (0, mysql_helper_1.updateAll)(this.connectionPool, 'store', storeFields, id);
        if (result.affectedRows === 0) {
            return null;
        }
        return { ...storeData, id: id };
    }
}
exports.StoreMySqlRepository = StoreMySqlRepository;
