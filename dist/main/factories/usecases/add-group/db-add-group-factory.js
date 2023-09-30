"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeDbAddGroup = void 0;
const db_add_group_1 = require("../../../../data/usecases/add-group/db-add-group");
const group_mysql_repository_1 = require("../../../../infra/db/mysql/group/group-mysql-repository");
const makeDbAddGroup = (pool) => {
    const groupySqlRepository = new group_mysql_repository_1.GroupMySqlRepository(pool);
    return new db_add_group_1.DbAddGroup(groupySqlRepository);
};
exports.makeDbAddGroup = makeDbAddGroup;
