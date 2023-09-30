"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyTypesMySqlRepository = void 0;
const mysql_helper_1 = require("../mysql-helper");
class CompanyTypesMySqlRepository {
    constructor(pool) {
        this.connectionPool = pool;
    }
    async load() {
        return await (0, mysql_helper_1.customGet)(this.connectionPool, 'SELECT * FROM companyType');
    }
}
exports.CompanyTypesMySqlRepository = CompanyTypesMySqlRepository;
