"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeDbDeleteGroup = void 0;
const db_delete_group_1 = require("../../../../data/usecases/delete-group/db-delete-group");
const group_mysql_repository_1 = require("../../../../infra/db/mysql/group/group-mysql-repository");
const makeDbDeleteGroup = (pool) => {
    const groupySqlRepository = new group_mysql_repository_1.GroupMySqlRepository(pool);
    return new db_delete_group_1.DbDeleteGroup(groupySqlRepository);
};
exports.makeDbDeleteGroup = makeDbDeleteGroup;
