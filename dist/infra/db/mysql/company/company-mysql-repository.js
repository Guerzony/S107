"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyMySqlRepository = void 0;
const mysql_helper_1 = require("../mysql-helper");
const company_mysql_repository_helper_1 = require("./company-mysql-repository-helper");
class CompanyMySqlRepository {
    constructor(pool) {
        this.connectionPool = pool;
    }
    async loadByPraticaDistributor() {
        const result = await (0, mysql_helper_1.customGet)(this.connectionPool, `SELECT * FROM company where companyType = "Prática" || companyType =  "Distribuidor"`);
        if (result.length === 0)
            return null;
        return result;
    }
    async add(companyData) {
        const result = await (0, mysql_helper_1.insertOne)(this.connectionPool, 'company', companyData);
        return (0, company_mysql_repository_helper_1.mapCreatedCompany)(companyData, result.insertId);
    }
    async loadByCorporateName(corporateName) {
        const result = await (0, mysql_helper_1.getOne)(this.connectionPool, 'company', 'corporateName', corporateName);
        return result[0];
    }
    async loadById(id) {
        const result = await (0, mysql_helper_1.getOne)(this.connectionPool, 'company', 'id', id);
        return result[0];
    }
}
exports.CompanyMySqlRepository = CompanyMySqlRepository;
