"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeLoadTutorials = void 0;
const tutorials_mysql_repository_1 = require("../../../../infra/db/mysql/tutorials/tutorials-mysql-repository");
const db_load_tutorials_unmade_user_1 = require("../../../../data/usecases/load-tutorials-unmade-user/db-load-tutorials-unmade-user");
const makeLoadTutorials = (pool) => {
    const tutorialsMySqlRepository = new tutorials_mysql_repository_1.TutorialsMySqlRepository(pool);
    return new db_load_tutorials_unmade_user_1.DbLoadUnmadeTutorialsByUser(tutorialsMySqlRepository);
};
exports.makeLoadTutorials = makeLoadTutorials;
