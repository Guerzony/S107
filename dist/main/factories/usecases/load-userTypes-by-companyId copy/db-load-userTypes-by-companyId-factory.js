"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeDbAddUserTypes = void 0;
const userTypes_mysql_repository_1 = require("../../../../infra/db/mysql/userTypes/userTypes-mysql-repository");
const db_add_userTypes_1 = require("../../../../data/usecases/add-userTypes/db-add-userTypes");
const makeDbAddUserTypes = (pool) => {
    const userTypesMySqlRepository = new userTypes_mysql_repository_1.UserTypesMySqlRepository(pool);
    return new db_add_userTypes_1.DbAddUserTypes(userTypesMySqlRepository, userTypesMySqlRepository);
};
exports.makeDbAddUserTypes = makeDbAddUserTypes;
