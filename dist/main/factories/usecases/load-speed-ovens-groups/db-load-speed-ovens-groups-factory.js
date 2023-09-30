"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeDbLoadSpeedOvensGroupsFactory = void 0;
const usecases_1 = require("../../../../data/usecases");
const mysql_1 = require("../../../../infra/db/mysql");
const makeDbLoadSpeedOvensGroupsFactory = (pool) => {
    const repository = new mysql_1.GroupMySqlRepository(pool);
    return new usecases_1.DbLoadSpeedOvensGroups(repository);
};
exports.makeDbLoadSpeedOvensGroupsFactory = makeDbLoadSpeedOvensGroupsFactory;
