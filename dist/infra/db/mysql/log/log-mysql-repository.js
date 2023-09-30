"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogMysqlRepository = void 0;
const mysql_helper_1 = require("../mysql-helper");
class LogMysqlRepository {
    constructor(pool) {
        this.connectionPool = pool;
    }
    async logError(stack) {
        await (0, mysql_helper_1.deleteAll)(this.connectionPool, 'logs');
        await (0, mysql_helper_1.insertOne)(this.connectionPool, 'logs', { stack: stack });
    }
}
exports.LogMysqlRepository = LogMysqlRepository;
