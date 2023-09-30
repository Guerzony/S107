"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TutorialsMySqlRepository = void 0;
const mysql_helper_1 = require("../mysql-helper");
class TutorialsMySqlRepository {
    constructor(pool) {
        this.connectionPool = pool;
    }
    async addUserTutorials(relationData) {
        await (0, mysql_helper_1.insertOne)(this.connectionPool, 'usersTutorials', relationData);
        return relationData;
    }
    async loadUnmadeTutorialsByUser(idUser) {
        const result = await (0, mysql_helper_1.customGet)(this.connectionPool, `SELECT t.*
    FROM tutorials t
    LEFT JOIN usersTutorials ut ON t.id = ut.tutorialId AND ut.userId = ${idUser}
    WHERE ut.userId IS NULL;`);
        return result;
    }
}
exports.TutorialsMySqlRepository = TutorialsMySqlRepository;
