"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeDbLoadUserOld = void 0;
const db_load_equipOld_by_idUser_1 = require("../../../../data/usecases/load-equipOld-by-idUser/db-load-equipOld-by-idUser");
const user_mysql_repository_1 = require("../../../../infra/db/mysql/recover-user/user-mysql-repository");
const makeDbLoadUserOld = () => {
    const recoverUserMySqlRepository = new user_mysql_repository_1.RecoverUserMySqlRepository();
    return new db_load_equipOld_by_idUser_1.DbLoadUserOldByidUser(recoverUserMySqlRepository);
};
exports.makeDbLoadUserOld = makeDbLoadUserOld;
