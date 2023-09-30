"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeDbAddUserTutorial = void 0;
const tutorials_mysql_repository_1 = require("../../../../infra/db/mysql/tutorials/tutorials-mysql-repository");
const db_add_userTutorials_1 = require("../../../../data/usecases/add-userTutorials/db-add-userTutorials");
const makeDbAddUserTutorial = (pool) => {
    const tutorialSqlRepository = new tutorials_mysql_repository_1.TutorialsMySqlRepository(pool);
    return new db_add_userTutorials_1.DbAddUserTutorials(tutorialSqlRepository);
};
exports.makeDbAddUserTutorial = makeDbAddUserTutorial;
