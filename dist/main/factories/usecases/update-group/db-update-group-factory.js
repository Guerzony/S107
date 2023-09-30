"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeDbUpdateGroup = void 0;
const db_update_group_1 = require("../../../../data/usecases/update-group/db-update-group");
const group_mysql_repository_1 = require("../../../../infra/db/mysql/group/group-mysql-repository");
const makeDbUpdateGroup = (pool) => {
    const groupySqlRepository = new group_mysql_repository_1.GroupMySqlRepository(pool);
    return new db_update_group_1.DbUpdateGroup(groupySqlRepository);
};
exports.makeDbUpdateGroup = makeDbUpdateGroup;
