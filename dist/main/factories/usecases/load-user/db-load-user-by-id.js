"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeDbLoadUserById = void 0;
const user_mysql_repository_1 = require("../../../../infra/user/user-mysql-repository");
const db_load_user_by_id_1 = require("../../../../data/usecases/load-user-by-id/db-load-user-by-id");
const makeDbLoadUserById = () => {
    const loadUserByRepository = new user_mysql_repository_1.UserMySqlRepository();
    return new db_load_user_by_id_1.DbLoadUserById(loadUserByRepository);
};
exports.makeDbLoadUserById = makeDbLoadUserById;
